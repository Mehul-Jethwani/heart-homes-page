import { Link } from 'react-router-dom';
import PetCard from './PetCard';
import { Button } from '@/components/ui/button';
import petDog1 from '@/assets/pet-dog1.jpg';
import petCat1 from '@/assets/pet-cat1.jpg';
import petDog2 from '@/assets/pet-dog2.jpg';

const pets = [
  {
    id: 1,
    name: 'Max',
    type: 'Dog',
    age: '2 years old',
    image: petDog1,
  },
  {
    id: 2,
    name: 'Luna',
    type: 'Cat',
    age: '1 year old',
    image: petCat1,
  },
  {
    id: 3,
    name: 'Charlie',
    type: 'Dog',
    age: '3 years old',
    image: petDog2,
  },
];

const BrowsePets = () => {
  return (
    <section id="browse-pets" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Lovely Pets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our adorable pets waiting for their forever homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/browse-pets">
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
              View All Pets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowsePets;
