import { Crown, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import brochure from "@/assets/portfolio.pdf";
import maharanaVideo from "@/assets/maharana-main-video-two.mp4";

const VideoHero = () => {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Video Background - Using placeholder for now */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={maharanaVideo}
        >
          {/* Fallback image */}
          <img
            src="/placeholder.svg"
            alt="Maharana Mansion"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Maharana Mansion</span>
          </div> */}
          {/* Main Heading */}
          <div className="hero-text text-4xl md:text-7xl font-dala text-white mb-2 leading-tight">
            Experience Royal Living Within Reach
          </div>
          {/* <h3 className="text-white" style={{font-family: 'Playfair Display', serif;}}> lala lee lee lalalalala</h3> */}
          {/* <div className="hero-text text-4xl md:text-7xl font-dala text-white mb-2 leading-tight">
            Affortable Living
          </div> */}

          {/* Call to Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              size="lg"
              variant="default"
              onClick={() => window.location.href = "#contact"}
            >
              <Phone className="w-5 h-5 mr-2" />
              Enquire Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 px-8 py-4 text-md font-semibold body-font"
              onClick={() => window.open(brochure, "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default VideoHero;
