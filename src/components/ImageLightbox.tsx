import { useEffect, useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageLightbox = ({ images, selectedIndex, onClose, onNext, onPrev }: ImageLightboxProps) => {
  const touchStartX = useRef(0);
  const [swiping, setSwiping] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") onNext();
    else if (e.key === "ArrowLeft") onPrev();
    else if (e.key === "Escape") onClose();
  }, [onNext, onPrev, onClose]);

  useEffect(() => {
    if (selectedIndex === null) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, handleKeyDown]);

  if (selectedIndex === null) return null;
  const image = images[selectedIndex];

  console.log("📸 ImageLightbox RENDERING:");
  console.log("  - selectedIndex:", selectedIndex);
  console.log("  - total images:", images.length);
  console.log("  - current image:", image?.alt);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; setSwiping(true); }}
      onTouchEnd={(e) => {
        if (!swiping) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (diff > 60) onPrev();
        else if (diff < -60) onNext();
        setSwiping(false);
      }}
    >
      {/* Close Button - Always Visible and Prominent */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[110] bg-white/10 hover:bg-white/20 text-white p-2.5 md:p-3 rounded-full transition-all duration-200 backdrop-blur-md border border-white/20 shadow-lg"
        aria-label="Close lightbox"
        title="Close (Esc)"
      >
        <X className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-[110] bg-white/10 hover:bg-white/20 text-white p-2.5 md:p-3 rounded-full transition-all duration-200 backdrop-blur-md border border-white/20 shadow-lg"
            aria-label="Previous image"
            title="Previous (←)"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-[110] bg-white/10 hover:bg-white/20 text-white p-2.5 md:p-3 rounded-full transition-all duration-200 backdrop-blur-md border border-white/20 shadow-lg"
            aria-label="Next image"
            title="Next (→)"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </>
      )}

      {/* Perfectly Centered Image Container */}
      <div 
        className="fixed inset-0 flex items-center justify-center p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center justify-center max-w-[1000px] w-full">
          {/* Main Image - Perfectly Centered */}
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl select-none"
            draggable={false}
          />
          
          {/* Image Caption */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-black/60 rounded-lg backdrop-blur-sm max-w-[90%]">
            <p className="text-white/90 text-xs md:text-sm text-center select-none">
              {image.alt}
            </p>
          </div>
          
          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 px-3 py-1 bg-black/60 rounded-full backdrop-blur-sm">
              <p className="text-white/80 text-xs font-medium">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;