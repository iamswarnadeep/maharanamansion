import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import rajputanaGallery from "@/assets/rajputana-gallery.jpg";
import brochure from "@/assets/portfolio.pdf";
import floorPlans from "@/assets/floorPlans.pdf";
import PhotoShowcase from "@/components/PhotoShowcase";

const Gallery = () => {
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

      {/* ✅ Photo Showcase Component */}
      <PhotoShowcase />

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
                onClick={() => window.open(floorPlans, "_blank")}
              >
                Download Portfolio
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
