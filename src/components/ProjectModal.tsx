import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ChevronLeft, ChevronRight, ChevronDown, Play } from 'lucide-react';
import { Project } from '../data/mockData';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [headerMediaIndex, setHeaderMediaIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const mediaItems = React.useMemo(() => {
    const items = project.images.map(img => ({ type: 'image' as const, url: img }));
    if (project.videoUrl) {
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
    }
    return items;
  }, [project]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setHeaderMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }
    if (isRightSwipe) {
      setHeaderMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Header Carousel Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mediaItems.length > 1) {
      interval = setInterval(() => {
        setHeaderMediaIndex((prev) => (prev + 1) % mediaItems.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [mediaItems.length]);

  // Gallery Logic
  const handleNextMedia = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const handlePrevMedia = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }, [mediaItems.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isGalleryOpen) return;
    if (e.key === 'ArrowRight') handleNextMedia();
    if (e.key === 'ArrowLeft') handlePrevMedia();
    if (e.key === 'Escape') setIsGalleryOpen(false);
  }, [isGalleryOpen, handleNextMedia, handlePrevMedia]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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
        {/* Fixed Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 sm:p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Desktop Header (Visible only on lg screens) */}
        <div className="hidden lg:block p-8 border-b border-gray-200 shrink-0 bg-white z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              {project.client}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {project.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            {project.tagline}
          </p>
        </div>

        {/* Main Body - Flex Row on Desktop, Col on Mobile */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden pb-24 lg:pb-0">
          
          {/* Image Section */}
          <div 
            className="relative w-full lg:w-1/2 h-[450px] lg:h-auto group cursor-pointer overflow-hidden shrink-0 touch-pan-y"
            onClick={() => setIsGalleryOpen(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              {mediaItems[headerMediaIndex].type === 'video' ? (
                <motion.div
                  key="video-header"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 w-full h-full bg-black"
                >
                   <div className="absolute inset-0 pointer-events-none">
                      {mediaItems[headerMediaIndex].url.endsWith('.mp4') ? (
                        <video
                          src={mediaItems[headerMediaIndex].url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <iframe
                          src={`${mediaItems[headerMediaIndex].url}?autoplay=1&mute=1&controls=0&loop=1&playlist=${mediaItems[headerMediaIndex].url.split('/').pop()}`}
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
                  src={mediaItems[headerMediaIndex].url}
                  alt={project.title}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.8 }}
                  transition={{ duration: 0.5 }}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            {/* Play Button Indicator */}
            {mediaItems[headerMediaIndex].type === 'video' && (
               <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
               </div>
            )}

            {/* Carousel Indicators (Desktop) */}
            <div className="hidden min-[645px]:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 gap-2 pointer-events-none">
              {mediaItems.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                    idx === headerMediaIndex ? 'w-6 bg-blue-600' : 'w-1.5 bg-white/50'
                  }`} 
                />
              ))}
            </div>

            {/* Mobile Counter (Creative Replacement) */}
            <div className="min-[645px]:hidden absolute top-6 left-6 z-20 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/40 backdrop-blur-md border border-blue-400/30 text-white text-xs font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>{headerMediaIndex + 1}</span>
                <span className="text-blue-100">/</span>
                <span>{mediaItems.length}</span>
              </div>
            </div>

            {/* Mobile Title Overlay (Hidden on Desktop) */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full pointer-events-none lg:hidden">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {project.client}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl">
                {project.tagline}
              </p>
            </div>

            {/* Mobile Scroll Arrow */}
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

          {/* Content Section */}
          <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col bg-white">
            <div className="flex-1 lg:overflow-y-auto custom-scrollbar p-6 sm:p-10 space-y-10">

              {/* Main Content */}
              <div className="grid grid-cols-1 gap-10">
                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-red-500 rounded-full" />
                    Uitdaging
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.challenge}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full" />
                    Oplossing
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-green-500 rounded-full" />
                    Impact
                  </h3>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <p className="text-gray-700 font-medium leading-relaxed text-lg">
                      {project.impact}
                    </p>
                  </div>
                </section>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 lg:static p-6 border-t shrink-0 z-40 bg-white border-gray-200 lg:bg-blue-600 lg:border-blue-500">
               {/* Desktop Footer Content */}
               <div className="hidden lg:flex flex-col xl:flex-row items-center justify-between gap-4 text-center xl:text-left">
                 <span className="text-white font-medium text-lg">Interesse in een soortgelijk project?</span>
                 <div className="flex items-center gap-4">
                    <Link
                      to={`/contact${project.serviceId ? `?service=${project.serviceId}` : ''}`}
                      className="flex items-center justify-center px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-600 rounded-lg font-bold transition-colors text-sm whitespace-nowrap shadow-lg shadow-blue-900/20"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Plan gesprek
                    </Link>
                 </div>
               </div>

               {/* Mobile Footer Content */}
               <div className="lg:hidden w-full">
                  <Link
                    to={`/contact${project.serviceId ? `?service=${project.serviceId}` : ''}`}
                    className="flex items-center justify-center w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors text-base shadow-lg shadow-blue-900/20"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Interesse? Plan gesprek
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Gallery Overlay */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
            onClick={() => setIsGalleryOpen(false)}
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-20 p-3 sm:p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 sm:px-12 md:px-24 mx-auto max-w-7xl w-full z-20">
              <button
                onClick={handlePrevMedia}
                className="pointer-events-auto p-2 sm:p-3 rounded-full bg-blue-600/90 text-white hover:bg-blue-700 transition-colors shadow-lg border border-white/10 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={handleNextMedia}
                className="pointer-events-auto p-2 sm:p-3 rounded-full bg-blue-600/90 text-white hover:bg-blue-700 transition-colors shadow-lg border border-white/10 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-10">
              {mediaItems[currentMediaIndex].type === 'video' ? (
                <div 
                  className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {mediaItems[currentMediaIndex].url.endsWith('.mp4') ? (
                    <video
                      src={mediaItems[currentMediaIndex].url}
                      controls
                      autoPlay
                      className="w-full h-full"
                    />
                  ) : (
                    <iframe
                      src={`${mediaItems[currentMediaIndex].url}?autoplay=1`}
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
                  src={mediaItems[currentMediaIndex].url}
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
                {mediaItems.map((_, idx) => (
                  <button
                    key={idx}
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
    </div>
  );
};

export default ProjectModal;
