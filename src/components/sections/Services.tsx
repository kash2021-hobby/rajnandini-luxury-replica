import { Heart, Briefcase, PartyPopper, UtensilsCrossed } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding & Receptions",
    description: "Premium decor and spacious halls for your dream day. We craft every detail to perfection.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional settings for seminars, conferences, and corporate gatherings with full AV support.",
  },
  {
    icon: PartyPopper,
    title: "Social Celebrations",
    description: "Birthdays, anniversaries, and special occasions styled to perfection in elegant settings.",
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Catering",
    description: "Multi-cuisine delicacies crafted for every palate by our expert culinary team.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            What We Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
