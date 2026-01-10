import React, { memo, useCallback, useMemo, useRef } from "react";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useCategory } from "@/context/CategoryContext";
import { projects, Project } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

type ProjectMediaElement = HTMLVideoElement | HTMLIFrameElement;

function renderProjectMedia(
  project: Project,
  shouldAutoplayVideo: boolean,
  shouldPreloadVideo: boolean,
  mediaRef: (node: ProjectMediaElement | null) => void,
): React.ReactNode {
  const videoUrl = project.videoUrl;
  if (!videoUrl) {
    return (
      <img
        src={project.images[0]}
        alt={project.title}
        width={640}
        height={400}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        style={{ willChange: 'transform' }}
      />
    );
  }

  const isLocalVideo = videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm");
  if (isLocalVideo) {
    // eslint-disable-next-line jsx-a11y/media-has-caption
    return (
      <video
        ref={mediaRef}
        src={videoUrl}
        autoPlay={shouldAutoplayVideo}
        muted
        loop
        playsInline
        preload={shouldPreloadVideo ? "metadata" : "auto"}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    );
  }

  return (
    <iframe
      ref={mediaRef}
      src={`${videoUrl}?autoplay=${shouldAutoplayVideo ? 1 : 0}&mute=1&controls=${shouldAutoplayVideo ? 0 : 1}&loop=1&playlist=${videoUrl.split("/").pop()}&enablejsapi=1`}
      title={project.title}
      className="w-full h-full object-cover scale-150"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}

// Map category to serviceIds (same as in ImpactCasesSection)
const categoryServiceMap: Record<string, string[]> = {
  'xr': ['vr-app-dev', 'mr-interfaces', 'data-analytics'],
  'websites': ['web-development', 'ui-ux-design'],
  'mobile-apps': ['mobile-app-development'],
};

interface ProjectCardProps {
  project: Project;
  index: number;
  categoryKey?: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, index }) => {
  const mediaElementRef = useRef<ProjectMediaElement | null>(null);
  const playAttemptIntervalRef = useRef<ReturnType<typeof globalThis.setInterval> | null>(null);
  const isMobile = useIsMobile();

  const { ref: animationRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  // Desktop: stricter viewport detection - requires 50% visible with 20% margins
  const { ref: mediaInViewRef, inView: isMediaInView } = useInView({ 
    threshold: isMobile ? 0.2 : 0.5, 
    rootMargin: isMobile ? "0px" : "-20% 0px -20% 0px", 
    triggerOnce: false 
  });

  const setCardRefs = useCallback(
    (node: HTMLElement | null) => {
      animationRef(node);
      mediaInViewRef(node);
    },
    [animationRef, mediaInViewRef],
  );

  const setMediaRef = useCallback((node: ProjectMediaElement | null) => {
    mediaElementRef.current = node;
  }, []);

  const shouldReduceMotion = useReducedMotion();
  
  const yOffset = shouldReduceMotion ? 0 : 16;
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : yOffset,
    delay: shouldReduceMotion ? 0 : index * 60,
    config: { tension: 320, friction: 32 },
    immediate: shouldReduceMotion,
  });

  const videoUrl = project.videoUrl;
  const shouldControlVideo = Boolean(videoUrl) && !shouldReduceMotion;
  const shouldPlayVideoNow = shouldControlVideo && isMediaInView;
  const shouldPreloadVideo = true; // Always preload for homepage featured projects
  const shouldAutoplayVideo = true;

  React.useEffect(() => {
    if (!shouldControlVideo) return;
    const element = mediaElementRef.current;
    if (!(element instanceof HTMLVideoElement)) return;

    const attemptPlay = () => {
      const currentVideo = mediaElementRef.current;
      if (!(currentVideo instanceof HTMLVideoElement) || !shouldPlayVideoNow) return;
      
      if (currentVideo.paused && currentVideo.readyState >= 2) {
        currentVideo.play().catch(() => {
          // Silently fail - autoplay might be blocked
        });
      }
    };

    if (shouldPlayVideoNow) {
      // Immediate attempt
      attemptPlay();
      
      // Event-based attempts
      const handleLoadedMetadata = () => attemptPlay();
      const handleCanPlay = () => attemptPlay();
      const handleLoadedData = () => attemptPlay();
      
      element.addEventListener('loadedmetadata', handleLoadedMetadata);
      element.addEventListener('canplay', handleCanPlay);
      element.addEventListener('loadeddata', handleLoadedData);
      
      // Aggressive polling for mobile (every 200ms for 3 seconds)
      let attempts = 0;
      playAttemptIntervalRef.current = globalThis.setInterval(() => {
        attempts++;
        attemptPlay();
        if (attempts > 15 || !(mediaElementRef.current instanceof HTMLVideoElement) || !mediaElementRef.current.paused) {
          if (playAttemptIntervalRef.current) {
            clearInterval(playAttemptIntervalRef.current);
            playAttemptIntervalRef.current = null;
          }
        }
      }, 200);
      
      return () => {
        element.removeEventListener('loadedmetadata', handleLoadedMetadata);
        element.removeEventListener('canplay', handleCanPlay);
        element.removeEventListener('loadeddata', handleLoadedData);
        if (playAttemptIntervalRef.current) {
          clearInterval(playAttemptIntervalRef.current);
          playAttemptIntervalRef.current = null;
        }
      };
    } else {
      element.pause();
      if (playAttemptIntervalRef.current) {
        clearInterval(playAttemptIntervalRef.current);
        playAttemptIntervalRef.current = null;
      }
    }
  }, [shouldControlVideo, shouldPlayVideoNow]);

  // Pause video when page is hidden (tab switch, minimize, etc.)
  React.useEffect(() => {
    if (!shouldControlVideo) return;

    const handleVisibilityChange = () => {
      const element = mediaElementRef.current;
      if (!(element instanceof HTMLVideoElement)) return;

      if (document.hidden) {
        element.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [shouldControlVideo]);

  const mediaNode = renderProjectMedia(project, shouldAutoplayVideo, shouldPreloadVideo, setMediaRef);

  return (
    <animated.div
      ref={setCardRefs}
      style={{
        opacity: springProps.opacity,
        transform: springProps.y.to(y => `translate3d(0, ${y}px, 0)`),
        willChange: inView ? 'opacity, transform' : 'auto',
      }}
      className="group relative h-full"
    >
      <Link
        to={`/projecten?project=${project.id}`}
        className={cn(
          "block h-full rounded-2xl overflow-hidden bg-primary border border-primary-foreground/15",
          "transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/20 hover:border-primary-foreground/25",
          "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
        )}
      >
        {/* Media (prefer video when available) */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {mediaNode}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          
          {/* Client badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-foreground rounded-full">
              {project.client}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-primary-foreground mb-1 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-primary-foreground/90 mb-4">
            {project.tagline}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-primary-foreground/15 text-primary-foreground rounded border border-primary-foreground/15"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-xs bg-primary-foreground/15 text-primary-foreground rounded border border-primary-foreground/15">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-5 h-5 text-primary-foreground" />
        </div>
      </Link>
    </animated.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const FeaturedProjectsSection: React.FC = () => {
  const { selectedCategory } = useCategory();
  
  // Filter projects based on selected category
  const featuredProjects = useMemo(() => {
    if (!selectedCategory) {
      // Default: show 3 random projects from different categories
      return projects.slice(0, 3);
    }
    
    const serviceIds = categoryServiceMap[selectedCategory];
    if (!serviceIds) return projects.slice(0, 3);
    
    const filtered = projects.filter(
      (p) => p.serviceId && serviceIds.includes(p.serviceId)
    );
    
    // Return up to 3 projects
    return filtered.slice(0, 3);
  }, [selectedCategory]);

  // Don't render if no projects
  if (!featuredProjects || featuredProjects.length === 0) {
    return null;
  }

  return (
    <section id="featured-projects" className="bg-foreground relative">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <FadeInWhenVisible delay={0.05}>
          <SectionHeader
            title="Uitgelichte projecten"
            subtitle="Bekijk een selectie van mijn werk in deze categorie."
            titleClassName="text-white"
            subtitleClassName="text-white/70"
          />
        </FadeInWhenVisible>

        <div className={cn(
          "grid",
          featuredProjects.length === 1 && "grid-cols-1 max-w-md mx-auto gap-4 md:gap-6",
          featuredProjects.length === 2 && "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6 md:gap-10",
          featuredProjects.length >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        )}>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={`${selectedCategory}-${project.id}`}
              project={project}
              index={index}
              categoryKey={selectedCategory}
            />
          ))}
        </div>

        {/* View all CTA */}
        <FadeInWhenVisible delay={0.3}>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/projecten" className="group">
                Bekijk alle projecten
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
