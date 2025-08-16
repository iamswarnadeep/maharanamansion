import { Crown, Dumbbell, Waves, TreePine, Car, Shield, Zap, Users, Home, Compass } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: TreePine,
      title: "Terrace Garden",
      description: "Beautiful rooftop gardens with scenic views"
    },
    {
      icon: Compass,
      title: "Jogging Track",
      description: "Dedicated track for morning and evening walks"
    },
    {
      icon: Shield,
      title: "Gated Complex",
      description: "Secure gated community with 24x7 surveillance"
    },
    {
      icon: Home,
      title: "Shopping Complex",
      description: "Convenient shopping facilities within the premises"
    },
    {
      icon: Users,
      title: "Play Area",
      description: "Safe and fun playground for children"
    },
    {
      icon: Compass,
      title: "Vastu Friendly",
      description: "Designed according to traditional Vastu principles"
    },
    {
      icon: Shield,
      title: "24x7 Security",
      description: "Round-the-clock security with trained personnel"
    },
    {
      icon: Zap,
      title: "Power Backup",
      description: "Uninterrupted power supply with backup generators"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Modern gymnasium with latest equipment"
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Refreshing pool area for relaxation and fitness"
    },
    {
      icon: Car,
      title: "Reserved Parking",
      description: "Dedicated parking spaces for all residents"
    },
    {
      icon: Users,
      title: "Community Hall",
      description: "Spacious hall for events and gatherings"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Luxury Amenities</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold royal-heading mb-6">
            Values of Smart Living in
            <span className="block text-gold">Maharana Mansion</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The legendary concept of affordable housing with stunning scenic beauty 
            all around the property. Experience premium amenities designed for your comfort.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
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
        <div className="bg-primary rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-royal-foreground mb-6">
            Smart Living Redefined
          </h3>
          <p className="text-xl text-royal-foreground/90 mb-8 max-w-2xl mx-auto">
            With every step in Maharana Mansion, you will be amazed by futuristic 
            innovative approaches that enhance your lifestyle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-royal-foreground">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-royal-foreground/80">Vastu Compliant</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">24/7</div>
              <div className="text-royal-foreground/80">Security & Power</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">80%</div>
              <div className="text-royal-foreground/80">Green Spaces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;