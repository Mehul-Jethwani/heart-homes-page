import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PetCardProps {
  name: string;
  type: string;
  age: string;
  image: string;
}

const PetCard = ({ name, type, age, image }: PetCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <Badge variant="secondary" className="ml-2">{type}</Badge>
        </div>
        <p className="text-muted-foreground">{age}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full hover:scale-105 transition-transform">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
