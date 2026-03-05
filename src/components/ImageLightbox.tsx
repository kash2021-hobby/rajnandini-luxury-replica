import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageLightbox = ({ images, selectedIndex, onClose, onNext, onPrev }: ImageLightboxProps) => {
  if (selectedIndex === null) return null;
  const image = images[selectedIndex];

  return (
    <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 border-none bg-black/95 shadow-none [&>button]:hidden">
        <VisuallyHidden><DialogTitle>Image viewer</DialogTitle></VisuallyHidden>

        <button onClick={onClose} className="absolute top-4 right-4 z-50 text-white/80 hover:text-white transition-colors">
          <X className="h-6 w-6" />
        </button>

        {images.length > 1 && (
          <>
            <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white transition-colors bg-black/40 rounded-full p-2">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white transition-colors bg-black/40 rounded-full p-2">
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <img src={image.src} alt={image.alt} className="max-h-[85vh] max-w-full object-contain" />
          <p className="text-white/70 text-sm mt-3 text-center">{image.alt}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
