"use client";

import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCarouselProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  title,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 border-0 bg-black/95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-full">
          <div className="text-center mb-4 pt-6 px-6">
            <h2 className="text-white text-xl font-semibold">{title}</h2>
          </div>

          {/* Main Image */}
          <div className="relative w-full bg-black aspect-video flex items-center justify-center overflow-hidden px-6">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  onClick={prevImage}
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={nextImage}
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}
          </div>

          {/* Image Counter and Thumbnails */}
          <div className="px-6 py-6">
            <div className="text-center text-white/60 text-sm mb-4">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={`thumb-${index}-${title}`}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                      currentIndex === index
                        ? "ring-2 ring-primary opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCarousel;
