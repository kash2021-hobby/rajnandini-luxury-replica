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
              className={`overflow-hidden rounded-3xl group ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
