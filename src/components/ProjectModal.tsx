import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Calendar, ChevronLeft, ChevronRight, ChevronDown, Play } from 'lucide-react';
import { Project } from '../data/mockData';
import { useIsMobile } from '@/hooks/use-mobile';
import { usePauseMediaWhenNotInView } from "@/hooks/use-pause-media-when-not-in-view";

type MediaItem = { type: 'image' | 'video'; url: string };

function buildProjectMediaItems(project: Project) {
  const items = project.images.map((img) => ({ type: 'image' as const, url: img }));

  if (!project.videoUrl) return items;

  // Helper to convert YouTube watch URLs to embed URLs
  let videoUrl = project.videoUrl;
  if (videoUrl.includes('youtube.com/watch?v=')) {
    const videoId = videoUrl.split('v=')[1]?.split('&')[0];
    if (videoId) {
      videoUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  } else if (videoUrl.includes('youtu.be/')) {
    const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
    if (videoId) {
      videoUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  items.unshift({ type: 'video' as const, url: videoUrl });
  return items;
}

function getSwipeDelta(touchStart: number | null, touchEnd: number | null) {
  if (touchStart === null || touchEnd === null) return 0;
  const distance = touchStart - touchEnd;
  if (distance > 50) return 1;
  if (distance < -50) return -1;
  return 0;
}

function useGalleryKeyboardNavigation(
  isGalleryOpen: boolean,
  onNext: () => void,
  onPrev: () => void,
  onClose: () => void,
) {
  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };

    globalThis.addEventListener('keydown', handleKeyDown);
    return () => globalThis.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, onNext, onPrev, onClose]);
}

function useHeaderAutoRotate(
  mediaItemsLength: number,
  isCurrentHeaderVideo: boolean,
  setHeaderMediaIndex: React.Dispatch<React.SetStateAction<number>>,
) {
  useEffect(() => {
    if (mediaItemsLength <= 1 || isCurrentHeaderVideo) return;
    const interval = globalThis.setInterval(() => {
      setHeaderMediaIndex((prev) => (prev + 1) % mediaItemsLength);
    }, 3500);
    return () => globalThis.clearInterval(interval);
  }, [mediaItemsLength, isCurrentHeaderVideo, setHeaderMediaIndex]);
}

interface ProjectModalViewProps {
  project: Project;
  onClose: () => void;
  contentRef: React.RefObject<HTMLDivElement>;
  mediaItems: MediaItem[];
  headerMediaIndex: number;
  setHeaderMediaIndex: React.Dispatch<React.SetStateAction<number>>;
  currentMediaIndex: number;
  setCurrentMediaIndex: React.Dispatch<React.SetStateAction<number>>;
  isGalleryOpen: boolean;
  setIsGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  handlePrevMedia: (e?: React.MouseEvent) => void;
  handleNextMedia: (e?: React.MouseEvent) => void;
  shouldAutoplayVideo: boolean;
}

