import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Quote, Heart } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const stories = [
  {
    id: 1,
    pet: 'Luna',
    owner: 'Priya Sharma',
    story: 'Luna found her forever home with us! She brings so much joy and love to our family every single day.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    pet: 'Rocky',
    owner: 'Sarah M.',
    story: 'Rocky was the perfect companion I was looking for. PawConnect made the adoption process so easy!',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    pet: 'Mittens',
    owner: 'The Chen Family',
    story: 'Mittens has become such an important part of our family. We can\'t imagine life without her now!',
    image: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0e3?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    pet: 'Buddy',
    owner: 'Rahul & Anita',
    story: 'Buddy is the most loyal and loving dog we could have asked for. He completes our home.',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    pet: 'Whiskers',
    owner: 'Emily Johnson',
    story: 'Whiskers is such a gentle soul. Adopting her was the best decision I ever made!',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    pet: 'Max',
    owner: 'The Patel Family',
    story: 'Max brings energy and happiness to our home. Our kids absolutely adore him!',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop',
  },
];

const featuredStory = {
  pet: 'Coco',
  owner: 'Meera & Arjun',
  image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&h=600&fit=crop',
  fullStory: 'Coco was found abandoned on the streets, scared and alone. When we first met her at the PawConnect shelter, she was shy and hesitant. But with patience and love, she slowly opened up to us. Now, Coco is the most playful and affectionate cat we could ever ask for. She loves lounging in the sun and playing with her favorite toy mouse. Adopting Coco has taught us so much about compassion and the resilience of animals.',
  quote: '"Coco didn\'t just find a home with us — we found our hearts through her." - Meera',
};

const SuccessStories = () => {
  const [formData, setFormData] = useState({
    name: '',
    petName: '',
    story: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for sharing your story! ❤️",
      description: "Your story will inspire others to adopt.",
    });
    setFormData({ name: '', petName: '', story: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Heartwarming Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Every adoption is a new beginning. Meet our happy families.
          </p>
        </div>
      </section>

      {/* Story Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in relative">
                <Heart className="absolute top-4 right-4 w-6 h-6 text-primary z-10 fill-primary" />
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.pet} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4 italic">"{story.story}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{story.pet}</p>
                    <p className="text-sm text-muted-foreground">Adopted by {story.owner}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Featured Story</h2>
          <div className="max-w-5xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto">
                <img 
                  src={featuredStory.image} 
                  alt={featuredStory.pet} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-foreground mb-2">{featuredStory.pet}</h3>
                <p className="text-lg text-muted-foreground mb-6">Adopted by {featuredStory.owner}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredStory.fullStory}</p>
                <div className="bg-secondary/50 p-4 rounded-lg mb-6">
                  <Quote className="w-6 h-6 text-primary mb-2" />
                  <p className="text-foreground italic">{featuredStory.quote}</p>
                </div>
                <Button>Read More Stories</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Share Your Story</h2>
            <p className="text-lg text-muted-foreground">
              Have you adopted a pet through PawConnect? We'd love to hear your story!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Pet Name</label>
                <Input
                  type="text"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  required
                  placeholder="Enter your pet's name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Adoption Story
                </label>
                <Textarea
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  required
                  placeholder="Tell us about your adoption journey..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Submit Story
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
