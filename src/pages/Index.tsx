import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import VideoHeroSecond from "@/components/VideoHeroSecond";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <VideoHero />
      </section>
      <About />
      <Amenities />
      <VideoHeroSecond />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
