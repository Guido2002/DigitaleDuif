import React, { useRef, useState, memo, useCallback } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '../data/mockData';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

type ProjectCardMediaProps = {
  isVideo: boolean;
  primaryMedia: string;
  title: string;
  client: string;
  isHovered: boolean;
  isActive: boolean;
  imageLoaded: boolean;
  onImageLoad: () => void;
  mediaRef: (node: HTMLVideoElement | HTMLIFrameElement | null) => void;
  shouldAutoplayVideo: boolean;
  shouldPreloadVideo: boolean;
};

const ProjectCardMedia: React.FC<ProjectCardMediaProps> = memo(function ProjectCardMedia({
  isVideo,
  primaryMedia,
  title,
  client,
  isHovered,
  isActive,
  imageLoaded,
  onImageLoad,
  mediaRef,
  shouldAutoplayVideo,
  shouldPreloadVideo,
}) {
  return (
    <div className="relative mb-4 overflow-hidden rounded-xl aspect-video bg-muted">
      {!imageLoaded && !isVideo && (
        <div className="absolute inset-0 bg-muted skeleton-pulse" />
      )}

      {isVideo ? (
        <video
          ref={mediaRef}
          src={primaryMedia}
          muted
          loop
          playsInline
          autoPlay={shouldAutoplayVideo}
          preload={shouldPreloadVideo ? "metadata" : "none"}
          className={cn(
            "h-full w-full object-cover transition-transform duration-300 ease-out",
            "group-hover:scale-105 group-[.is-active]:scale-105",
          )}
        />
      ) : (
        <img
          src={primaryMedia}
          alt={title}
          width={400}
          height={225}
          loading="lazy"
          decoding="async"
          onLoad={onImageLoad}
          className={cn(
            "h-full w-full object-cover transition-transform duration-300 ease-out",
            "group-hover:scale-105 group-[.is-active]:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300",
          (isHovered || isActive) ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="absolute top-3 left-3">
        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white text-primary group-hover:bg-primary group-hover:text-white group-[.is-active]:bg-primary group-[.is-active]:text-white transition-all duration-300 shadow-sm">
          {client}
        </span>
      </div>
    </div>
  );
});

type ProjectCardTechStackProps = {
  projectId: string;
  techStack: string[];
};

const ProjectCardTechStack: React.FC<ProjectCardTechStackProps> = memo(function ProjectCardTechStack({
  projectId,
  techStack,
}) {
  const visibleTech = techStack.slice(0, 3);
  const remainingCount = Math.max(0, techStack.length - visibleTech.length);

  return (
    <div className="flex flex-wrap gap-1.5 mt-auto">
      {visibleTech.map((tech) => (
        <span
          key={`${projectId}-tech-${tech}`}
          className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
        >
          {tech}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
          +{remainingCount}
        </span>
      )}
    </div>
  );
});

// Skeleton loader component with softer animation
const ProjectCardSkeleton: React.FC = () => (
  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-4">
    <div className="mb-4 rounded-xl aspect-video bg-muted skeleton-pulse" />
    <div className="space-y-3">
      <div className="h-6 bg-muted rounded-lg w-3/4 skeleton-pulse" style={{ animationDelay: '0.1s' }} />
      <div className="h-4 bg-muted rounded-lg w-full skeleton-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="h-4 bg-muted rounded-lg w-2/3 skeleton-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="flex gap-2 mt-4">
        <div className="h-6 w-16 bg-muted rounded-full skeleton-pulse" style={{ animationDelay: '0.4s' }} />
        <div className="h-6 w-20 bg-muted rounded-full skeleton-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="h-6 w-14 bg-muted rounded-full skeleton-pulse" style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  </div>
);

export { ProjectCardSkeleton };

function useVideoPlaybackInViewport(options: {
  enabled: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  shouldReduceMotion: boolean;
  shouldPlay: boolean;
}) {
  const { enabled, videoRef, shouldReduceMotion, shouldPlay } = options;

  React.useEffect(() => {
    if (!enabled) return;

    const video = videoRef.current;
    if (!video) return;

    if (shouldReduceMotion) {
      video.pause();
      return;
    }

    if (shouldPlay) {
      Promise.resolve()
        .then(() => video.play())
        .catch(() => {
          // Autoplay can be blocked or play() can fail; do nothing.
        });
    } else {
      video.pause();
    }
  }, [enabled, shouldReduceMotion, shouldPlay]);
}

function usePauseVideoOnPageHide(options: {
  enabled: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  const { enabled, videoRef } = options;

  React.useEffect(() => {
    if (!enabled) return;

    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        videoRef.current?.pause();
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [enabled, videoRef]);
}

function getProjectCardAnimateState(shouldReduceMotion: boolean, isActive: boolean) {
  if (shouldReduceMotion) return undefined;
  return isActive ? { y: -4 } : { y: 0 };
}

function getProjectCardVideoBehavior(options: {
  isVideo: boolean;
  shouldReduceMotion: boolean;
  isMediaInView: boolean;
}) {
  const { isVideo, shouldReduceMotion, isMediaInView } = options;

  if (!isVideo || shouldReduceMotion) {
    return { shouldPlayVideoNow: false, shouldPreloadVideo: false };
  }

  return {
    shouldPlayVideoNow: isMediaInView,
    shouldPreloadVideo: isMediaInView,
  };
}

const ProjectCard: React.FC<ProjectCardProps> = memo(function ProjectCard({ project, onClick }) {
  const divRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(() => Boolean(project.videoUrl));
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const isMobile = useIsMobile();
  const isCardInView = useInView(divRef, { margin: "-10% 0px -10% 0px", amount: 0.4 });
  const isMediaInView = useInView(divRef, { margin: "-20% 0px -20% 0px", amount: 0.2, once: false });
  const isActive = isMobile && isCardInView;

  const handleImageLoad = useCallback(() => setImageLoaded(true), []);
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => { setIsHovered(false); setIsPressed(false); }, []);
  const handlePressStart = useCallback(() => setIsPressed(true), []);
  const handlePressEnd = useCallback(() => setIsPressed(false), []);
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => e.key === 'Enter' && onClick(), [onClick]);

  const setMediaElementRef = useCallback((node: HTMLVideoElement | HTMLIFrameElement | null) => {
    videoElementRef.current = node instanceof HTMLVideoElement ? node : null;
  }, []);

  const primaryMedia = project.videoUrl ?? project.images[0];
  const isVideo = Boolean(project.videoUrl);
  const { shouldPlayVideoNow, shouldPreloadVideo } = getProjectCardVideoBehavior({
    isVideo,
    shouldReduceMotion,
    isMediaInView,
  });

  const shouldAutoplayVideo = false;

  useVideoPlaybackInViewport({
    enabled: isVideo,
    videoRef: videoElementRef,
    shouldReduceMotion,
    shouldPlay: shouldPlayVideoNow,
  });

  usePauseVideoOnPageHide({ enabled: isVideo, videoRef: videoElementRef });

  const animateState = getProjectCardAnimateState(shouldReduceMotion, isActive);

  return (
    <motion.div
      ref={divRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Bekijk project: ${project.title}`}
      style={{ willChange: "transform" }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/50 bg-card p-4 cursor-pointer group transition-all duration-150",
        "hover:border-primary/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        isActive && "border-primary/50 shadow-lg is-active",
        isPressed && "scale-[0.98] shadow-inner"
      )}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      animate={animateState}
      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.8 }}
    >
      <div className="relative flex flex-col h-full">
        <ProjectCardMedia
          isVideo={isVideo}
          primaryMedia={primaryMedia}
          title={project.title}
          client={project.client}
          isHovered={isHovered}
          isActive={isActive}
          imageLoaded={imageLoaded}
          onImageLoad={handleImageLoad}
          mediaRef={setMediaElementRef}
          shouldAutoplayVideo={shouldAutoplayVideo}
          shouldPreloadVideo={shouldPreloadVideo}
        />

        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary group-[.is-active]:text-primary transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3 leading-relaxed">
            {project.tagline}
          </p>
          
          <ProjectCardTechStack projectId={project.id} techStack={project.techStack} />
        </div>

        {/* CTA footer */}
        <div className="flex items-center justify-end mt-4 pt-3 border-t border-border/50">
          <motion.div 
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              "bg-primary/15 text-primary",
              "group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25",
              "group-[.is-active]:bg-primary group-[.is-active]:text-primary-foreground group-[.is-active]:shadow-lg group-[.is-active]:shadow-primary/25"
            )}
            animate={shouldReduceMotion ? undefined : { scale: (isHovered || isActive) ? 1.02 : 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            Bekijk project
            <motion.span
              animate={shouldReduceMotion ? undefined : { x: (isHovered || isActive) ? 2 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectCard;
