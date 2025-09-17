import { Button } from "@/components/ui/button";
import { Crown, Home, Sparkles, TreePine, Shield, Users } from "lucide-react";
import brochure from "@/assets/portfolio.pdf";

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Royal Heritage",
      description: "Inspired by Rajputana palatial architecture, offering a regal lifestyle enhanced with modern amenities"
    },
    {
      icon: Home,
      title: "Premium Executive Floors",
      description: "Exclusively designed 1 & 2 BHK executive floors crafted for comfort, elegance, and everyday royal living"
    },
    {
      icon: TreePine,
      title: "Green Retreat & Community",
      description: "Landscaped open spaces near the Aravallis and Neemrana Fort, with parks and a durbar hall — crafted for all ages to foster togetherness"
    },
    {
      icon: Shield,
      title: "Smart & Secure Living",
      description: "24/7 gated security with advanced surveillance, along with modern community features including community hall and recreation facilities"
    // },
    // {
    //   icon: Sparkles,
    //   title: "Smart Living",
    //   description: "Modern amenities including clubhouse, gym, and recreational facilities"
    // },
    // {
    //   icon: Users,
    //   title: "Community",
    //   description: "Designed for families seeking quality lifestyle and community"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold body-font">About The Project</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold royal-heading heading-font mb-6">
            Where Heritage Meets
            <span className="block text-gold"> Modern Living</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed body-font">
            Maharana Mansion brings you the timeless charm of royal heritage combined with the comfort of contemporary design. Experience affordable, thoughtfully planned homes that blend tradition with modern conveniences in a vibrant community setting.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 heading-font">1.25</div>
            <div className="text-muted-foreground text-lg body-font">Acres</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 heading-font">144</div>
            <div className="text-muted-foreground text-lg body-font">Apartments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 heading-font">4</div>
            <div className="text-muted-foreground text-lg body-font">Commercial Units</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 heading-font">209</div>
            <div className="text-muted-foreground text-lg body-font">Parking</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 luxury-hover"
            >
              <div className="bg-primary p-4 rounded-xl w-fit mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 heading-font">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed body-font">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-luxury text-center">
          <h3 className="text-3xl lg:text-4xl font-bold royal-heading heading-font mb-6">
            Experience Royal Living Today
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto body-font">
            Renowned architects have crafted this project with immense attention to detail, 
            focusing on the unique requirements of modern families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" onClick={() => window.location.href = "#contact"}>
              Schedule a Visit
            </Button>
            <Button className="bg-transparent text-primary border-2 border-primary" size="lg" 
              onClick={() => window.open(brochure, "_blank")}
              >
              Download Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
