import { PawPrint, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">PawConnect</span>
            </div>
            <p className="text-muted-foreground">
              Connecting paws with loving homes since 2020
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#browse-pets" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Pets
                </a>
              </li>
              <li>
                <a href="#adopt" className="text-muted-foreground hover:text-primary transition-colors">
                  Adoption Process
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#pet-care" className="text-muted-foreground hover:text-primary transition-colors">
                  Pet Care
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="#get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                  Foster
                </a>
              </li>
              <li>
                <a href="#donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@pawconnect.org" className="hover:text-primary transition-colors">
                  contact@pawconnect.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Pet Street, Animal City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Copyright © PawConnect 2025 – Made with ❤️ for pets
          </p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
