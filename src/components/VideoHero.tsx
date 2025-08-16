import { Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background - Using placeholder for now */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src="/placeholder.svg" 
            alt="Maharana Mansion" 
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="hero-font text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Royal Heritage Living
          </h1>
          
          {/* Subheading */}
          <h2 className="hero-font text-2xl md:text-4xl lg:text-5xl font-medium text-white/90 mb-8">
            Where Legacy
            <br />
            Meets Luxury
          </h2>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg font-semibold body-font"
            >
              <Phone className="w-5 h-5 mr-2" />
              Enquire Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg font-semibold body-font"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;