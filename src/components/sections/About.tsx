import { Link } from "react-router-dom";
import aboutImg from "@/assets/about.jpg";

const About = () => {
  return (
    <section id="about-us" className="py-20 lg:py-28">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-[#f3f4ec]">
        {/* Left — blob image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-[320px] h-[380px] lg:w-[400px] lg:h-[480px] overflow-hidden" style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              border: "3px solid hsl(36, 32%, 58%)"
            }}>
              <img
                src={aboutImg}
                alt="Rajnandini Banquet Hall exterior"
                className="w-full h-full object-cover" />

            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 grid grid-cols-4 gap-1.5 opacity-30">
              {Array.from({ length: 16 }).map((_, i) =>
              <div key={i} className="w-2 h-2 rounded-full bg-secondary" />
              )}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest">
            About Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            The Heart of Celebrations in Guwahati
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            Located in the heart of the city and easily accessible from Beltola, Dispur, and Six Mile, Rajnandini offers a spacious and fully equipped setting for your most cherished days.
          </p>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            From intimate gatherings to grand wedding receptions, our experienced team ensures every event is executed with precision and elegance. With state-of-the-art amenities and personalized service, we create unforgettable experiences.
          </p>
          <Link
            to="/about"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors mt-2">

            Learn More
          </Link>
        </div>
      </div>
    </section>);

};

export default About;