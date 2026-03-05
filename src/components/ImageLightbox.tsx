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
      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-50 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="h-7 w-7" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
        </button>
      )}

      {/* Image + caption */}
      <div className="flex flex-col items-center justify-center w-full h-full px-12 md:px-20" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[90vh] max-w-full w-auto h-auto object-contain select-none"
          draggable={false}
        />
        <p className="text-white/60 text-sm mt-3 text-center select-none">{image.alt}</p>
      </div>
    </div>
  );
};

export default ImageLightbox;
