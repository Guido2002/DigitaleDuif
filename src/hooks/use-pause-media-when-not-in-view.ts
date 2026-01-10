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
  playOnEnter?: boolean;
};

/**
 * Pauses media when it leaves the viewport and resumes if it was playing.
 * - For <video>, uses element.pause()/play().
 * - For YouTube <iframe> embeds, sends postMessage commands (requires enablejsapi=1).
 */
export function usePauseMediaWhenNotInView(options: PauseMediaWhenNotInViewOptions = {}) {
  const {
    enabled = true,
    rootMargin = "200px 0px",
    threshold = 0.01,
    playOnEnter = false,
  } = options;

  const elementRef = useRef<PauseableMediaElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const wasPlayingRef = useRef(false);

  const pauseElement = useCallback((element: PauseableMediaElement) => {
    if (element instanceof HTMLVideoElement) {
      if (!element.paused && !element.ended) {
        wasPlayingRef.current = true;
      }
      element.pause();
      return;
    }

    const src = element.getAttribute("src") ?? "";
    if (isYouTubeEmbedUrl(src)) {
      wasPlayingRef.current = true;
      postYouTubeCommand(element, "pauseVideo");
    }
  }, []);

  const resumeElementIfNeeded = useCallback((element: PauseableMediaElement) => {
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
  }, []);

  const playElement = useCallback((element: PauseableMediaElement) => {
    if (element instanceof HTMLVideoElement) {
      Promise.resolve()
        .then(() => element.play())
        .then(() => {
          wasPlayingRef.current = true;
        })
        .catch(() => {
          // Autoplay can be blocked or play() can fail; do nothing.
        });
      return;
    }

    const src = element.getAttribute("src") ?? "";
    if (isYouTubeEmbedUrl(src)) {
      wasPlayingRef.current = true;
      postYouTubeCommand(element, "playVideo");
    }
  }, []);

  const setRef = useCallback(
    (node: PauseableMediaElement | null) => {
      const previous = elementRef.current;
      if (previous && observerRef.current) {
        observerRef.current.unobserve(previous);
      }

      elementRef.current = node;

      if (node && enabled && observerRef.current) {
        observerRef.current.observe(node);
      }
    },
    [enabled],
  );

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target;
          if (!(target instanceof HTMLVideoElement) && !(target instanceof HTMLIFrameElement)) {
            continue;
          }

          if (entry.isIntersecting) {
            if (playOnEnter) {
              playElement(target);
            } else {
              resumeElementIfNeeded(target);
            }
          } else {
            pauseElement(target);
          }
        }
      },
      { root: null, rootMargin, threshold },
    );

    observerRef.current = observer;

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    const onVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        const current = elementRef.current;
        if (current) pauseElement(current);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange, { passive: true });

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
      observerRef.current = null;

      const current = elementRef.current;
      if (current) pauseElement(current);
    };
  }, [enabled, rootMargin, threshold, playOnEnter, pauseElement, resumeElementIfNeeded, playElement]);

  return setRef;
}
