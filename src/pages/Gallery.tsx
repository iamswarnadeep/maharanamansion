import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, Video, Image as ImageIcon, Building, ChevronLeft, ChevronRight, X } from "lucide-react";
import rajputanaGallery from "@/assets/rajputana-gallery.jpg";
import brochure from "@/assets/brochure.pdf";

import Image1 from "@/assets/Image1.jpg";
import Image2 from "@/assets/Image2.jpg";
import Image3 from "@/assets/Image3.jpg";
import Image4 from "@/assets/Image4.jpg";
import Image5 from "@/assets/Image5.jpg";
import Image6 from "@/assets/Image6.jpg";
import Image7 from "@/assets/Image7.jpg";
import Image8 from "@/assets/Image8.jpg";
import Image9 from "@/assets/Image9.jpg";
import Image10 from "@/assets/Image10.jpg";
import Image11 from "@/assets/Image11.jpg";
import Image12 from "@/assets/Image12.jpg";

const Gallery = () => {
  // Use simple arrays of image sources (no titles/descriptions anywhere)
  const architectureImages: string[] = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12
  ];

  const amenityImages: string[] = [
    Image5,
    Image6,
    Image7,
    Image8,
    Image1,
    Image2,
    Image3,
    Image4,
    Image9,
    Image10,
    Image11,
    Image12
  ];

  const locationImages: string[] = [
    Image9,
    Image10,
    Image11,
    Image12,
    Image5,
    Image6,
    Image7,
    Image8,
    Image1,
    Image2,
    Image3,
    Image4    
  ];

  // Lightbox-enabled ImageGrid
  const ImageGrid = ({ images }: { images: string[] }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const showPrev = () => {
      if (selectedIndex === null) return;
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };

    const showNext = () => {
      if (selectedIndex === null) return;
      setSelectedIndex((selectedIndex + 1) % images.length);
    };

    return (
      <>
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              onClick={() => setSelectedIndex(i)}
            >
              <img src={src} alt={`Gallery ${i}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
          <DialogContent className="max-w-6xl p-4 bg-background rounded-xl [&>button]:hidden">
            {selectedIndex !== null && (
              <div className="relative">
                {/* Close */}
                <button
                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2 z-10"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Main image + nav */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={showPrev}
                    className="absolute left-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <img
                    src={images[selectedIndex]}
                    alt={`Large ${selectedIndex}`}
                    className="max-h-[70vh] mx-auto rounded-xl object-contain"
                  />

                  <button
                    onClick={showNext}
                    className="absolute right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 mt-4 overflow-x-auto p-2">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Thumb ${i}`}
                      className={`h-20 w-28 object-cover rounded-lg cursor-pointer transition-all ${
                        i === selectedIndex ? "ring-4 ring-primary" : "opacity-80 hover:opacity-100"
                      }`}
                      onClick={() => setSelectedIndex(i)}
                    />
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${rajputanaGallery})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6">
            <Camera className="w-5 h-5 text-gold" />
            <span className="font-semibold">Visual Gallery</span>
          </div>

          <div className="hero-text text-4xl md:text-7xl font-dala text-white mb-2 leading-tight">
            Heritage City Gallery
          </div>

          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed body-font">
            Explore the visual journey of architectural excellence and natural beauty
          </p>
        </div>
      </section>

      {/* Gallery Tabs (only images inside tabs; no extra content) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="architecture" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12 h-14">
              <TabsTrigger value="architecture" className="flex items-center gap-2 text-sm">
                <Building className="w-4 h-4" />
                Architecture
              </TabsTrigger>
              <TabsTrigger value="amenities" className="flex items-center gap-2 text-sm">
                <ImageIcon className="w-4 h-4" />
                Amenities
              </TabsTrigger>
              <TabsTrigger value="location" className="flex items-center gap-2 text-sm">
                <Camera className="w-4 h-4" />
                Location
              </TabsTrigger>
              <TabsTrigger value="virtual" className="flex items-center gap-2 text-sm">
                <Video className="w-4 h-4" />
                Virtual Tour
              </TabsTrigger>
            </TabsList>

            <TabsContent value="architecture">
              <ImageGrid images={architectureImages} />
            </TabsContent>

            <TabsContent value="amenities">
              <ImageGrid images={amenityImages} />
            </TabsContent>

            <TabsContent value="location">
              <ImageGrid images={locationImages} />
            </TabsContent>

            {/* If you have virtual tour images, add them here; else you can keep your "Coming Soon" cards */}
            <TabsContent value="virtual">
              {/* Example: keep your existing "Coming Soon" cards, or replace with images: */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card rounded-3xl p-8 shadow-luxury text-center">
                  <div className="bg-primary p-6 rounded-xl w-fit mx-auto mb-6">
                    <Video className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold heading-font mb-4">360° Virtual Tour</h4>
                  <p className="text-muted-foreground body-font mb-6">
                    Experience a complete 360-degree virtual walkthrough of our sample apartments and common areas.
                  </p>
                  <Button variant="default" size="lg">
                    Coming Soon
                  </Button>
                </div>

                <div className="bg-card rounded-3xl p-8 shadow-luxury text-center">
                  <div className="bg-secondary p-6 rounded-xl w-fit mx-auto mb-6">
                    <Building className="w-12 h-12 text-secondary-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold heading-font mb-4">Interactive Floor Plans</h4>
                  <p className="text-muted-foreground body-font mb-6">
                    Explore detailed, interactive floor plans for all apartment configurations and layouts.
                  </p>
                  <Button
                    className="bg-transparent text-primary border-2 border-primary"
                    size="lg"
                    onClick={() => window.open(brochure, "_blank")}
                  >
                    View Floor Plans
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 shadow-luxury">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 heading-font">500+</div>
                <div className="text-muted-foreground text-lg body-font">High-Quality Images</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 heading-font">50+</div>
                <div className="text-muted-foreground text-lg body-font">Virtual Tours</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 heading-font">25+</div>
                <div className="text-muted-foreground text-lg body-font">Video Walkthroughs</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 heading-font">100+</div>
                <div className="text-muted-foreground text-lg body-font">Architectural Details</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Schedule Your Visit
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto body-font">
              See the beauty of Heritage City in person. Book your site visit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" onClick={() => (window.location.href = "/contact")}>
                Book Site Visit
              </Button>
              <Button
                className="bg-transparent text-primary border-2 border-primary"
                size="lg"
                onClick={() => window.open(brochure, "_blank")}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
