import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slider1,
      title: "Luxury Commercial Complex",
      description: "Experience premium shopping and dining at your doorstep"
    },
    {
      image: slider2,
      title: "Landscaped Gardens",
      description: "Beautiful green spaces for relaxation and recreation"
    },
    {
      image: slider3,
      title: "Modern Row Houses",
      description: "Contemporary living with traditional architectural elements"
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
                <div className="max-w-2xl">
                  <h2 className={`text-5xl lg:text-7xl font-bold text-royal-foreground mb-6 transition-all duration-700 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                    {slide.title}
                  </h2>
                  <p className={`text-xl lg:text-2xl text-royal-foreground/90 mb-8 transition-all duration-700 delay-200 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                    {slide.description}
                  </p>
                  <div className={`transition-all duration-700 delay-400 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                    <Button variant="hero" size="xl" className="group">
                      Explore More
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
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

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 hidden xl:block animate-bounce">
        <div className="bg-card/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 text-center gold-shimmer">
          <div className="text-4xl font-bold text-gold mb-2">144</div>
          <div className="text-royal-foreground/80">Premium Units</div>
        </div>
      </div>

      <div className="absolute bottom-20 right-20 hidden xl:block animate-pulse">
        <div className="bg-card/20 backdrop-blur-sm border border-royal/30 rounded-2xl p-6 text-center">
          <div className="text-2xl font-bold text-royal-foreground mb-2">RERA Approved</div>
          <div className="text-royal-foreground/80 text-sm">RAJ/P/2020/1576</div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;