const ProjectModalView: React.FC<ProjectModalViewProps> = ({
  project,
  onClose,
  contentRef,
  mediaItems,
  headerMediaIndex,
  setCurrentMediaIndex,
  setHeaderMediaIndex,
  currentMediaIndex,
  isGalleryOpen,
  setIsGalleryOpen,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handlePrevMedia,
  handleNextMedia,
  shouldAutoplayVideo,
}) => {
  // NOTE: View is intentionally composed from smaller components to satisfy cognitive-complexity limits.
  const openGallery = () => {
    setCurrentMediaIndex(headerMediaIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl lg:max-w-7xl max-h-[90vh] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 sm:p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="hidden lg:block p-8 border-b border-gray-200 shrink-0 bg-white z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              {project.client}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl">{project.tagline}</p>
        </div>

        <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden pb-24 lg:pb-0">
          <ProjectModalHeaderMedia
            project={project}
            contentRef={contentRef}
            mediaItems={mediaItems}
            headerMediaIndex={headerMediaIndex}
            onOpenGallery={openGallery}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            shouldAutoplayVideo={shouldAutoplayVideo}
          />

          <ProjectModalContent project={project} contentRef={contentRef} />
        </div>
      </motion.div>

      <ProjectModalGalleryOverlay
        project={project}
        mediaItems={mediaItems}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        currentMediaIndex={currentMediaIndex}
        setCurrentMediaIndex={setCurrentMediaIndex}
        onPrev={handlePrevMedia}
        onNext={handleNextMedia}
        shouldAutoplayVideo={shouldAutoplayVideo}
      />
    </div>
  );
};

function isLocalVideoUrl(url: string) {
  return url.endsWith('.mp4') || url.endsWith('.webm');
}

const ProjectModalHeaderMedia: React.FC<{
  project: Project;
  contentRef: React.RefObject<HTMLDivElement>;
  mediaItems: MediaItem[];
  headerMediaIndex: number;
  onOpenGallery: () => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
  shouldAutoplayVideo: boolean;
}> = ({
  project,
  contentRef,
  mediaItems,
  headerMediaIndex,
  onOpenGallery,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  shouldAutoplayVideo,
}) => {
  const item = mediaItems[headerMediaIndex];
  const headerMediaRef = usePauseMediaWhenNotInView({ enabled: item.type === 'video' });

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className="relative w-full lg:w-1/2 h-[450px] lg:h-auto group cursor-pointer overflow-hidden shrink-0 touch-pan-y"
      onClick={onOpenGallery}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="wait">
        {item.type === 'video' ? (
          <motion.div
            key="video-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full bg-black"
          >
            <div className="absolute inset-0">
              {isLocalVideoUrl(item.url) ? (
                <video
                  ref={headerMediaRef}
                  src={item.url}
                  autoPlay={shouldAutoplayVideo}
                  muted
                  loop
                  playsInline
                  preload={shouldAutoplayVideo ? 'metadata' : 'none'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <iframe
                  ref={headerMediaRef}
                  src={`${item.url}?autoplay=${shouldAutoplayVideo ? 1 : 0}&mute=1&controls=${shouldAutoplayVideo ? 0 : 1}&loop=1&playlist=${item.url.split('/').pop()}&enablejsapi=1`}
                  title="Video Background"
                  className="w-full h-full object-cover scale-150"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              )}
            </div>
          </motion.div>
        ) : (
          <motion.img
            key={headerMediaIndex}
            src={item.url}
            alt={project.title}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

      {item.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Klik voor geluid</span>
          </div>
        </div>
      )}

      <div className="hidden min-[645px]:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 gap-2 pointer-events-none">
        {mediaItems.map((m, idx) => (
          <div
            key={`indicator-${m.type}-${idx}`}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
              idx === headerMediaIndex ? 'w-6 bg-blue-600' : 'w-1.5 bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="min-[645px]:hidden absolute top-6 left-6 z-20 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/40 backdrop-blur-md border border-blue-400/30 text-white text-xs font-medium shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>{headerMediaIndex + 1}</span>
          <span className="text-blue-100">/</span>
          <span>{mediaItems.length}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full pointer-events-none lg:hidden">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {project.client}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-xl text-gray-200 max-w-2xl">{project.tagline}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-4 right-4 z-30 lg:hidden p-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/10 text-white cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          contentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </div>
  );
};

const ProjectModalContent: React.FC<{ project: Project; contentRef: React.RefObject<HTMLDivElement> }> = ({
  project,
  contentRef,
}) => {
  return (
    <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col bg-white">
      <div className="flex-1 lg:overflow-y-auto custom-scrollbar p-6 sm:p-10 space-y-10">
        <div className="grid grid-cols-1 gap-10">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-500 rounded-full" />{' '}Uitdaging
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{project.challenge}</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full" />{' '}Oplossing
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{project.solution}</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded-full" />{' '}Impact
            </h3>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p className="text-gray-700 font-medium leading-relaxed text-lg">{project.impact}</p>
            </div>
          </section>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 text-gray-700 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 lg:static p-6 border-t shrink-0 z-40 bg-white border-gray-200 lg:bg-blue-600 lg:border-blue-500">
        <div className="hidden lg:flex flex-col xl:flex-row items-center justify-between gap-4 text-center xl:text-left">
          <span className="text-white font-medium text-lg">Interesse in een soortgelijk project?</span>
          <div className="flex items-center gap-4">
            <a
              href="https://app.cal.eu/digitale-duif/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-600 rounded-lg font-bold transition-colors text-sm whitespace-nowrap shadow-lg shadow-blue-900/20"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Plan gesprek
            </a>
          </div>
        </div>

        <div className="lg:hidden w-full">
          <a
            href="https://app.cal.eu/digitale-duif/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors text-base shadow-lg shadow-blue-900/20"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Interesse? Plan gesprek
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectModalGalleryOverlay: React.FC<{
  project: Project;
  mediaItems: MediaItem[];
  isOpen: boolean;
  onClose: () => void;
  currentMediaIndex: number;
  setCurrentMediaIndex: React.Dispatch<React.SetStateAction<number>>;
  onPrev: (e?: React.MouseEvent) => void;
  onNext: (e?: React.MouseEvent) => void;
  shouldAutoplayVideo: boolean;
}> = ({
  project,
  mediaItems,
  isOpen,
  onClose,
  currentMediaIndex,
  setCurrentMediaIndex,
  onPrev,
  onNext,
  shouldAutoplayVideo,
}) => {
  const item = mediaItems[currentMediaIndex];
  const galleryMediaRef = usePauseMediaWhenNotInView({ enabled: item.type === 'video' });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
          onClick={onClose}
          onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-3 sm:p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 sm:px-12 md:px-24 mx-auto max-w-7xl w-full z-20">
            <button
              onClick={onPrev}
              className="pointer-events-auto p-2 sm:p-3 rounded-full bg-blue-600/90 text-white hover:bg-blue-700 transition-colors shadow-lg border border-white/10 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={onNext}
              className="pointer-events-auto p-2 sm:p-3 rounded-full bg-blue-600/90 text-white hover:bg-blue-700 transition-colors shadow-lg border border-white/10 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-10">
            {item.type === 'video' ? (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
              <div
                className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {isLocalVideoUrl(item.url) ? (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video
                    key={item.url}
                    ref={galleryMediaRef}
                    src={item.url}
                    controls
                    autoPlay={shouldAutoplayVideo}
                    playsInline
                    preload={shouldAutoplayVideo ? 'metadata' : 'none'}
                    className="w-full h-full"
                  />
                ) : (
                  <iframe
                    ref={galleryMediaRef}
                    src={`${item.url}?autoplay=${shouldAutoplayVideo ? 1 : 0}&controls=1&enablejsapi=1`}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            ) : (
              <motion.img
                key={currentMediaIndex}
                src={item.url}
                alt={`${project.title} - Media ${currentMediaIndex + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                loading="eager"
                decoding="async"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {mediaItems.map((m, idx) => (
                <button
                  key={`fullscreen-dot-${m.type}-${idx}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentMediaIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentMediaIndex ? 'bg-blue-600 w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAutoplayVideo = !isMobile && !shouldReduceMotion;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [headerMediaIndex, setHeaderMediaIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const mediaItems = React.useMemo(() => buildProjectMediaItems(project), [project]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    const delta = getSwipeDelta(touchStart, touchEnd);
    if (delta === 0) return;
    setHeaderMediaIndex((prev) => (prev + delta + mediaItems.length) % mediaItems.length);
  }, [touchStart, touchEnd, mediaItems.length]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Header Carousel Logic - pause on video
  const isCurrentHeaderVideo = mediaItems[headerMediaIndex]?.type === 'video';
  useHeaderAutoRotate(mediaItems.length, isCurrentHeaderVideo, setHeaderMediaIndex);

  // Gallery Logic
  const goNextMedia = useCallback(() => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const goPrevMedia = useCallback(() => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }, [mediaItems.length]);

  const handleNextMedia = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    goNextMedia();
  }, [goNextMedia]);

  const handlePrevMedia = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    goPrevMedia();
  }, [goPrevMedia]);

  useGalleryKeyboardNavigation(
    isGalleryOpen,
    goNextMedia,
    goPrevMedia,
    () => setIsGalleryOpen(false),
  );

  return (
    <ProjectModalView
      project={project}
      onClose={onClose}
      contentRef={contentRef}
      mediaItems={mediaItems}
      headerMediaIndex={headerMediaIndex}
      setHeaderMediaIndex={setHeaderMediaIndex}
      currentMediaIndex={currentMediaIndex}
      setCurrentMediaIndex={setCurrentMediaIndex}
      isGalleryOpen={isGalleryOpen}
      setIsGalleryOpen={setIsGalleryOpen}
      handleTouchStart={handleTouchStart}
      handleTouchMove={handleTouchMove}
      handleTouchEnd={handleTouchEnd}
      handlePrevMedia={handlePrevMedia}
      handleNextMedia={handleNextMedia}
      shouldAutoplayVideo={shouldAutoplayVideo}
    />
  );
};

export default ProjectModal;
