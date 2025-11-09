import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Quote, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Session } from '@supabase/supabase-js';

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
];

interface Story {
  id: string;
  user_id: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
}

const featuredStory = {
  pet: 'Coco',
  owner: 'Meera & Arjun',
  image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&h=600&fit=crop',
  fullStory: 'Coco was found abandoned on the streets, scared and alone. When we first met her at the PawConnect shelter, she was shy and hesitant. But with patience and love, she slowly opened up to us. Now, Coco is the most playful and affectionate cat we could ever ask for. She loves lounging in the sun and playing with her favorite toy mouse. Adopting Coco has taught us so much about compassion and the resilience of animals.',
  quote: '"Coco didn\'t just find a home with us — we found our hearts through her." - Meera',
};

const SuccessStories = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const [dbStories, setDbStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchStories();
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDbStories(data || []);
    } catch (error: any) {
      console.error('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to share your story.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('stories')
        .insert([{
          user_id: session.user.id,
          title: formData.title,
          content: formData.content,
        }]);

      if (error) throw error;

      toast({
        title: "Thank you for sharing your story! ❤️",
        description: "Your story will inspire others to adopt.",
      });
      
      setFormData({ title: '', content: '' });
      fetchStories();
    } catch (error: any) {
      toast({
        title: "Failed to submit story",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Tales of Love & Joy 💕
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Real families, real happiness — see how adoption changed everything!
          </p>
        </div>
      </section>

      {/* Story Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Community Stories 💕</h2>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

              {dbStories.length > 0 && (
                <>
                  <h3 className="text-3xl font-bold text-center text-foreground mb-8 mt-16">
                    More Amazing Stories from Our Community
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dbStories.map((story) => (
                      <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                        <Heart className="absolute top-4 right-4 w-6 h-6 text-primary z-10 fill-primary" />
                        {story.image_url && (
                          <div className="aspect-square overflow-hidden">
                            <img 
                              src={story.image_url} 
                              alt={story.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold text-foreground mb-3">{story.title}</h4>
                          <Quote className="w-6 h-6 text-primary mb-2" />
                          <p className="text-muted-foreground italic">{story.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">One Special Story ✨</h2>
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
                <Button>More Heartwarming Stories</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Share Your Story! 📸</h2>
            <p className="text-lg text-muted-foreground">
              Did you adopt through us? We're dying to hear how it's going!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Story Title</label>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  placeholder="e.g., How Max Changed Our Lives"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Adoption Story
                </label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  placeholder="Tell us about your adoption journey..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full" disabled={!session}>
                {session ? 'Share the Love!' : 'Sign In to Share'}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default SuccessStories;
