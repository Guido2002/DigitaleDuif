import { useCallback, useEffect, useRef } from "react";

type PauseableMediaElement = HTMLVideoElement | HTMLIFrameElement;

function isYouTubeEmbedUrl(url: string): boolean {
  return (
    url.includes("youtube.com/embed/") ||
    url.includes("youtube-nocookie.com/embed/")
  );
}

function postYouTubeCommand(iframe: HTMLIFrameElement, func: "pauseVideo" | "playVideo") {
  const message = JSON.stringify({
    event: "command",
    func,
    args: [],
  });

  let targetOrigin = "https://www.youtube.com";
  try {
    const src = iframe.getAttribute("src") ?? "";
    targetOrigin = new URL(src, globalThis.location?.href).origin;
  } catch {
    // Ignore and fall back to default target origin.
  }

  iframe.contentWindow?.postMessage(message, targetOrigin);
}

export type PauseMediaWhenNotInViewOptions = {
  enabled?: boolean;
  rootMargin?: string;
  threshold?: number;
};

/**
 * Pauses media when it leaves the viewport and resumes if it was playing.
 * - For <video>, uses element.pause()/play().
 * - For YouTube <iframe> embeds, sends postMessage commands (requires enablejsapi=1).
 */
export function usePauseMediaWhenNotInView(options: PauseMediaWhenNotInViewOptions = {}) {
  const { enabled = true, rootMargin = "200px 0px", threshold = 0.01 } = options;

  const elementRef = useRef<PauseableMediaElement | null>(null);
  const wasPlayingRef = useRef(false);

  const setRef = useCallback((node: PauseableMediaElement | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const element = elementRef.current;
    if (!element) return;

    const pause = () => {
      if (element instanceof HTMLVideoElement) {
        if (!element.paused && !element.ended) {
          wasPlayingRef.current = true;
        }
        element.pause();
        return;
      }

      // iframe
      const src = element.getAttribute("src") ?? "";
      if (isYouTubeEmbedUrl(src)) {
        wasPlayingRef.current = true;
        postYouTubeCommand(element, "pauseVideo");
      }
    };

    const resumeIfNeeded = () => {
      if (!wasPlayingRef.current) return;

      if (element instanceof HTMLVideoElement) {
        Promise.resolve()
          .then(() => element.play())
          .catch(() => {
            // Autoplay can be blocked or play() can fail; do nothing.
          });
        return;
      }

      const src = element.getAttribute("src") ?? "";
      if (isYouTubeEmbedUrl(src)) {
        postYouTubeCommand(element, "playVideo");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          resumeIfNeeded();
        } else {
          pause();
        }
      },
      { root: null, rootMargin, threshold },
    );

    observer.observe(element);

    const onVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        pause();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange, { passive: true });

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
      pause();
    };
  }, [enabled, rootMargin, threshold]);

  return setRef;
}
