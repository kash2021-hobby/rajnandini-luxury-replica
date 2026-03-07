import { useState, useRef, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    avatar: "PS",
    quote: "Rajnandini made our wedding day absolutely magical. The decoration was beyond our expectations, and the staff was incredibly attentive. Every guest complimented the venue and the food. Truly the best in Guwahati!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Rahul Dutta",
    role: "Corporate Client",
    avatar: "RD",
    quote: "We hosted our annual conference at Rajnandini and it was a seamless experience. The AV setup was top-notch, the catering was excellent, and the staff handled everything professionally. Highly recommended!",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Ananya Bose",
    role: "Birthday Celebration",
    avatar: "AB",
    quote: "Amazing venue for celebrations! The team helped us plan everything perfectly for my daughter's birthday party. The food quality was outstanding and the ambiance was perfect. Will definitely book again!",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    name: "Vikram Singh",
    role: "Reception Party",
    avatar: "VS",
    quote: "Excellent service and beautiful venue! Our reception party was a huge success thanks to the Rajnandini team. The air-conditioned halls are spacious and well-maintained. Parking was convenient too!",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Meera Patel",
    role: "Wedding Planner",
    avatar: "MP",
    quote: "As a wedding planner, I've worked with many venues in Guwahati. Rajnandini stands out for their professionalism, beautiful setup, and attention to detail. My clients are always satisfied!",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Aditya Kumar",
    role: "Groom",
    avatar: "AK",
    quote: "Perfect venue for our wedding! The banquet hall exceeded our expectations. Staff was courteous and managed everything smoothly. The food received rave reviews from all our guests. Highly recommend!",
    rating: 5,
    date: "1 month ago"
  },
];

const Testimonials = () => {
  const averageRating = 4.9;
  const totalReviews = 247;
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleViewAllReviews = () => {
    // Replace with actual Google Business profile URL
    window.open("https://www.google.com/maps/search/rajnandini+banquet+hall+guwahati", "_blank", "noopener,noreferrer");
  };

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5; // Slow, smooth scroll speed
        
        // Reset position when halfway through (seamless loop)
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= halfWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Client Reviews
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            What Our Clients Say
          </h2>
        </div>

        {/* Google Rating Summary */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-background rounded-2xl p-8 shadow-md border border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left: Google Logo & Rating */}
              <div className="flex items-center gap-6">
                {/* Google Logo */}
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                    <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                    <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                    <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                  </svg>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Google Reviews</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-3xl font-bold text-foreground">{averageRating}</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(averageRating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-300 text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Based on {totalReviews} reviews</p>
                  </div>
                </div>
              </div>

              {/* Right: View All Reviews Button */}
              <Button
                onClick={handleViewAllReviews}
                variant="outline"
                size="lg"
                className="font-medium gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Read All Reviews on Google
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Review Cards */}
        <div className="relative overflow-hidden max-w-full">
          {/* Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTestimonials.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 relative overflow-hidden flex-shrink-0 w-[340px] md:w-[380px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Google Watermark */}
                <div className="absolute top-4 right-4 opacity-5">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                  </svg>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-start gap-3 mb-4">
                  {/* Avatar Circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-base">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        <svg className="w-3 h-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#4285F4"/>
                        </svg>
                        Google Review
                      </span>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {review.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Join hundreds of satisfied clients who chose Rajnandini for their special events
          </p>
          <Button
            onClick={handleViewAllReviews}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            View More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
