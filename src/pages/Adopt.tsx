import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PetCard from '@/components/PetCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Search, FileText, Heart, Home } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import adoptHero from '@/assets/adopt-hero.jpg';
import petDog1 from '@/assets/pet-dog1.jpg';
import petCat1 from '@/assets/pet-cat1.jpg';
import petRabbit1 from '@/assets/pet-rabbit1.jpg';

const Adopt = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    petName: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Your adoption request has been submitted.",
    });
    setFormData({
      fullName: '',
      email: '',
      contactNumber: '',
      petName: '',
      reason: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const adoptionSteps = [
    {
      icon: Search,
      title: "Browse",
      description: "Find your perfect pet"
    },
    {
      icon: FileText,
      title: "Apply",
      description: "Fill in the adoption form"
    },
    {
      icon: Heart,
      title: "Meet",
      description: "Connect with the pet in person or virtually"
    },
    {
      icon: Home,
      title: "Adopt",
      description: "Welcome your new friend home"
    }
  ];

  const featuredPets = [
    { name: "Buddy", type: "Dog", age: "2 years", image: petDog1 },
    { name: "Luna", type: "Cat", age: "1 year", image: petCat1 },
    { name: "Coco", type: "Rabbit", age: "6 months", image: petRabbit1 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <img 
            src={adoptHero} 
            alt="Family adopting a pet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Adopt Your New Best Friend
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Bring home love, loyalty, and endless cuddles. Adoption saves lives.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/browse-pets')}
            className="hover:scale-105 transition-transform"
          >
            Browse Pets
          </Button>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
            How Adoption Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {adoptionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="bg-background rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Adoption Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Apply for Adoption
          </h2>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg animate-scale-in">
            <div className="space-y-6">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input 
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input 
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="petName">Pet Name</Label>
                <Input 
                  id="petName"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  placeholder="Which pet would you like to adopt?"
                />
              </div>

              <div>
                <Label htmlFor="reason">Why do you want to adopt?</Label>
                <Textarea 
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  rows={5}
                  placeholder="Tell us about yourself and why you'd be a great pet parent..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full hover:scale-105 transition-transform">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Featured Pets
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {featuredPets.map((pet, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <PetCard {...pet} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/browse-pets')}
              className="hover:scale-105 transition-transform"
            >
              View All Pets
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Adopt;
