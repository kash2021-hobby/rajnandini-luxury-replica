import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import aboutImg from "@/assets/about.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-20 lg:pb-28">
        <div className="container">
          {/* Hero */}
          <div className="text-center mb-20">
            <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              The Heart of Celebrations in Guwahati
            </h1>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="overflow-hidden rounded-3xl">
              <img src={aboutImg} alt="Rajnandini Banquet Hall" className="w-full h-[400px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">Our Story</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Located in the heart of the city and easily accessible from Beltola, Dispur, and Six Mile, Rajnandini offers a spacious and fully equipped setting for your most cherished days.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                From intimate gatherings to grand wedding receptions, our experienced team ensures every event is executed with precision and elegance. With state-of-the-art amenities and personalized service, we create unforgettable experiences.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Rajnandini Banquet Hall was founded with a vision to provide Guwahati with a world-class venue that combines luxury, comfort, and impeccable service. Over the years, we have hosted thousands of events, each one unique and memorable.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">Why Choose Us</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Prime Location", desc: "Centrally located and easily accessible from all parts of Guwahati." },
                { title: "Experienced Team", desc: "Our dedicated team brings years of event management expertise." },
                { title: "Modern Amenities", desc: "State-of-the-art sound, lighting, and climate control systems." },
                { title: "Customizable Packages", desc: "Flexible packages tailored to your budget and requirements." },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-3xl bg-muted/50">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Highlights */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">Our Venue</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our banquet hall features elegant interiors with a capacity to host both intimate gatherings and grand celebrations. The spacious hall is complemented by a beautiful outdoor garden area, making it perfect for every occasion.
              </p>
              <ul className="space-y-3 font-body text-muted-foreground">
                {["Spacious banquet hall with elegant décor", "Beautiful outdoor garden for ceremonies", "Ample parking space for guests", "In-house catering with diverse cuisines", "Professional event coordination"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              <img src={gallery1} alt="Venue interior" className="w-full h-[200px] object-cover rounded-3xl" />
              <img src={gallery2} alt="Venue setup" className="w-full h-[200px] object-cover rounded-3xl" />
              <img src={service1} alt="Event setup" className="w-full h-[200px] object-cover rounded-3xl" />
              <img src={service2} alt="Catering" className="w-full h-[200px] object-cover rounded-3xl" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-muted/50 rounded-3xl p-12 lg:p-16">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
              Let us help you create an unforgettable celebration. Get in touch with our team today.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-10 py-3 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
