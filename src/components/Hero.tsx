import { Button } from "@/components/ui/button";
import { Crown, Download, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maharana Mansion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal/80 via-royal/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-2 mb-8">
            <Crown className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">A Royal Address. A Modern Legacy.</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold text-royal-foreground mb-6 leading-tight">
            MAHARANA
            <span className="block text-gold">MANSION</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-royal-foreground/90 mb-8 leading-relaxed max-w-2xl">
            Experience the legendary concept of affordable luxury housing. 
            Where heritage meets modernity in perfect harmony.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card/10 backdrop-blur-sm border border-royal-foreground/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-gold mb-1">144</div>
              <div className="text-royal-foreground/80">Premium Apartments</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-royal-foreground/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-gold mb-1">1.25</div>
              <div className="text-royal-foreground/80">Acres of Elegance</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-royal-foreground/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-gold mb-1">80%</div>
              <div className="text-royal-foreground/80">Construction Complete</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="xl" className="group">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Enquire Now
            </Button>
            <Button variant="premium" size="xl" className="group">
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Portfolio
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-royal-foreground/80">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-lg">Near Railway Station, Industrial Area, Neemrana</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 hidden xl:block">
        <div className="bg-card/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 text-center gold-shimmer">
          <div className="text-4xl font-bold text-gold mb-2">₹45L*</div>
          <div className="text-royal-foreground/80">Starting Price</div>
        </div>
      </div>

      <div className="absolute bottom-20 right-20 hidden xl:block">
        <div className="bg-card/20 backdrop-blur-sm border border-royal/30 rounded-2xl p-6 text-center">
          <div className="text-2xl font-bold text-royal-foreground mb-2">RERA Approved</div>
          <div className="text-royal-foreground/80 text-sm">RAJ/P/2020/1576</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-royal-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;