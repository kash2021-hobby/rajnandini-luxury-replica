import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About Us", "Services", "Gallery", "Blog", "Contact"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top bar */}
      <div className="bg-topbar text-topbar-foreground text-sm py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+917099042360" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" /> +91 70990 42360
            </a>
            <a
              href="mailto:info@rajnandiniguwahati.com"
              className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" /> info@rajnandiniguwahati.com
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-background/95 backdrop-blur-md shadow-sm">
        <div className="container flex justify-between items-center py-4">
          <a href="#" className="font-heading text-2xl font-bold text-foreground tracking-tight">
            Rajnandini
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="font-body text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden lg:block bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Book Your Date
          </button>

          {/* Mobile toggle */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left font-body text-foreground/80 hover:text-primary py-2"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="w-full bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-body text-sm font-medium mt-2"
            >
              Book Your Date
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
