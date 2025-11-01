import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary/40 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Let's Connect! 🐾
            </h2>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you — drop by or give us a call anytime!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm">
                Adani University<br />Ahmedabad
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:+917984749284" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                +91 7984749284
              </a>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Mail className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a href="mailto:contact@pawconnect.org" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                contact@pawconnect.org
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
