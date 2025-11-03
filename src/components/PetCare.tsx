import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Stethoscope, Scissors, BookOpen } from 'lucide-react';
import vetImage from '@/assets/vet-care.jpg';

const PetCare = () => {
  return (
    <section id="pet-care" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-scale-in">
            <img 
              src={vetImage} 
              alt="Veterinarian caring for a pet" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="order-1 md:order-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Pet Care
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We provide comprehensive care services to ensure your pets stay healthy and happy.
              From routine checkups to grooming, we've got everything your furry friend needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Veterinary Consultations</h3>
                  <p className="text-muted-foreground">Expert medical care from certified veterinarians</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Scissors className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Professional Grooming</h3>
                  <p className="text-muted-foreground">Keep your pets looking and feeling their best</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Care Tips & Resources</h3>
                  <p className="text-muted-foreground">Access expert advice on pet nutrition and training</p>
                </div>
              </div>
            </div>

            <Link to="/pet-care">
              <Button size="lg" className="hover:scale-105 transition-transform">
                Learn More About Pet Care
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCare;
