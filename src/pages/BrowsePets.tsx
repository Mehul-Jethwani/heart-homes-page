import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Pet {
  id: string;
  name: string;
  type: string;
  age: string;
  location: string;
  status: string;
  image_url: string;
}

const BrowsePets = () => {
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat' | 'rabbit'>('all');
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const { data, error } = await supabase
        .from('pets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPets(data || []);
    } catch (error: any) {
      toast({
        title: "Failed to load pets",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredPets = pets.filter((pet) => {
    if (filter === 'all') return true;
    return pet.type.toLowerCase() === filter;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Your New Best Friend! 🐕
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All these adorable paws are waiting to meet you — find your perfect match!
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className="hover:scale-105 transition-transform"
            >
              All Pets
            </Button>
            <Button
              variant={filter === 'dog' ? 'default' : 'outline'}
              onClick={() => setFilter('dog')}
              className="hover:scale-105 transition-transform"
            >
              Dogs
            </Button>
            <Button
              variant={filter === 'cat' ? 'default' : 'outline'}
              onClick={() => setFilter('cat')}
              className="hover:scale-105 transition-transform"
            >
              Cats
            </Button>
            <Button
              variant={filter === 'rabbit' ? 'default' : 'outline'}
              onClick={() => setFilter('rabbit')}
              className="hover:scale-105 transition-transform"
            >
              Rabbits
            </Button>
          </div>

          {/* Pet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPets.map((pet) => (
              <Card
                key={pet.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={pet.image_url}
                    alt={`${pet.name} - ${pet.type} available for adoption`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <Badge
                    variant={pet.status === 'Available' ? 'default' : 'secondary'}
                    className="absolute top-4 right-4"
                  >
                    {pet.status}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{pet.name}</h3>
                    <Badge variant="outline" className="ml-2">
                      {pet.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{pet.age}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{pet.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full hover:scale-105 transition-all duration-300">
                    {pet.status === 'Available' ? 'I Want This One!' : 'Learn More'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPets.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No pets found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default BrowsePets;
