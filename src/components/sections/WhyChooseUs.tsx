import { useRef, useEffect, useState, useCallback } from "react";
import { MapPin, Users, CalendarCheck, Sparkles, IndianRupee, AirVent, Car, Shield, ChefHat, Bed } from "lucide-react";

import serviceAcComfort from "@/assets/service-ac-comfort.webp";
import serviceParking from "@/assets/service-parking.webp";
import serviceSecurity from "@/assets/service-security.webp";
import serviceKitchen from "@/assets/service-kitchen.webp";
import serviceGuestRoom from "@/assets/service-guest-room.webp";

const reasons = [
  {
    icon: AirVent,
    image: serviceAcComfort,
    title: "Fully Air-Conditioned Comfort",
    description: "Fully air-conditioned banquet hall with premium furniture designed to keep guests comfortable during weddings and corporate events.",
  },
  {
    icon: Car,
    image: serviceParking,
    title: "Ample Parking & Valet",
    description: "Spacious parking facilities with professional valet service to ensure smooth and convenient arrival for guests.",
  },
  {
    icon: Shield,
    image: serviceSecurity,
    title: "Safety & Security",
    description: "Professional security arrangements with full CCTV surveillance across the venue for a safe and secure event experience.",
  },
  {
    icon: ChefHat,
    image: serviceKitchen,
    title: "Hygienic Kitchen Facilities",
    description: "Clean and hygienic kitchen with chill storage and dedicated water supply to support high-quality catering services.",
  },
  {
    icon: Bed,
    image: serviceGuestRoom,
    title: "Guest Comfort Rooms",
    description: "Comfortable master bedroom with attached bathroom and furnished drawing and dining rooms for family members and VIP guests.",
  },
];

const WhyChooseUs = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  // Auto-scroll using requestAnimationFrame
  const scrollSpeed = 0.5; // px per frame
  const rafRef = useRef<number>(0);
  const scrollPos = useRef(0);

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track || isPaused || isDragging) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }
    scrollPos.current += scrollSpeed;
    // Reset when we've scrolled past the first set of cards
    const halfWidth = track.scrollWidth / 2;
    if (scrollPos.current >= halfWidth) {
      scrollPos.current = 0;
    }
    track.scrollLeft = scrollPos.current;
    rafRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  // Sync scrollPos when user drags
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragState.current.startX = e.pageX;
    dragState.current.scrollLeft = trackRef.current?.scrollLeft ?? 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragState.current.startX;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const handleMouseUp = () => {
    if (isDragging && trackRef.current) {
      scrollPos.current = trackRef.current.scrollLeft;
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragState.current.startX = e.touches[0].pageX;
    dragState.current.scrollLeft = trackRef.current?.scrollLeft ?? 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.touches[0].pageX - dragState.current.startX;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const handleTouchEnd = () => {
    if (isDragging && trackRef.current) {
      scrollPos.current = trackRef.current.scrollLeft;
    }
    setIsDragging(false);
  };

  // Duplicate cards for seamless loop
  const allCards = [...reasons, ...reasons];

  return (
    <section
      className="py-20 lg:py-28 bg-muted/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsDragging(false);
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-secondary text-lg">◆✦</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Why <em>Choose Us</em>
            </h2>
            <span className="text-secondary text-lg">✦◆</span>
          </div>
          <p className="font-body text-muted-foreground text-base">
            Everything You Need for a Perfect Celebration
          </p>
        </div>
      </div>

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex gap-6 px-6 overflow-hidden select-none"
        style={{ cursor: isDragging ? "grabbing" : "grab", scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {allCards.map((reason, i) => (
          <div
            key={`${reason.title}-${i}`}
            className="group flex-shrink-0 w-[280px] border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-card"
          >
            <div className="overflow-hidden">
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="p-5 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3">
                <reason.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
