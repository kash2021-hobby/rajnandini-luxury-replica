import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface InstagramReel {
  id: number;
  embedUrl: string;
  title: string;
}

interface InstagramReelLightboxProps {
  reels: InstagramReel[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const InstagramReelLightbox = ({
  reels,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: InstagramReelLightboxProps) => {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, handleKeyDown]);

  if (selectedIndex === null) return null;

  const reel = reels[selectedIndex];

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] bg-black/60 backdrop-blur-sm p-2 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Previous Button */}
      {reels.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 z-[110] bg-black/60 backdrop-blur-sm p-3 rounded-full hover:bg-black/80 transition-colors"
          aria-label="Previous reel"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Next Button */}
      {reels.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-[110] bg-black/60 backdrop-blur-sm p-3 rounded-full hover:bg-black/80 transition-colors"
          aria-label="Next reel"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Reel Container */}
      <div
        className="relative w-full max-w-[500px] h-[85vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={reel.embedUrl}
            title={reel.title}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        {/* Reel Counter */}
        {reels.length > 1 && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full backdrop-blur-sm">
            <p className="text-white/80 text-xs font-medium">
              {selectedIndex + 1} / {reels.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstagramReelLightbox;
