import { Link } from "react-router-dom";
import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";
import heroImg3 from "@/assets/hero-3.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="space-y-6">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest">
            Welcome to Rajnandini
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            Create Special Moments at Guwahati's Premier Venue.
          </h1>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-lg">
            Welcome to Rajnandini Banquet Hall, a premium wedding venue and marriage hall designed to make every occasion memorable.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors">
              Book Now
            </Link>
            <a
              href="#services"
              className="border border-foreground/20 text-foreground px-8 py-3 rounded-full font-body text-sm font-medium hover:bg-foreground/5 transition-colors">

              Our Services
            </a>
          </div>
        </div>

        {/* Right — overlapping image collage */}
        <div className="relative h-[450px] lg:h-[550px]">
          <img
            src={heroImg1}
            alt="Banquet hall interior"
            className="absolute top-0 right-0 w-[65%] h-[65%] object-cover rounded-3xl shadow-xl z-10" />

          <img
            src={heroImg2}
            alt="Wedding stage decoration"
            className="absolute bottom-0 left-0 w-[55%] h-[60%] object-cover rounded-3xl shadow-xl z-20" />

          <img
            src={heroImg3}
            alt="Table setting"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 lg:w-44 lg:h-44 object-cover rounded-full border-4 border-background shadow-xl z-30" />

        </div>
      </div>
    </section>);

};

export default Hero;