import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Crown, Phone, Mail, MapPin, Clock, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you soon.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'var(--gradient-primary)' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Schedule Your
            <span className="block text-gold">Royal Visit</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience affordable but premium housing blended with simplicity. 
            Book your site visit today and witness the royal lifestyle awaiting you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Sticky on desktop */}
          <div className="lg:sticky lg:top-24 lg:self-start bg-card rounded-3xl p-8 shadow-luxury">
            <h3 className="text-2xl font-bold mb-6 royal-heading">Send us an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button type="submit" variant="royal" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Submit Enquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phone Numbers</h4>
                    {/* <p className="text-muted-foreground mb-1">+91 98292 296-296</p> */}
                    <p className="text-muted-foreground">+1800-129-6296</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email Address</h4>
                    <p className="text-muted-foreground">info@maharanamansion.com</p>
                    <p className="text-muted-foreground">sales@maharanamansion.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Location</h4>
                    <p className="text-muted-foreground">Near Railway Station</p>
                    <p className="text-muted-foreground">Industrial Area, Neemrana</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Visit Hours</h4>
                    <p className="text-muted-foreground">Monday - Sunday</p>
                    <p className="text-muted-foreground">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="rounded-2xl p-8 text-center" style={{ background: 'var(--gradient-soft)' }}>
              <h4 className="text-2xl font-bold text-white mb-4">
                Download Resources
              </h4>
              <p className="text-white/90 mb-6">
                Get detailed information about floor plans, pricing, and payment options.
              </p>
              <div className="space-y-3">
                <Button variant="default" size="lg" className="w-full bg-white/30 border-white/10 text-white hover:bg-white hover:text-primary">
                  <Download className="w-5 h-5" />
                  Project Brochure
                </Button>
                <Button variant="outline" size="lg" className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                  <Download className="w-5 h-5" />
                  Floor Plans
                </Button>
              </div>
            </div>

            {/* Legal Info */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <h4 className="font-bold text-lg mb-4 royal-heading">Legal Information</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>RERA Number:</strong> RAJ/P/2020/1376</p>
                <p><strong>Developer:</strong> Genoatechinfratech Pvt. Ltd.</p>
                <p><strong>Project Status:</strong> 80% Construction Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;