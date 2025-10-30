import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import petDog1 from '@/assets/pet-dog1.jpg';
import petCat1 from '@/assets/pet-cat1.jpg';
import petDog2 from '@/assets/pet-dog2.jpg';
import petRabbit1 from '@/assets/pet-rabbit1.jpg';
import petCat2 from '@/assets/pet-cat2.jpg';
import petDog3 from '@/assets/pet-dog3.jpg';
import petDog4 from '@/assets/pet-dog4.jpg';
import petCat3 from '@/assets/pet-cat3.jpg';

interface Pet {
  id: number;
  name: string;
  type: string;
  location: string;
  status: 'Available' | 'Pending Adoption';
  image: string;
}

const pets: Pet[] = [
  {
    id: 1,
    name: 'Fein',
    type: 'Dog',
    location: 'Ghazipur',
    status: 'Available',
    image: petDog1,
  },
  {
    id: 2,
    name: 'Luna',
    type: 'Cat',
    location: 'Mumbai',
    status: 'Pending Adoption',
    image: petCat1,
  },
  {
    id: 3,
    name: 'Coco',
    type: 'Rabbit',
    location: 'Jaipur',
    status: 'Available',
    image: petRabbit1,
  },
  {
    id: 4,
    name: 'Charlie',
    type: 'Dog',
    location: 'Delhi',
    status: 'Available',
    image: petDog2,
  },
  {
    id: 5,
    name: 'Milo',
    type: 'Cat',
    location: 'Bangalore',
    status: 'Available',
    image: petCat2,
  },
  {
    id: 6,
    name: 'Rocky',
    type: 'Dog',
    location: 'Pune',
    status: 'Available',
    image: petDog3,
  },
  {
    id: 7,
    name: 'Buddy',
    type: 'Dog',
    location: 'Kolkata',
    status: 'Pending Adoption',
    image: petDog4,
  },
  {
    id: 8,
    name: 'Whiskers',
    type: 'Cat',
    location: 'Chennai',
    status: 'Available',
    image: petCat3,
  },
];

const BrowsePets = () => {
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat' | 'rabbit'>('all');

  const filteredPets = pets.filter((pet) => {
    if (filter === 'all') return true;
    return pet.type.toLowerCase() === filter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your New Best Friend
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our list of adorable pets waiting for a loving home
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
                    src={pet.image}
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
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{pet.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full hover:scale-105 transition-transform">
                    {pet.status === 'Available' ? 'Adopt Me' : 'View Profile'}
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

      <Footer />
    </div>
  );
};

export default BrowsePets;
