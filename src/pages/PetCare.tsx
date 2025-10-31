import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Stethoscope, Scissors, BookOpen } from 'lucide-react';
import vetCareImage from '@/assets/vet-care.jpg';

const PetCare = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Pet Care & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Everything you need to keep your furry friend healthy and happy
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Stethoscope className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Veterinary Care</h3>
              <p className="text-muted-foreground mb-6">
                Connect with trusted veterinarians for regular checkups and emergency care
              </p>
              <Button>Find a Vet</Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Scissors className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Grooming Services</h3>
              <p className="text-muted-foreground mb-6">
                Professional grooming services to keep your pet looking their best
              </p>
              <Button>Book Grooming</Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Care Guides</h3>
              <p className="text-muted-foreground mb-6">
                Expert tips and guides for nutrition, training, and wellness
              </p>
              <Button>Browse Guides</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Comprehensive Pet Healthcare
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At PawConnect, we believe every pet deserves quality healthcare. Our network of veterinary professionals provides comprehensive care including vaccinations, wellness checkups, dental care, and emergency services.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We also offer educational resources to help you understand your pet's needs better and provide them with the best possible care at home.
              </p>
              <Button size="lg">Schedule Consultation</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={vetCareImage} 
                alt="Veterinary care" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Essential Care Tips</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Nutrition & Diet</h3>
                  <p className="text-muted-foreground">
                    Provide balanced, age-appropriate food. Consult your vet about portion sizes and dietary needs specific to your pet's breed and health condition.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Regular Exercise</h3>
                  <p className="text-muted-foreground">
                    Daily exercise is crucial for physical and mental health. Dogs need walks and playtime, while cats benefit from interactive toys and climbing structures.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Preventive Care</h3>
                  <p className="text-muted-foreground">
                    Regular vet checkups, vaccinations, and parasite prevention are essential. Schedule annual wellness exams and stay up-to-date with all recommended treatments.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Mental Stimulation</h3>
                  <p className="text-muted-foreground">
                    Keep your pet's mind active with training, puzzle toys, and new experiences. Mental stimulation prevents boredom and behavioral issues.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PetCare;
