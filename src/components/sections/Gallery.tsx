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
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";

const images = [
  { src: gallery1, alt: "Grand wedding reception" },
  { src: gallery2, alt: "Premium catering" },
  { src: gallery3, alt: "Corporate event setup" },
  { src: gallery4, alt: "Birthday celebration" },
  { src: gallery5, alt: "Entrance lobby" },
  { src: gallery6, alt: "Outdoor garden" },
  { src: gallery7, alt: "Indoor dining" },
  { src: gallery8, alt: "Event space" },
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
            Our Venue
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-3xl group cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-3 text-center">
                <p className="text-sm text-muted-foreground font-body">{img.alt}</p>
              </div>
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
              See More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
