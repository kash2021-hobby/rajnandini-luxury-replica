import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navLinks = ["Home", "About Us", "Services", "Gallery", "Blog", "Contact"];

  const pageLinks: Record<string, string> = {
    "Contact": "/contact",
    "About Us": "/about",
    "Gallery": "/gallery"
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (pageLinks[id]) {
      navigate(pageLinks[id]);
      return;
    }
    if (id === "Home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    const sectionId = id.toLowerCase().replace(/\s/g, "-");
    if (location.pathname !== "/") {
      navigate("/#" + sectionId);
      return;
    }
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="bg-topbar text-topbar-foreground text-sm py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+917099042360" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" /> +91 70990 42360
            </a>
            <a href="mailto:info@rajnandiniguwahati.com" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" /> info@rajnandiniguwahati.com
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-background/95 backdrop-blur-md shadow-sm">
        <div className="container flex justify-between items-center py-4">
          <Link to="/" className="inline-flex items-center">
            <img src={logo} alt="Rajnandini Banquet Hall" className="h-10 md:h-12 w-auto object-contain" loading="eager" />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <li key={link}>
                <button onClick={() => scrollTo(link)} className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">
                  {link}
                </button>
              </li>
            )}
          </ul>

          <Link to="/contact" className="hidden lg:block bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors">Book Now

          </Link>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen &&
        <div className="lg:hidden absolute left-0 right-0 top-full bg-background border-t border-border px-6 py-4 space-y-3 shadow-lg">
            {navLinks.map((link) =>
          <button key={link} onClick={() => scrollTo(link)} className="block w-full text-left font-body text-foreground/80 hover:text-primary py-2">
                {link}
              </button>
          )}
            <Link to="/contact" className="block w-full text-center bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-body text-sm font-medium mt-2" onClick={() => setIsOpen(false)}>
              Book Your Date
            </Link>
          </div>
        }
      </nav>
    </header>);

};

export default Header;