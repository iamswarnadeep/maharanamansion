import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Crown, Download, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slider1,
      title: "MAHARANA",
      subtitle: "MANSION",
      description: "Experience the legendary concept of affordable luxury housing. Where heritage meets modernity in perfect harmony."
    },
    {
      image: slider2,
      title: "MAHARANA",
      subtitle: "MANSION", 
      description: "Beautiful landscaped gardens and premium amenities designed for modern royal living in the heart of Neemrana."
    },
    {
      image: slider3,
      title: "MAHARANA",
      subtitle: "MANSION",
      description: "Contemporary architecture blended with traditional elegance, offering 144 premium apartments across 1.25 acres."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-royal/70 via-royal/40 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-2 mb-8 transition-all duration-700 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                    <Crown className="w-5 h-5 text-gold" />
                    <span className="text-gold font-semibold">A Royal Address. A Modern Legacy.</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className={`text-6xl lg:text-8xl font-bold text-royal-foreground mb-6 leading-tight transition-all duration-700 delay-100 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                    {slide.title}
                    <span className="block text-gold">{slide.subtitle}</span>
                  </h1>

                  {/* Subtitle */}
                  <p className={`text-xl lg:text-2xl text-royal-foreground/90 mb-10 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className={`flex flex-col sm:flex-row gap-4 mb-8 justify-center transition-all duration-700 delay-300 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                    <Button variant="hero" size="xl" className="group">
                      <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Enquire Now
                    </Button>
                    <Button variant="premium" size="xl" className="group">
                      <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                      Download Brochure
                    </Button>
                  </div>

                  {/* Location */}
                  <div className={`flex items-center gap-2 text-royal-foreground/80 justify-center transition-all duration-700 delay-400 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                    <MapPin className="w-5 h-5 text-gold" />
                    <span className="text-lg">Near Railway Station, Industrial Area, Neemrana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-card/20 backdrop-blur-sm border border-royal-foreground/20 rounded-full p-3 text-royal-foreground hover:bg-card/40 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-card/20 backdrop-blur-sm border border-royal-foreground/20 rounded-full p-3 text-royal-foreground hover:bg-card/40 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold scale-125 shadow-gold"
                : "bg-royal-foreground/40 hover:bg-royal-foreground/60"
            }`}
          />
        ))}
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

export default ImageSlider;