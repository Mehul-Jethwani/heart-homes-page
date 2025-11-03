import { Button } from '@/components/ui/button';
import { Heart, Home, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import familyImage from '@/assets/family-adoption.jpg';

const AdoptSection = () => {
  return (
    <section id="adopt" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Adopt? 🏡
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We've made adopting super simple! Our process helps you find the perfect furry companion
              who'll fit right into your family and fill your home with love.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Match Your Lifestyle</h3>
                  <p className="text-muted-foreground">Find pets that fit perfectly with your family and routine</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Safe & Simple Process</h3>
                  <p className="text-muted-foreground">Our streamlined adoption ensures the best match for everyone</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ongoing Support</h3>
                  <p className="text-muted-foreground">We're here to help even after you take your pet home</p>
                </div>
              </div>
            </div>

            <Link to="/adopt">
              <Button size="lg" className="hover:scale-105 transition-all duration-300">
                Let's Get You a Furry Friend!
              </Button>
            </Link>
          </div>

          <div className="animate-scale-in">
            <img 
              src={familyImage} 
              alt="Happy family with adopted pet" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptSection;
