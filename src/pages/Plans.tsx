import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Building, Crown, MapPin, Ruler, Users } from "lucide-react";
import floorPlans from "@/assets/floor-plans.jpg";

const Plans = () => {
  const maharanaPlans = [
    {
      type: "1 BHK",
      area: "500+ sq.ft.",
      configuration: "G+4 & G+9",
      price: "Starting ₹25 Lakhs",
      features: [
        "Spacious living room",
        "Modern kitchen with utilities",
        "Master bedroom with attached bathroom",
        "Balcony with Aravali views",
        "Dedicated parking space"
      ]
    },
    {
      type: "2 BHK",
      area: "750+ sq.ft.", 
      configuration: "G+4 & G+9",
      price: "Starting ₹35 Lakhs",
      features: [
        "Large living and dining area",
        "Two spacious bedrooms",
        "Two bathrooms (one attached)",
        "Modern modular kitchen",
        "Two balconies with scenic views",
        "Dedicated parking space"
      ]
    }
  ];

  const shivaPlans = [
    {
      type: "2 BHK Luxury",
      area: "1200+ sq.ft.",
      configuration: "G+7 & G+11",
      price: "Starting ₹65 Lakhs",
      features: [
        "Premium living and dining space",
        "Master bedroom with walk-in closet",
        "Guest bedroom with attached bathroom",
        "Designer modular kitchen",
        "Private balconies with fortress views",
        "Reserved parking with storage"
      ]
    },
    {
      type: "3 BHK Luxury",
      area: "1500+ sq.ft.",
      configuration: "G+7 & G+11", 
      price: "Starting ₹85 Lakhs",
      features: [
        "Expansive living room with dining",
        "Three spacious bedrooms",
        "Master suite with dressing area",
        "Premium kitchen with breakfast counter",
        "Multiple balconies with heritage views",
        "Two covered parking spaces"
      ]
    }
  ];

  const samratPlans = [
    {
      type: "Premium Villa - Type A",
      area: "2500+ sq.ft.",
      configuration: "G+1 with Garden",
      price: "Starting ₹1.5 Crores",
      features: [
        "Grand living room with double height",
        "Four bedrooms with attached bathrooms", 
        "Master suite with private balcony",
        "Designer kitchen with island",
        "Private garden and courtyard",
        "Multiple car parking"
      ]
    },
    {
      type: "Premium Villa - Type B",
      area: "3000+ sq.ft.",
      configuration: "G+1 with Garden",
      price: "Starting ₹2 Crores",
      features: [
        "Palatial living and entertainment area",
        "Five bedrooms with luxury fittings",
        "Study room and family lounge",
        "Modular kitchen with utility area",
        "Private pool and landscaped garden",
        "Covered parking for 3 cars"
      ]
    }
  ];

  const PlanCard = ({ plan, phaseColor }: { plan: any, phaseColor: string }) => (
    <div className="bg-card rounded-3xl p-8 shadow-luxury hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-2xl font-bold ${phaseColor} heading-font`}>{plan.type}</h3>
        <div className={`px-4 py-2 rounded-full text-sm font-semibold ${phaseColor === 'text-primary' ? 'bg-primary/10 text-primary' : phaseColor === 'text-secondary' ? 'bg-secondary/10 text-secondary' : 'bg-gold/10 text-gold'}`}>
          {plan.area}
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <Building className="w-5 h-5 text-muted-foreground" />
          <span className="text-muted-foreground">Configuration: {plan.configuration}</span>
        </div>
        <div className="flex items-center gap-3">
          <Crown className="w-5 h-5 text-muted-foreground" />
          <span className="font-bold text-lg">{plan.price}</span>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-bold text-lg mb-4 heading-font">Key Features:</h4>
        <ul className="space-y-2">
          {plan.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3">
              <div className={`p-1 rounded-full mt-1 ${phaseColor === 'text-primary' ? 'bg-primary' : phaseColor === 'text-secondary' ? 'bg-secondary' : 'bg-gold'}`}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-muted-foreground body-font">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="default" size="lg" className="flex-1">
          View Floor Plan
        </Button>
        <Button variant="outline" size="lg" className="flex-1">
          Schedule Visit
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${floorPlans})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6">
            <Ruler className="w-5 h-5 text-gold" />
            <span className="font-semibold">Floor Plans & Pricing</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold royal-heading heading-font mb-6">
            Choose Your
            <span className="block text-gold">Royal Home</span>
          </h1>
          
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed body-font">
            Explore thoughtfully designed floor plans across all three heritage phases
          </p>
        </div>
      </section>

      {/* Plans Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Three Phases of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto body-font">
              From affordable luxury to premium villas, each phase offers unique architectural heritage and modern amenities
            </p>
          </div>

          {/* Phase Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 shadow-luxury text-center">
              <div className="bg-primary p-4 rounded-xl w-fit mx-auto mb-6">
                <Home className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary heading-font mb-4">Phase I: Maharana Mansion</h3>
              <p className="text-muted-foreground body-font mb-4">Rajputana Architecture - Affordable Housing</p>
              <div className="text-lg font-semibold">₹25L - ₹40L</div>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-8 shadow-luxury text-center">
              <div className="bg-secondary p-4 rounded-xl w-fit mx-auto mb-6">
                <Building className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-secondary heading-font mb-4">Phase II: Shiva Sapphire</h3>
              <p className="text-muted-foreground body-font mb-4">Maratha Architecture - Luxury Apartments</p>
              <div className="text-lg font-semibold">₹65L - ₹1.2Cr</div>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-3xl p-8 shadow-luxury text-center">
              <div className="bg-gold p-4 rounded-xl w-fit mx-auto mb-6">
                <Crown className="w-8 h-8 text-gold-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-gold heading-font mb-4">Phase III: Samrat Shrine</h3>
              <p className="text-muted-foreground body-font mb-4">Vedic Architecture - Premium Villas</p>
              <div className="text-lg font-semibold">₹1.5Cr - ₹3Cr</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Plans */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="maharana" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12 h-14">
              <TabsTrigger value="maharana" className="flex items-center gap-2 text-sm">
                <Home className="w-4 h-4" />
                Maharana Mansion
              </TabsTrigger>
              <TabsTrigger value="shiva" className="flex items-center gap-2 text-sm">
                <Building className="w-4 h-4" />
                Shiva Sapphire
              </TabsTrigger>
              <TabsTrigger value="samrat" className="flex items-center gap-2 text-sm">
                <Crown className="w-4 h-4" />
                Samrat Shrine
              </TabsTrigger>
            </TabsList>

            <TabsContent value="maharana" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold royal-heading heading-font mb-4 text-primary">
                  Maharana Mansion - Phase I
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto body-font">
                  Affordable luxury housing inspired by Rajputana architecture. Perfect for families seeking 
                  heritage living at accessible prices.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {maharanaPlans.map((plan, index) => (
                  <PlanCard key={index} plan={plan} phaseColor="text-primary" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shiva" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold royal-heading heading-font mb-4 text-secondary">
                  Shiva Sapphire - Phase II
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto body-font">
                  Luxury apartments inspired by Maratha Empire architecture. Premium living with 
                  modern amenities and cultural grandeur.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {shivaPlans.map((plan, index) => (
                  <PlanCard key={index} plan={plan} phaseColor="text-secondary" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="samrat" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold royal-heading heading-font mb-4 text-gold">
                  Samrat Shrine - Phase III
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto body-font">
                  Premium villas inspired by Vedic and Gupta Dynasty architecture. Exclusive villa living 
                  with expansive layouts and private amenities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {samratPlans.map((plan, index) => (
                  <PlanCard key={index} plan={plan} phaseColor="text-gold" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Investment Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto body-font">
              Strong value proposition backed by strategic location and heritage appeal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-luxury text-center">
              <div className="bg-primary p-4 rounded-xl w-fit mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold heading-font mb-4">Strategic Location</h3>
              <p className="text-muted-foreground body-font">Delhi NCR connectivity with Rajasthan heritage appeal</p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-luxury text-center">
              <div className="bg-secondary p-4 rounded-xl w-fit mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold heading-font mb-4">Strong Demand</h3>
              <p className="text-muted-foreground body-font">Industrial workers, professionals, and heritage seekers</p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-luxury text-center">
              <div className="bg-gold p-4 rounded-xl w-fit mx-auto mb-6">
                <Crown className="w-8 h-8 text-gold-foreground" />
              </div>
              <h3 className="text-xl font-bold heading-font mb-4">Unique Positioning</h3>
              <p className="text-muted-foreground body-font">First heritage-themed city in NCR region</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 shadow-luxury text-center">
            <h3 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Find Your Perfect Home
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto body-font">
              Explore detailed floor plans, get personalized recommendations, and book your site visit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" onClick={() => window.location.href = "/contact"}>
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Floor Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plans;