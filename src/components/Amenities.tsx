import { Crown, Home, Plane, Landmark, ShoppingBasket, Wind, Waves, HeartPulse } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Home,
      title: "Heritage Attractions",
      description: "Experience timeless charm with Neemrana Fort Palace and the 17th-century Queen’s Baori (Stepwell) just minutes away, offering a blend of history, culture, and grandeur right at your doorstep"
    },
    {
      icon: Plane,
      title: "Seamless Connectivity",
      description: "Stay connected with the upcoming airport and excellent road access, while being just 3 km from Japanese & Korean Industrial Zones — making travel and global business opportunities easily accessible"
    },
    {
      icon: Landmark,
      title: "Economic & Educational Hub",
      description: "Located amidst major industries, MNCs, and universities, with aeronautical and research centers nearby — creating a perfect balance of career, learning, and innovation close to home"
    },
    {
      icon: ShoppingBasket,
      title: "Everyday Essentials",
      description: "Enjoy unmatched convenience with banks, ATMs, local markets, healthcare, and reputed schools just minutes away — everything you need for daily life within easy reach"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-muted" data-aos="fade-right">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Easy Commute</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold royal-heading mb-6">
            Location Advantages & Attractions <span className="block text-gold">of Maharana Mansion Neemrana</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Maharana Mansion combines modern living with heritage charm — offering unmatched convenience, cultural richness, and investment potential in Neemrana
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-16" data-aos="fade-right">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 border border-border hover:border-gold/30"
            >
              <div className="bg-gradient-gold p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <amenity.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="bg-primary rounded-3xl p-8 lg:p-12 text-center" data-aos="fade-left">
          <h3 className="text-3xl lg:text-4xl font-bold text-royal-foreground mb-6">
            Elevating everyday living with the gift of nature
          </h3>
          <p className="text-xl text-royal-foreground/90 mb-8 max-w-4xl mx-auto">
            Surrounded by fresh, unpolluted air and abundant pure ground water, Maharana Mansion offers residents a healthier, more balanced lifestyle — where modern comfort meets natural well-being, ensuring harmony, vitality, and peace every day
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-royal-foreground">
            <div className="flex flex-col items-center">
              {/* <div className="text-4xl font-bold text-gold mb-2">100%</div> */}
              <Wind className="w-10 h-10 text-gold" />
              <div className="text-royal-foreground/80">Excellent Air <br/>Quality</div>
            </div>
            <div className="flex flex-col items-center">
              {/* <div className="text-4xl font-bold text-gold mb-2">24/7</div> */}
              <Waves className="w-10 h-10 text-gold" />
              <div className="text-royal-foreground/80">Pure & Refreshing <br/> Ground Water</div>
            </div>
            <div className="flex flex-col items-center">
              {/* <div className="text-4xl font-bold text-gold mb-2">80%</div> */}
              <HeartPulse className="w-10 h-10 text-gold" />
              <div className="text-royal-foreground/80">A Healthier Lifestyle <br/>Narcissist You</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;