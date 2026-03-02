import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    quote: "Rajnandini made our wedding day absolutely magical. The decoration was beyond our expectations, and the staff was incredibly attentive. Every guest complimented the venue and the food. Truly the best in Guwahati!",
    rating: 5,
  },
  {
    name: "Rahul Dutta",
    role: "Corporate Client",
    quote: "We hosted our annual conference at Rajnandini and it was a seamless experience. The AV setup was top-notch, the catering was excellent, and the staff handled everything professionally. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            What Our Happy Clients Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
