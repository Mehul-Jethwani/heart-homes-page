import { Button } from '@/components/ui/button';
import { Heart, Home, Users } from 'lucide-react';
import familyImage from '@/assets/family-adoption.jpg';

const AdoptSection = () => {
  return (
    <section id="adopt" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Adopt a Friend
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Finding your perfect companion has never been easier. Our simple adoption process
              ensures that every pet finds a loving, caring home where they'll be cherished forever.
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

            <Button size="lg" className="hover:scale-105 transition-transform">
              Start Adoption Process
            </Button>
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
