import { Button } from "@/components/ui/button";
import { Home, Crown, Ruler, Users } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      type: "1 BHK",
      area: "404+ sq.ft.",
      price: "₹14.50 Lacs",
      originalPrice: "₹16 Lakhs",
      features: [
        "Large living and dining area",
        "One spacious bedroom",
        "One bathroom",
        "Beautiful kitchen",
        "One balcony with scenic views",
      ],
      icon: Home,
      gradient: "from-primary/10 to-primary/5",
      bgColor: "bg-primary",
      textColor: "text-primary"
    },
    {
      type: "2 BHK", 
      area: "635+ sq.ft.",
      price: "₹19.50 Lacs",
      originalPrice: "₹22 Lakhs",
      features: [
        "Large living and dining area",
        "Two spacious bedrooms",
        "Two bathrooms (one attached)",
        "Beautiful kitchen",
        "One balcony with scenic views",
      ],
      icon: Crown,
      gradient: "from-secondary/10 to-secondary/5", 
      bgColor: "bg-secondary",
      textColor: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Ruler className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Special Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
            Maharana Mansion Pricing
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto body-font">
            Experience royal living at unbeatable prices. Best offers on our Phase I - Rajputana inspired homes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${plan.gradient} rounded-3xl p-8 shadow-luxury hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`${plan.bgColor} p-3 rounded-xl`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${plan.textColor} font-sans`}>{plan.type}</h3>
                      <span className="text-muted-foreground">{plan.area}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold body-font">{plan.price}</span>
                    {/* <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span> */}
                  </div>
                  {/* <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Launch Offer
                  </span> */}
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4 body-font">Accomodation:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full mt-1 ${plan.bgColor}`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-muted-foreground body-font">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="default" size="lg">
                    View Floor Plan
                  </Button>
                  <Button className="bg-transparent text-primary border-2 border-primary" size="lg" onClick={() => (window.location.href = "#contact")}>
                    Book Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 bg-card border border-black border-solid rounded-xl p-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold">No Hidden Charges</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card border border-black border-solid rounded-xl p-4">
              <Home className="w-5 h-5 text-primary" />
              <span className="font-semibold">Ready to Move</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card border border-black border-solid rounded-xl p-4">
              <Crown className="w-5 h-5 text-primary" />
              <span className="font-semibold">Heritage Architecture</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            *Loan facility available upto 90%. T&C apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
