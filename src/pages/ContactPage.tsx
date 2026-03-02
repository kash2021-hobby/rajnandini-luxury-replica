import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import contactImg from "@/assets/contact.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get("package") || "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: packageName ? `I'm interested in the ${packageName}.` : "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}.%0A%0AEmail: ${form.email}${form.phone ? `%0APhone: ${form.phone}` : ""}%0A%0A${form.message}`;
    window.open(`https://wa.me/917099042360?text=${text}`, "_blank");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 lg:pb-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
              Contact Us
            </p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Book Your Special Date
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors"
              />
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-10 py-3 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Info + Map */}
            <div className="space-y-8">
              <img
                src={contactImg}
                alt="Rajnandini Banquet Hall"
                className="w-full h-[220px] object-cover rounded-3xl shadow-lg"
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div className="font-body text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Address</p>
                    Balaram Basumatari Path, Kerakuchi, Guwahati, Assam 781040
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div className="font-body text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    +91 70990 42360
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div className="font-body text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Email</p>
                    info@rajnandiniguwahati.com
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div className="font-body text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Hours</p>
                    Mon - Sun: 9AM - 10PM
                  </div>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d91.73!3d26.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzAwLjAiTiA5McKwNDMnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rajnandini Banquet Hall Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
