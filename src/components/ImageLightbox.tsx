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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
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
      {/* Close Button - Always Visible */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Centered Image */}
      <div className="relative flex items-center justify-center w-full h-full px-16 md:px-20" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[85vh] max-w-[90vw] md:max-w-[85vw] w-auto h-auto object-contain select-none"
          draggable={false}
        />
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm text-center select-none max-w-[80vw] px-4">
          {image.alt}
        </p>
      </div>
    </div>
  );
};

export default ImageLightbox;