import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface CvModalProps {
  trigger: React.ReactNode;
}

const CvModal: React.FC<CvModalProps> = ({ trigger }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        // Subtract padding (16px on mobile, 48px on desktop)
        // We use a safe margin of 32px to cover both cases reasonably well
        setContainerWidth(containerRef.current.clientWidth - 32);
      }
    };

    // Initial width
    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh] md:h-[85vh] w-[95vw] p-0 overflow-hidden flex flex-col gap-0">
        <DialogHeader className="px-4 py-3 md:px-6 md:py-4 border-b bg-background flex-shrink-0 flex flex-row items-center justify-between">
          <DialogTitle className="text-base md:text-lg">Curriculum Vitae</DialogTitle>
          {numPages && numPages > 1 && (
             <div className="flex items-center gap-2 mr-8 md:mr-10">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 md:h-9 md:w-9"
                  onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                  disabled={pageNumber <= 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-xs md:text-sm min-w-[3ch] text-center">
                  {pageNumber} / {numPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 md:h-9 md:w-9"
                  onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                  disabled={pageNumber >= numPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
             </div>
          )}
        </DialogHeader>
        <div ref={containerRef} className="flex-1 w-full bg-slate-100 overflow-auto flex justify-center p-4 md:p-6">
           <Document
            file="/cv.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.error("Error loading PDF:", error)}
            loading={
              <div className="flex items-center justify-center h-full w-full">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            }
            className="flex flex-col items-center"
           >
             <Page 
               pageNumber={pageNumber} 
               renderTextLayer={true} 
               renderAnnotationLayer={true}
               className="shadow-lg max-w-full"
               width={containerWidth ? Math.min(containerWidth, 800) : undefined}
             />
           </Document>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CvModal;
