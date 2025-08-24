import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Image as ImageIcon, Building } from "lucide-react";
import rajputanaGallery from "@/assets/rajputana-gallery.jpg";
import heroBuildingImage from "@/assets/hero-building.jpg";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

const Gallery = () => {
  const architectureImages = [
    {
      src: rajputanaGallery,
      title: "Rajputana Palace Architecture",
      description: "Traditional Rajasthani architectural elements with intricate carvings"
    },
    {
      src: heroBuildingImage,
      title: "Heritage City Overview",
      description: "Panoramic view of the entire Heritage City development"
    },
    {
      src: slider1,
      title: "Royal Courtyards",
      description: "Magnificent courtyards inspired by royal palaces"
    },
    {
      src: slider2,
      title: "Traditional Facades",
      description: "Beautifully crafted facades with heritage motifs"
    },
    {
      src: slider3,
      title: "Landscape Integration",
      description: "Seamless blend with Aravali mountain landscape"
    }
  ];

  const amenityImages = [
    {
      src: heroBuildingImage,
      title: "Club House",
      description: "Premium clubhouse with modern amenities"
    },
    {
      src: slider1,
      title: "Swimming Pool",
      description: "Resort-style swimming pool with relaxation area"
    },
    {
      src: slider2,
      title: "Fitness Center",
      description: "State-of-the-art fitness and wellness center"
    },
    {
      src: slider3,
      title: "Gardens & Parks",
      description: "Landscaped gardens and recreational parks"
    }
  ];

  const locationImages = [
    {
      src: rajputanaGallery,
      title: "Neemrana Fort View",
      description: "Stunning views of the historic Neemrana Fort"
    },
    {
      src: heroBuildingImage,
      title: "Aravali Mountains",
      description: "Breathtaking Aravali mountain ranges"
    },
    {
      src: slider1,
      title: "Natural Landscape",
      description: "Pristine natural environment surrounding the project"
    },
    {
      src: slider2,
      title: "Connectivity",
      description: "Strategic location with excellent connectivity"
    }
  ];

  const ImageGrid = ({ images }: { images: typeof architectureImages }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <h4 className="font-bold text-lg heading-font">{image.title}</h4>
                <p className="text-sm text-white/80 body-font">{image.description}</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-lg heading-font mb-2">{image.title}</h4>
            <p className="text-muted-foreground body-font">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

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
          
          <h1 className="text-5xl lg:text-7xl font-bold royal-heading heading-font mb-6">
            Heritage City
            <span className="block text-gold">Gallery</span>
          </h1>
          
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed body-font">
            Explore the visual journey of architectural excellence and natural beauty
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Visual Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto body-font">
              Discover the beauty and grandeur of Gennext Heritage City through our comprehensive gallery
            </p>
          </div>

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

            <TabsContent value="architecture" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold royal-heading heading-font mb-4">
                  Architectural Excellence
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto body-font">
                  Experience the grandeur of Rajputana architecture blended with modern design principles. 
                  Each structure tells a story of heritage and craftsmanship.
                </p>
              </div>
              <ImageGrid images={architectureImages} />
            </TabsContent>

            <TabsContent value="amenities" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold royal-heading heading-font mb-4">
                  World-Class Amenities
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto body-font">
                  Discover the premium amenities designed to enhance your lifestyle. 
                  From recreational facilities to wellness centers, everything is crafted for royal living.
                </p>
              </div>
              <ImageGrid images={amenityImages} />
            </TabsContent>

            <TabsContent value="location" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold royal-heading heading-font mb-4">
                  Prime Location Benefits
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto body-font">
                  Nestled in the foothills of Neemrana Fort and Aravali mountains, 
                  our location offers unparalleled natural beauty and strategic connectivity.
                </p>
              </div>
              <ImageGrid images={locationImages} />
            </TabsContent>

            <TabsContent value="virtual" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold royal-heading heading-font mb-4">
                  Virtual Tour Experience
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto body-font">
                  Take an immersive virtual tour of Gennext Heritage City from the comfort of your home.
                </p>
              </div>
              
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
                    Start Virtual Tour
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
                  <Button variant="outline" size="lg">
                    View Floor Plans
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Schedule Your Visit
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto body-font">
              See the beauty of Heritage City in person. Book your site visit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" onClick={() => window.location.href = "/contact"}>
                Book Site Visit
              </Button>
              <Button variant="outline" size="lg">
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