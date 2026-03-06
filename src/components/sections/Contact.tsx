import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import contactImg from "@/assets/contact.jpg";
import { services } from "@/data/services";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = date ? format(date, "PPP") : "";
    const text = `Hi, I'm ${form.name}.%0A%0AEmail: ${form.email}${form.phone ? `%0APhone: ${form.phone}` : ""}${form.service ? `%0AService: ${form.service}` : ""}${dateStr ? `%0AEvent Date: ${dateStr}` : ""}%0A%0A${form.message}`;
    window.location.href = `https://wa.me/919164060961?text=${text}`;
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setDate(undefined);
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
              <SelectTrigger className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 font-body text-foreground placeholder:text-muted-foreground transition-colors rounded-none h-auto justify-start">
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