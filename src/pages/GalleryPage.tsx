import Footer from "@/components/sections/Footer";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Grand wedding reception" },
  { src: gallery2, alt: "Premium catering" },
  { src: gallery3, alt: "Corporate event setup" },
  { src: gallery4, alt: "Birthday celebration" },
  { src: gallery5, alt: "Entrance lobby" },
  { src: gallery6, alt: "Outdoor garden" },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <section className="pt-32 pb-20 lg:pb-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
              Our Gallery
            </p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Explore Our Venue & Events
            </h1>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-3xl group"
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GalleryPage;
