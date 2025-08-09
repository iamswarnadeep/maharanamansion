import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <section id="gallery">
        <ImageSlider />
      </section>
      <About />
      <Amenities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
