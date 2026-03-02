import { useEffect } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Stats from "@/components/sections/Stats";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";
import Footer from "@/components/sections/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fade-up visible"><Hero /></div>
      <div className="fade-up"><About /></div>
      <div className="fade-up"><Services /></div>
      <div className="fade-up"><Gallery /></div>
      <Stats />
      <div className="fade-up"><Pricing /></div>
      <div className="fade-up"><Testimonials /></div>
      <div className="fade-up"><Contact /></div>
      <div className="fade-up"><Blog /></div>
      <Footer />
    </div>
  );
};

export default Index;
