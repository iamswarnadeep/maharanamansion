import { Link, useNavigate } from "react-router-dom";
import { Crown, Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import mainlogo from "@/assets/maharana-logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Plans", href: "/plans" },
    { name: "Location", href: "/location" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "1 BHK Apartments",
    "2 BHK Apartments", 
    "Site Visit Booking",
    "Home Loan Assistance",
    "Interior Design",
    "Property Management"
  ];

  return (
    <footer className="bg-royal text-royal-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={mainlogo} alt="Maharana Mansion" className="h-[120px] w-full bg-white rounded-sm" />
              {/* <div>
                <h1 className="text-xl font-bold">Maharana</h1>
                <span className="text-sm text-gold">MANSION</span>
              </div> */}
            </div>
            <p className="text-royal-foreground/80 mb-6 leading-relaxed">
              Experience the legendary concept of affordable luxury housing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-royal-foreground/10 p-3 rounded-lg hover:bg-gold hover:text-royal transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-royal-foreground/10 p-3 rounded-lg hover:bg-gold hover:text-royal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/maharana_mansion" target="_blank" className="bg-royal-foreground/10 p-3 rounded-lg hover:bg-gold hover:text-royal transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-royal-foreground/10 p-3 rounded-lg hover:bg-gold hover:text-royal transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-royal-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-royal-foreground/80 cursor-pointer" onClick={() => navigate("/contact")}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-1" />
                <div onClick={() => window.location.href = "tel:1800-309-5121"} style={{ cursor: 'pointer' }}>
                  {/* <p className="text-royal-foreground/80">+91-98292-296296</p> */}
                  <p className="text-royal-foreground/80">1800-309-5121</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-1" />
                <div onClick={() => window.location.href = "mailto:info@maharanamansion.com"} style={{ cursor: 'pointer' }}>
                  <p className="text-royal-foreground/80">info@maharanamansion.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="text-royal-foreground/80">Neemrana Ghiloth Industrial Road,</p>
                  <p className="text-royal-foreground/80">Neemarana, NCR 301705</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-royal-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-royal-foreground/80 text-sm">
              © 2025 Maharana Mansion. All rights reserved. | RERA: RAJ/P/2020/1376
            </div>
            <div className="flex items-center gap-1 text-sm text-royal-foreground/80">
              <span>Developed by</span>
              <Heart className="w-4 h-4 text-gold mx-1" />
              <span className="text-gold"><a href="https://swarnadeep.in" target="_blank">Swarnadeep</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
