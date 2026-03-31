import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`;

interface PdfSliderProps {
  pdfUrl: string;
  title: string;
  description: string;
  year: string;
  onClose: () => void;
}

export function PdfSlider({ pdfUrl, title, description, year, onClose }: PdfSliderProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const goToPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goToNext = () => setPageNumber((p) => Math.min(numPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2.5, s + 0.2));
  const zoomOut = () => setScale((s) => Math.max(0.5, s - 0.2));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <div>
            <h3 className="text-white font-display font-bold text-lg leading-tight">{title}</h3>
            <p className="text-white/40 text-xs uppercase tracking-widest">
              Newsletter & Book Design — {year}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={zoomOut}
            className="p-2 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            title="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-white/40 text-sm w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="p-2 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            title="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <div className="w-px h-6 bg-white/10 mx-1" />
          <button
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div
        className="flex-1 overflow-auto flex items-start justify-center py-8 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div className="flex items-center justify-center h-96 text-white/40">
              <div className="text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                <p className="text-sm uppercase tracking-widest">Loading book...</p>
              </div>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-96 text-white/40">
              <p className="text-sm">Could not load PDF</p>
            </div>
          }
        >
          <motion.div
            key={pageNumber}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="shadow-2xl"
              renderTextLayer={true}
              renderAnnotationLayer={false}
            />
          </motion.div>
        </Document>
      </div>

      {/* Footer navigation */}
      <div
        className="flex items-center justify-center gap-6 px-6 py-4 border-t border-white/10 flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={goToPrev}
          disabled={pageNumber <= 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>

        <div className="flex items-center gap-2">
          <span className="text-white/40 text-sm">Page</span>
          <span className="text-white font-bold text-sm px-3 py-1 bg-white/10 rounded-lg min-w-[2.5rem] text-center">
            {pageNumber}
          </span>
          <span className="text-white/40 text-sm">of {numPages || "—"}</span>
        </div>

        <button
          onClick={goToNext}
          disabled={pageNumber >= numPages}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 text-sm font-medium"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Page dots for small page counts */}
      {numPages > 0 && numPages <= 20 && (
        <div
          className="flex items-center justify-center gap-1.5 pb-4"
          onClick={(e) => e.stopPropagation()}
        >
          {Array.from({ length: numPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPageNumber(i + 1)}
              className={`rounded-full transition-all duration-200 ${
                i + 1 === pageNumber
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
