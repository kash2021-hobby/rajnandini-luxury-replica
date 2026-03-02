import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Silver Package",
    subtitle: "Hall Rental & Basic Setup",
    price: "₹25,000",
    features: ["Hall rental for 6 hours", "Basic stage decoration", "Sound system", "200 guest capacity", "Parking facility"],
    highlighted: true,
  },
  {
    name: "Gold Package",
    subtitle: "Hall + Standard Catering",
    price: "₹55,000",
    features: ["Hall rental for 8 hours", "Standard decoration", "Veg/Non-veg buffet", "300 guest capacity", "Complimentary parking"],
    highlighted: false,
  },
  {
    name: "Platinum Package",
    subtitle: "Full Decor + Premium Catering",
    price: "₹1,20,000",
    features: ["Hall rental for 12 hours", "Premium floral decoration", "Multi-cuisine premium buffet", "500 guest capacity", "Valet parking", "DJ & lighting"],
    highlighted: false,
  },
  {
    name: "Corporate Package",
    subtitle: "Full AV Support & Professional Catering",
    price: "₹40,000",
    features: ["Conference hall for 8 hours", "Projector & AV setup", "Professional catering", "150 guest capacity", "Wi-Fi & tech support"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Choose Your Package
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl scale-[1.02]"
                  : "bg-background shadow-sm hover:shadow-lg"
              }`}
            >
              <h3 className="font-heading text-xl font-semibold mb-1">{pkg.name}</h3>
              <p className={`font-body text-sm mb-4 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {pkg.subtitle}
              </p>
              <div className="font-heading text-3xl font-bold mb-6">{pkg.price}</div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-primary-foreground/80" : "text-primary"}`} />
                    <span className={pkg.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                className={`block w-full text-center py-2.5 rounded-full font-body text-sm font-medium transition-colors ${
                  pkg.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
