import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Footer from "@/components/sections/Footer";
import contactImg from "@/assets/contact.jpg";
import { services } from "@/data/services";

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const serviceName = searchParams.get("service") || "";
  const packageName = searchParams.get("package") || "";

  const prefill = serviceName
    ? `I'm interested in your ${serviceName} service.`
    : packageName
      ? `I'm interested in the ${packageName}.`
      : "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceName,
    message: prefill,
  });
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = date ? format(date, "PPP") : "";
    const text = `Hi, I'm ${form.name}.%0A%0AEmail: ${form.email}${form.phone ? `%0APhone: ${form.phone}` : ""}${form.service ? `%0AService: ${form.service}` : ""}${dateStr ? `%0AEvent Date: ${dateStr}` : ""}%0A%0A${form.message}`;
    const waUrl = `https://wa.me/919164060961?text=${text}`;
    window.location.href = waUrl;
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setDate(undefined);
  };

  return (
    <div className="min-h-screen bg-background">
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
              
              {/* Service Selection Dropdown */}
              <Select onValueChange={(value) => setForm({ ...form, service: value })} value={form.service}>
                <SelectTrigger className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors rounded-none h-auto border-0 justify-start">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.label}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Date Picker */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-0 border-b-2 border-border rounded-none bg-transparent px-0 py-3 h-auto hover:bg-transparent focus:border-primary font-body",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select Event Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
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