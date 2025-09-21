import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import VideoHeroSecond from "@/components/VideoHeroSecond";
import About from "@/components/About";
import PhotoShowcase from "@/components/PhotoShowcase";
import Amenities from "@/components/Amenities";
import PricingSection from "@/components/PricingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Crown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <VideoHero />
      </section>
      <About />
      <section id="amenities" className="pt-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-6">
              <Crown className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold">Gallery</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold royal-heading">
              Heritage City Gallery
            </h2>
          </div>
        </div>
      </section>
      <PhotoShowcase />
      <Amenities />
      <VideoHeroSecond />
      <PricingSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
