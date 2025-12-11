import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Calendar, CheckCircle2, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../data/mockData';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [headerImageIndex, setHeaderImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
      setHeaderImageIndex((prev) => (prev + 1) % project.images.length);
    }
    if (isRightSwipe) {
      setHeaderImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
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
    if (project.images.length > 1) {
      interval = setInterval(() => {
        setHeaderImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [project.images.length]);

  // Gallery Logic
  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isGalleryOpen) return;
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'Escape') setIsGalleryOpen(false);
  }, [isGalleryOpen, handleNextImage, handlePrevImage]);

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
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl lg:max-w-7xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Fixed Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-colors backdrop-blur-sm border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Desktop Header (Visible only on lg screens) */}
        <div className="hidden lg:block p-8 border-b border-white/10 shrink-0 bg-[#0a0a0a] z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {project.client}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            {project.tagline}
          </p>
        </div>

        {/* Main Body - Flex Row on Desktop, Col on Mobile */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          
          {/* Image Section */}
          <div 
            className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto group cursor-pointer overflow-hidden shrink-0"
            onClick={() => setIsGalleryOpen(true)}
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={headerImageIndex}
                src={project.images[headerImageIndex]}
                alt={project.title}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 pointer-events-none">
              {project.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                    idx === headerImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                  }`} 
                />
              ))}
            </div>

            {/* Mobile Title Overlay (Hidden on Desktop) */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full pointer-events-none lg:hidden">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {project.client}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col bg-[#0a0a0a]">
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 space-y-10">

              {/* Main Content */}
              <div className="grid grid-cols-1 gap-10">
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-red-500 rounded-full" />
                    De Uitdaging
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {project.challenge}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full" />
                    De Oplossing
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-green-500 rounded-full" />
                    De Impact
                  </h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <p className="text-gray-300 font-medium leading-relaxed text-lg">
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
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-blue-500 bg-blue-600 shrink-0 z-10">
               <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                 <span className="text-white font-medium text-lg">Interesse in een soortgelijk project?</span>
                 <div className="flex items-center gap-4 w-full xl:w-auto justify-end">
                    <button
                      onClick={onClose}
                      className="text-blue-100 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
                    >
                      Bekijk meer cases
                    </button>
                    <Link
                      to={`/contact${project.serviceId ? `?service=${project.serviceId}` : ''}`}
                      className="flex items-center justify-center px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-600 rounded-lg font-bold transition-colors text-sm whitespace-nowrap shadow-lg shadow-blue-900/20"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Plan gesprek
                    </Link>
                 </div>
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
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={handlePrevImage}
              className="absolute left-4 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden sm:block"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden sm:block"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-10">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
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
