import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown, MapPin, Building, Users, Award, Target } from "lucide-react";
import neeamranaAerial from "@/assets/neemrana-aerial.jpg";
import brochure from "@/assets/brochure.pdf";

const About = () => {
  const principles = [
    {
      icon: Target,
      title: "Carve on the screen of time",
      description: "Creating lasting impressions that transcend generations"
    },
    {
      icon: Award,
      title: "Craft with honesty", 
      description: "Building with integrity and transparency in every detail"
    },
    {
      icon: Building,
      title: "Create on the crust of the earth",
      description: "Harmonizing development with natural landscapes"
    }
  ];

  const phases = [
    {
      name: "Phase I: Maharana Mansion",
      theme: "Rajputana Architecture",
      dedicatedTo: "Maharana Pratap Singh Sisodia",
      offering: "Affordable Housing",
      units: ["1 BHK (~500+ sq.ft.)", "2 BHK (~750+ sq.ft.)"],
      configuration: "G+4 and G+9 towers",
      highlights: [
        "Palatial Rajputana-inspired architecture",
        "Scenic views of Aravali hills", 
        "Proximity to Neemrana Fort & Queen's Baoli",
        "Ideal for industrial workers and families"
      ]
    },
    {
      name: "Phase II: Shiva Sapphire",
      theme: "Maratha Architecture", 
      dedicatedTo: "Chhatrapati Shivaji Maharaj",
      offering: "Luxury Apartments",
      highlights: [
        "Inspired by Maratha Empire grandeur",
        "Modern luxury with cultural essence",
        "Premium amenities for urban families",
        "Redefined luxury in heritage"
      ]
    },
    {
      name: "Phase III: Samrat Shrine",
      theme: "Vedic & Gupta Dynasty Architecture",
      dedicatedTo: "Samrat Samudragupta", 
      offering: "Premium Villas",
      highlights: [
        "Ancient Vedic architecture inspiration",
        "Exclusive villa living with expansive layouts",
        "Celebrating cultural and spiritual heritage",
        "A lifestyle of grandeur and wisdom"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${neeamranaAerial})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-gold" />
            <span className="font-semibold">About Gennext Heritage City</span>
          </div>
          
          <div className="hero-text text-4xl md:text-7xl font-dala text-white mb-2 leading-tight">
            A Timeless Vision
          </div>
          
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed body-font">
            Where heritage meets modern living in the heart of Rajasthan
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-8">
              More Than Just Four Walls
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed body-font mb-12">
              At Gennext Infratech Private Limited, we believe that a true home is more than just four walls – 
              it is a connection to culture, heritage, and history. In today's fast-paced modern world, 
              there is a growing need to reconnect with our roots and traditions while fulfilling essential housing needs.
            </p>

            {/* Land Highlight */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 shadow-luxury border border-primary/20 mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-primary heading-font">Prime Location</h3>
              </div>
              <p className="text-2xl font-bold text-foreground heading-font leading-relaxed">
                Gennext has acquired <span className="text-primary">50 acres of prime land</span> under the foothills of 
                <span className="text-secondary"> Neemrana Fort and the Aravali mountain range</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto body-font">
              Simple yet profound values that shape every aspect of our development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-luxury hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-primary p-4 rounded-xl w-fit mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 heading-font text-primary">{principle.title}</h3>
                <p className="text-muted-foreground body-font">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Neemrana */}  
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-8">
                  Why Neemrana, 
                  <span className="block text-primary">Rajasthan?</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-2 rounded-lg mt-1">
                      <Crown className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-lg body-font">Rajasthan - the land of kings, valor, and heritage</p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-2 rounded-lg mt-1">
                      <Building className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-lg body-font">Historical and tourist hub, home to famous Neemrana Fort Palace</p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-2 rounded-lg mt-1">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-lg body-font">Strategically located in Delhi NCR region with urban connectivity</p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-2 rounded-lg mt-1">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-lg body-font">Close to Korean Industrial Zone at Ghilot (6 km away)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 shadow-luxury">
                <h3 className="text-2xl font-bold heading-font mb-6 text-center">Perfect Combination</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-card rounded-xl p-4">
                    <h4 className="font-bold text-primary heading-font">Heritage</h4>
                  </div>
                  <div className="bg-card rounded-xl p-4">
                    <h4 className="font-bold text-primary heading-font">Tourism</h4>
                  </div>
                  <div className="bg-card rounded-xl p-4">
                    <h4 className="font-bold text-primary heading-font">Industry</h4>
                  </div>
                  <div className="bg-card rounded-xl p-4">
                    <h4 className="font-bold text-primary heading-font">Connectivity</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Phases */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              The Three Phases of 
              <span className="block text-primary">Heritage City</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto body-font">
              Each phase represents an era of Indian history and architecture, crowned with a dedicated monumental statue
            </p>
          </div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 lg:p-12 shadow-luxury"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold royal-heading heading-font mb-4 text-primary">
                      {phase.name}
                    </h3>
                    <div className="space-y-4 mb-6">
                      <p className="text-lg"><span className="font-semibold">Theme:</span> {phase.theme}</p>
                      <p className="text-lg"><span className="font-semibold">Dedicated to:</span> {phase.dedicatedTo}</p>
                      <p className="text-lg"><span className="font-semibold">Offering:</span> {phase.offering}</p>
                      {phase.units && (
                        <div>
                          <p className="font-semibold text-lg mb-2">Units:</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            {phase.units.map((unit, idx) => (
                              <li key={idx} className="text-muted-foreground">{unit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {phase.configuration && (
                        <p className="text-lg"><span className="font-semibold">Configuration:</span> {phase.configuration}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4 heading-font">Highlights:</h4>
                    <ul className="space-y-3">
                      {phase.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-primary p-1 rounded-full mt-1">
                            <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                          </div>
                          <span className="text-muted-foreground body-font">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 shadow-luxury text-center">
            <h3 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Own a Piece of History
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto body-font">
              Gennext Heritage City is not just a housing project – it is a living museum of Indian history, 
              crafted to bring pride, cultural belonging, and sustainable modern living to its residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" onClick={() => window.location.href = "/contact"}>
                Schedule a Visit
              </Button>
              <Button className="bg-transparent text-primary border-2 border-primary" size="lg" onClick={() => window.open(brochure, "_blank")}>
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

export default About;