import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageLightbox from "@/components/ImageLightbox";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Grand wedding reception", className: "row-span-2" },
  { src: gallery2, alt: "Premium catering", className: "" },
  { src: gallery3, alt: "Corporate event setup", className: "" },
  { src: gallery4, alt: "Birthday celebration", className: "row-span-2" },
  { src: gallery5, alt: "Entrance lobby", className: "" },
  { src: gallery6, alt: "Outdoor garden", className: "" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Gallery
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            A Glimpse of Our Venue
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-3xl group cursor-pointer ${img.className}`}
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <ImageLightbox
          images={images}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={() => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))}
          onPrev={() => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))}
        />

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button size="lg" className="gap-2 rounded-full px-8">
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Gallery;
