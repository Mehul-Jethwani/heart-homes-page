import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';

const stories = [
  {
    id: 1,
    pet: 'Luna',
    owner: 'The Johnson Family',
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
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read heartwarming stories from families who found their perfect companions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in">
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

        <div className="text-center">
          <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
