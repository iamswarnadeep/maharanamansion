import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Plane, Train, Building, Clock, School, Hospital, BusFront } from "lucide-react";
import aravaliMountains from "@/assets/aravali-mountains.jpg";

const Location = () => {
  const connectivity = [
    {
      icon: Car,
      title: "By Road",
      distance: " IGI Airport: 109km",
      time: "3 hours"
    },
    {
      icon: Train,
      title: "By Train",
      distance: "Nearby Junction: 40 km",
      time: "55 mins"
    },
    {
      icon: Plane,
      title: "By Air",
      distance: "Upcoming airport: 40 km",
      time: "55 mins"
    },
    {
      icon: BusFront,
      title: "By Metro",
      distance: "Upcoming metro: 2.2 km",
      time: "5 mins"
    }
  ];

  const landmarks = [
    {
      name: "Neemrana Fort Palace",
      distance: "1 km",
      type: "Heritage Hotel",
      description: "Historic 15th-century fort palace, now a luxury heritage hotel"
    },
    {
      name: "EPIP Industrial Hub",
      distance: "1.5 km",
      type: "Industrial Hub (North India’s No.1)",
      description: "A Large Industrial Corridor in Delhi NCR Region."
    },
    {
      name: "Queen's Bawdi",
      distance: "200 m",
      type: "Historical Monument",
      description: "Ancient stepwell showcasing Indo-Islamic architecture"
    },
    {
      name: "Sariska Wildlife Sanctuary",
      distance: "90 km",
      type: "Tourist Spot",
      description: "Beautiful sanctuary with boating and recreational activities"
    }
  ];

  const amenities = [
    {
      icon: School,
      title: "Education",
      items: ["Renowned Schools", "Aeronautical Engineering College", "NIIT", "Various Academies"]
    },
    {
      icon: Hospital,
      title: "Healthcare",
      items: ["Neemrana Hospital", "Primary Health Center", "Specialty Clinics nearby", "Ayurvedic & Wellness Centers"
      ]
    },
    {
      icon: Building,
      title: "Commercial",
      items: ["Neemrana Market", "Modern Shopping Complexes", "Banks and ATMs", "Daily Convenience Stores"
      ]
    },
    {
      icon: Clock,
      title: "Entertainment",
      items: ["Neemrana Fort Palace events", "Adventure Sports & Zipline", "Cultural Festivals & Programs", "Resorts & Weekend Getaways"
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
          style={{ backgroundImage: `url(${aravaliMountains})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="font-semibold">Prime Location</span>
          </div>

          <div className="hero-text text-4xl md:text-7xl font-dala text-white mb-2 leading-tight">
            Neemrana, Rajasthan
          </div>

          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed body-font">
            Strategically located in the foothills of Neemrana Fort Palace and the Aravali mountain range with seamless NCR connectivity
          </p>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-8">
              30 acres of planned Heritage Land
            </h2>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 shadow-luxury border border-primary/20 mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-primary heading-font">Strategic Acquisition</h3>
              </div>
              <p className="text-2xl font-bold text-foreground heading-font leading-relaxed">
                Gennext has acquired <span className="text-primary">30 acres of prime heritage land </span>
                <span className="text-secondary"> and divided into three phase of conceptually designed named Gennext Heritage City</span>
              </p>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed body-font">
              This exceptional location combines the serenity of mountain foothills with the convenience of
              urban connectivity, making it the perfect setting for our Heritage City development.
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Explore the Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto body-font">
              Interactive map showing our prime location and surrounding landmarks
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-luxury">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28183.52836939547!2d76.37663635798597!3d27.995700025759323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912ab23694fb62d%3A0x4dd08a8a1b9e5db0!2sMaharana%20Mansion!5e0!3m2!1sen!2sin!4v1756071051258!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Neemrana Location Map"
              ></iframe>
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground body-font">
                <strong>Address:</strong> Neemrana, Alwar District, NCR 301705
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Excellent Connectivity
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto body-font">
              Well-connected to major cities and transportation hubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {connectivity.map((connect, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-luxury hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-primary p-4 rounded-xl w-fit mx-auto mb-6">
                  <connect.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold heading-font mb-4">{connect.title}</h3>
                <div className="text-xl font-semibold text-primary mb-2">{connect.distance}</div>
                <div className="text-lg text-secondary font-semibold mb-4">{connect.time}</div>
                {/* <p className="text-muted-foreground body-font">{connect.details}</p> */}
              </div>
            ))}
          </div>

          {/* Distance Chart */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 shadow-luxury">
            <h3 className="text-3xl font-bold text-center heading-font mb-8">Distance from Major Cities</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2 heading-font">113 km</div>
                <div className="text-muted-foreground body-font">Delhi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2 heading-font">90 km</div>
                <div className="text-muted-foreground body-font">Gurgaon</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2 heading-font">148 km</div>
                <div className="text-muted-foreground body-font">Jaipur</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2 heading-font">35 km</div>
                <div className="text-muted-foreground body-font">Rewari</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Nearby Landmarks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto body-font">
              Surrounded by heritage sites, industrial hubs, and tourist attractions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {landmarks.map((landmark, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-luxury hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold heading-font">{landmark.name}</h3>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {landmark.distance}
                  </div>
                </div>
                <div className="text-secondary font-semibold mb-3">{landmark.type}</div>
                <p className="text-muted-foreground body-font">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Amenities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Local Amenities under 1km
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto body-font">
              Complete ecosystem of essential services and facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-luxury text-center"
              >
                <div className="bg-primary p-4 rounded-xl w-fit mx-auto mb-6">
                  <amenity.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold heading-font mb-4">{amenity.title}</h3>
                <ul className="text-left space-y-2">
                  {amenity.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="bg-primary p-0.5 rounded-full mt-2">
                        <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground text-sm body-font">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
                Short Walk Away
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold heading-font mb-2">Heritage Tourism Hub</h3>
                    <p className="text-muted-foreground body-font">
                      Located near famous Neemrana Fort Palace, ensuring constant tourist influx and cultural significance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Building className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold heading-font mb-2">Industrial Corridor </h3>
                    <p className="text-muted-foreground body-font">
                      Proximity to Korean Industrial Zone ensures strong residential demand from professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold p-3 rounded-lg">
                    <Car className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold heading-font mb-2">Connectivity Advantage</h3>
                    <p className="text-muted-foreground body-font">
                      Strategically Part of Delhi Ncr's Growth Corridor With Undamaged Highway and Express Way Connectivity
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 shadow-luxury">
                <h3 className="text-2xl font-bold heading-font mb-6 text-center">Location Advantages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Delhi NCR Region</span>
                    <span className="text-primary">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Mountain Foothills</span>
                    <span className="text-primary">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Heritage Location</span>
                    <span className="text-primary">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Industrial Proximity</span>
                    <span className="text-primary">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Excellent AQI</span>
                    <span className="text-primary">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Investment Potential</span>
                    <span className="text-primary">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-4xl lg:text-5xl font-bold royal-heading heading-font mb-6">
              Visit Our Location
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-5xl mx-auto body-font">
              Discover the perfect balance of beauty and opportunity at our Neemrana location — where scenic charm meets world-class infrastructure, thriving industrial growth, and seamless highway connectivity. Positioned within the Delhi NCR growth corridor, Neemrana offers not only a serene living environment but also unmatched access to business hubs, educational institutions, and future-ready development, making it an ideal destination for both lifestyle and investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" onClick={() => window.location.href = "/contact"}>
                Schedule Site Visit
              </Button>
              <Button className="bg-transparent text-primary border-2 border-primary" size="lg" onClick={() => window.open('https://maps.app.goo.gl/Yuj4Sfh9Zcd7XRjY9', '_blank')}>
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;