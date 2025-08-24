import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import mainlogo from "@/assets/maharana-logo.png";
import brochure from "@/assets/brochure.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Plans", href: "/plans" },
    { name: "Location", href: "/location" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-royal text-royal-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center px-0 sm:px-4">
          {/* LEFT (Phone + Email for desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <a href="tel:1800-309-5121">1800-309-5121</a>
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@maharanamansion.com">info@maharanamansion.com</a>
            </span>
          </div>

          {/* Mobile LEFT (Phone only) */}
          <div className="flex md:hidden items-center text-[12px]">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <a href="tel:1800-309-5121">1800-309-5121</a>
            </span>
          </div>

          {/* Mobile RIGHT (Email only) */}
          <div className="flex md:hidden items-center text-[12px]">
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <a href="mailto:info@maharanamansion.com">info@maharanamansion.com</a>
            </span>
          </div>

          {/* RERA (desktop only) */}
          <div className="gold-accent hidden md:block">
            RERA: RAJ/P/2020/1376
          </div>
        </div>
      </div>


      {/* Main Header */}
      <header className="bg-card/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={mainlogo} alt="Maharana Mansion" className="h-[80px] w-[140px]" />
              <div>
                {/* <h1 className="text-xl font-bold royal-heading heading-font">Maharana</h1>
              <span className="text-sm gold-accent body-font">MANSION</span> */}
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
              <Button className="bg-transparent text-primary border-2 border-primary" size="sm" onClick={() => window.open(brochure, "_blank")}>
                Download Brochure
              </Button>
              <Button variant="default" size="sm" onClick={() => window.location.href = "#contact"}>
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
                <Button variant="outline" size="sm" onClick={() => window.open(brochure, "_blank")}>
                  Download Brochure
                </Button>
                <Button variant="royal" size="sm" onClick={() => window.location.href = "#contact"}>
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