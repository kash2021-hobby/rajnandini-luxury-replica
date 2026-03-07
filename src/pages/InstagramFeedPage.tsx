import { useState } from "react";
import { Instagram } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import InstagramReelLightbox from "@/components/InstagramReelLightbox";

const InstagramFeedPage = () => {
  const [selectedReelIndex, setSelectedReelIndex] = useState<number | null>(null);
  // Dummy Instagram reel embed URLs (replace with actual Instagram embed URLs)
  const instagramReels = [
    {
      id: 1,
      embedUrl: "https://www.instagram.com/reel/C8example1/embed",
      title: "Wedding Celebration Moments"
    },
    {
      id: 2,
      embedUrl: "https://www.instagram.com/reel/C8example2/embed",
      title: "Premium Catering Setup"
    },
    {
      id: 3,
      embedUrl: "https://www.instagram.com/reel/C8example3/embed",
      title: "Birthday Party Decoration"
    },
    {
      id: 4,
      embedUrl: "https://www.instagram.com/reel/C8example4/embed",
      title: "Reception Hall View"
    },
    {
      id: 5,
      embedUrl: "https://www.instagram.com/reel/C8example5/embed",
      title: "Food Menu Highlights"
    },
    {
      id: 6,
      embedUrl: "https://www.instagram.com/reel/C8example6/embed",
      title: "Event Setup Process"
    },
    {
      id: 7,
      embedUrl: "https://www.instagram.com/reel/C8example7/embed",
      title: "Guest Experience"
    },
    {
      id: 8,
      embedUrl: "https://www.instagram.com/reel/C8example8/embed",
      title: "Special Moments Captured"
    }
  ];

  const handleFollowInstagram = () => {
    // Replace with actual Instagram profile URL
    window.open("https://www.instagram.com/rajnandiniluxury/", "_blank", "noopener,noreferrer");
  };

  const handleReelClick = (index: number) => {
    setSelectedReelIndex(index);
  };

  const handleClose = () => {
    setSelectedReelIndex(null);
  };

  const handleNext = () => {
    if (selectedReelIndex !== null) {
      setSelectedReelIndex((selectedReelIndex + 1) % instagramReels.length);
    }
  };

  const handlePrev = () => {
    if (selectedReelIndex !== null) {
      setSelectedReelIndex(
        (selectedReelIndex - 1 + instagramReels.length) % instagramReels.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Instagram Feed
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Latest moments from our Instagram
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Reels Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {instagramReels.map((reel, index) => (
              <div
                key={reel.id}
                className="relative aspect-[9/16] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleReelClick(index)}
              >
                <iframe
                  src={reel.embedUrl}
                  title={reel.title}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
                {/* Overlay to indicate clickable */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Follow Button */}
          <div className="mt-16 text-center">
            <Button
              onClick={handleFollowInstagram}
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow us on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Instagram Reel Lightbox */}
      <InstagramReelLightbox
        reels={instagramReels}
        selectedIndex={selectedReelIndex}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default InstagramFeedPage;
