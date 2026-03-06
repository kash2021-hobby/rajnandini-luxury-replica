import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Footer columns */}
      <div className="container py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="inline-flex items-center bg-background rounded-xl px-3 py-2">
            <img src={logo} alt="Rajnandini Banquet Hall" className="h-10 md:h-12 w-auto object-contain" loading="lazy" />
          </div>
          <p className="font-body text-sm text-background/60 leading-relaxed">
            Guwahati's premier banquet hall for weddings, corporate events, and celebrations.
          </p>
          <div className="flex gap-4 pt-2">
            {["facebook", "instagram", "twitter", "youtube"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <span className="text-xs font-body uppercase">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "Gallery", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s/g, "-")}`} className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading text-lg font-semibold">Our Services</h4>
          <ul className="space-y-2">
            {["Wedding & Receptions", "Corporate Events", "Social Celebrations", "Premium Catering"].map((s) => (
              <li key={s}>
                <span className="font-body text-sm text-background/60">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading text-lg font-semibold">Contact Info</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span className="font-body text-sm text-background/60">
                Balaram Basumatari Path, Kerakuchi, Guwahati, Assam 781040
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-body text-sm text-background/60">+91 70990 42360</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-body text-sm text-background/60">info@rajnandiniguwahati.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container py-6 text-center">
          <p className="font-body text-sm text-background/40">
            © 2026 Rajnandini Banquet Hall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
