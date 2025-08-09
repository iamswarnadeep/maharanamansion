import { Button } from "@/components/ui/button";
import { Crown, Home, Sparkles, TreePine, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Royal Heritage",
      description: "Inspired by Rajasthani palace architecture with modern luxury amenities"
    },
    {
      icon: Home,
      title: "Premium Homes",
      description: "Spacious 2 & 3 BHK apartments designed for comfortable royal living"
    },
    {
      icon: TreePine,
      title: "Lush Greenery",
      description: "Surrounded by landscaped gardens and open green spaces"
    },
    {
      icon: Shield,
      title: "Gated Security",
      description: "24/7 security with modern surveillance and controlled access"
    },
    {
      icon: Sparkles,
      title: "Smart Living",
      description: "Modern amenities including clubhouse, gym, and recreational facilities"
    },
    {
      icon: Users,
      title: "Community",
      description: "Designed for families seeking quality lifestyle and community"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">About The Project</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold royal-heading mb-6">
            Where Heritage Meets
            <span className="block text-gold">Modern Luxury</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Maharana Mansion brings you the legendary concept of affordable luxury housing. 
            Experience the perfect blend of royal heritage and contemporary living in this 
            meticulously planned residential project.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">1.25</div>
            <div className="text-muted-foreground text-lg">Acres</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">144</div>
            <div className="text-muted-foreground text-lg">Apartments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">004</div>
            <div className="text-muted-foreground text-lg">Towers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">209</div>
            <div className="text-muted-foreground text-lg">Parking</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 luxury-hover"
            >
              <div className="bg-gradient-royal p-4 rounded-xl w-fit mb-6">
                <feature.icon className="w-8 h-8 text-royal-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-luxury text-center">
          <h3 className="text-3xl lg:text-4xl font-bold royal-heading mb-6">
            Experience Royal Living Today
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Renowned architects have crafted this project with immense attention to detail, 
            focusing on the unique requirements of modern families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="royal" size="lg">
              Schedule a Visit
            </Button>
            <Button variant="premium" size="lg">
              Download Floor Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;