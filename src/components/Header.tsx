import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Amenities", href: "#amenities" },
    { name: "Plans", href: "#plans" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-royal text-royal-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +18001-206-206
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              info@maharanamansion.com
            </span>
          </div>
          <div className="gold-accent hidden md:block">
            RERA: RAJ/P/2020/1576
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Maharana Mansion" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold royal-heading heading-font">Maharana</h1>
              <span className="text-sm gold-accent body-font">MANSION</span>
            </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium body-font"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Download Brochure
              </Button>
              <Button variant="royal" size="sm">
                <Crown className="w-4 h-4" />
                Enquire Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
              isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
            )}
          >
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" size="sm">
                  Download Brochure
                </Button>
                <Button variant="royal" size="sm">
                  <Crown className="w-4 h-4" />
                  Enquire Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;