import { useState } from "react";
import contactImg from "@/assets/contact.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-10 py-3 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Image */}
          <div className="hidden lg:block">
            <img
              src={contactImg}
              alt="Rajnandini team"
              className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
