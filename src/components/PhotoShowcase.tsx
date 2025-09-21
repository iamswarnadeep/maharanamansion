import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, Video, Image as ImageIcon, Building, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import floorPlans from "@/assets/floorPlans.pdf";

// ✅ All image links here
const Image1 = "https://i.ibb.co/K89PXrs/IMG-0154.jpg";
const Image2 = "https://i.ibb.co/8nkftxtG/IMG-0155.jpg";
const Image3 = "https://i.ibb.co/6J8JyK01/IMG-0156.jpg";
const Image4 = "https://i.ibb.co/F4CfhGZ4/IMG-0157.jpg";
const Image5 = "https://i.ibb.co/Y7Vj4HYZ/IMG-0158.jpg";
const Image6 = "https://i.ibb.co/VYmpv1fC/IMG-0159.jpg";
const Image7 = "https://i.ibb.co/gqqfRdj/IMG-0160.jpg";
const Image8 = "https://i.ibb.co/mFccBmVR/IMG-0161.jpg";
const Image9 = "https://i.ibb.co/Wp3LQWNW/IMG-0162.jpg";
const Image10 = "https://i.ibb.co/BK3nNCzZ/IMG-0163.jpg";
const Image11 = "https://i.ibb.co/yc4Pmmrb/IMG-0164.jpg";
const Image12 = "https://i.ibb.co/DDMMVGWt/IMG-0214.png";
const Image13 = "https://i.ibb.co/4R8WmzbG/IMG-0215.png";
const Image14 = "https://i.ibb.co/fVW7q9gz/IMG-0250.png";
const Image15 = "https://i.ibb.co/kVFVNcyr/IMG-0251.png";
const Image16 = "https://i.ibb.co/W4sDLDLv/IMG-0304.jpg";
const Image17 = "https://i.ibb.co/RGxmtz0c/IMG-0305.jpg";
const Image18 = "https://i.ibb.co/dsNxJrMM/IMG-0311.jpg";
const Image19 = "https://i.ibb.co/Qj1kcKG4/IMG-0317.jpg";
const Image20 = "https://i.ibb.co/DP0NwQtV/IMG-0318.jpg";
const Image21 = "https://i.ibb.co/HfzD5P3c/IMG-0319.jpg";
const Image22 = "https://i.ibb.co/dsxTNMD8/IMG-0342.png";
const Image23 = "https://i.ibb.co/4g9dkcnm/IMG-0344.jpg";
const Image24 = "https://i.ibb.co/xq5HJVhK/IMG-0513.jpg";
const Image25 = "https://i.ibb.co/0ywK20yc/IMG-0516.jpg";
const Image26 = "https://i.ibb.co/dwM7WcpK/IMG-0629.jpg";
const Image27 = "https://i.ibb.co/NgW5B6c1/IMG-0630.jpg";
const Image28 = "https://i.ibb.co/1tc425zC/IMG-0631.jpg";
const Image29 = "https://i.ibb.co/7NTvPDZw/IMG-0632.jpg";
const Image30 = "https://i.ibb.co/cKrr6YKh/IMG-0633.jpg";
const Image31 = "https://i.ibb.co/MkXqkW3n/IMG-0634.jpg";

const Image32 = "https://i.ibb.co/qYQSHh0m/Chat-GPT-Image-Aug-20-2025-11-28-58-PM.png";
const Image33 = "https://i.ibb.co/FkCq3QnG/Chat-GPT-Image-Aug-21-2025-09-28-53-PM.png";
const Image34 = "https://i.ibb.co/xvCzRd7/Chat-GPT-Image-Aug-21-2025-09-42-13-PM.png";
const Image35 = "https://i.ibb.co/cXcBbw2Y/Chat-GPT-Image-Aug-21-2025-10-23-44-PM.png";
const Image36 = "https://i.ibb.co/RGF6Wn9M/Chat-GPT-Image-Aug-21-2025-11-29-32-PM.png";
const Image37 = "https://i.ibb.co/Z6KLngWd/Chat-GPT-Image-Aug-21-2025-12-08-35-AM.png";
const Image38 = "https://i.ibb.co/9H9fRVNB/Chat-GPT-Image-Aug-21-2025-12-40-21-AM-1.png";
const Image39 = "https://i.ibb.co/F93JG92/Chat-GPT-Image-Aug-21-2025-12-59-59-AM.png";

const Image40 = "https://i.ibb.co/67wZ79m0/slide-1.png";
const Image41 = "https://i.ibb.co/N6nCwBcv/slide-2.png";
const Image42 = "https://i.ibb.co/bc9My5n/slide-3.png";
const Image43 = "https://i.ibb.co/ks30b7TC/slide-4.png";
const Image44 = "https://i.ibb.co/8LPnJ1Pt/slide-5.png";
const Image45 = "https://i.ibb.co/jPQ2zJ53/slide-6.png";

// ✅ Categorized arrays
const architectureImages = [Image32, Image33, Image34, Image35, Image36, Image37, Image38, Image39];
const amenityImages = [Image40, Image41, Image42, Image43, Image44, Image45];
const locationImages = [
  Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10,
  Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20,
  Image21, Image22, Image23, Image24, Image25, Image26, Image27, Image28, Image29, Image30, Image31
];

// ✅ Reusable Lightbox-enabled ImageGrid
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

// ✅ Main Showcase Component
const PhotoShowcase = () => {
  return (
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
              Material
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

          <TabsContent value="virtual">
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
                <h4 className="text-2xl font-bold heading-font mb-4">Floor Plans</h4>
                <p className="text-muted-foreground body-font mb-6">
                  Explore detailed, interactive floor plans for all apartment configurations and layouts.
                </p>
                <Button
                  className="bg-transparent text-primary border-2 border-primary"
                  size="lg"
                  onClick={() => window.open(floorPlans, "_blank")}
                >
                  View Floor Plans
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PhotoShowcase;
