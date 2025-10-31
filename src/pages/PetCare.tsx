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
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={vetCareImage} 
            alt="Pet care" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Caring for Your Furry Friends
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Expert tips and trusted resources to keep your pets happy and healthy
          </p>
        </div>
      </section>

      {/* Vet Care Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Essential Vet Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Regular Check-ups</h3>
              <p className="text-muted-foreground text-sm">
                Annual vet visits help catch health issues early and keep your pet in top shape.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Vaccinations & Parasite Care</h3>
              <p className="text-muted-foreground text-sm">
                Stay on schedule with vaccines and preventive treatments to protect your pet.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Balanced Diet</h3>
              <p className="text-muted-foreground text-sm">
                Feed high-quality food in the right amounts for your pet's age and activity level.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Exercise & Play</h3>
              <p className="text-muted-foreground text-sm">
                Daily movement and mental stimulation are key to your pet's overall wellbeing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Grooming & Hygiene Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop" 
                alt="Pet grooming" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Grooming & Hygiene
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Regular grooming is essential for your pet's health and comfort. Brushing removes loose fur, prevents matting, and distributes natural oils that keep their coat shiny and skin healthy.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Bathing helps remove dirt and allergens, while nail trimming prevents painful overgrowth. Professional groomers can also spot early signs of skin issues, parasites, or other health concerns.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Regular grooming sessions also strengthen the bond between you and your pet, making it a positive experience for both of you.
              </p>
              <Button size="lg" asChild>
                <a href="/get-involved">Book a Groomer</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Care & Consultation */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-8">Emergency Care & Consultation</h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Know the warning signs that require immediate veterinary attention
            </p>
            
            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Emergency Warning Signs:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Difficulty breathing or rapid breathing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Refusal to eat or drink for 24+ hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Persistent vomiting or diarrhea</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Seizures or loss of consciousness</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Severe injury or bleeding</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Signs of severe pain or distress</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Inability to walk or stand</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Swollen or bloated abdomen</p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button size="lg" asChild>
                <a href="/get-involved">Consult a Vet Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Wellness Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Pet Wellness Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400&h=300&fit=crop" 
                  alt="Dog food" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">5 Foods That Boost Your Dog's Energy</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Discover the best natural foods to keep your dog active, healthy, and full of life throughout the day.
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop" 
                  alt="Calm cat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">How to Calm a Stressed Cat</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Learn effective techniques to help your anxious cat feel safe, secure, and relaxed in any environment.
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=300&fit=crop" 
                  alt="Dog drinking water" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">The Importance of Hydration in Summer</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Keep your pets cool and hydrated during hot weather with these essential tips and tricks.
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop" 
                  alt="Pet training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Basic Training Tips for New Pet Owners</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Start your pet parenting journey right with these foundational training techniques and best practices.
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PetCare;
