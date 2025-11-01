import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Heart } from 'lucide-react';

const Donate = () => {
  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Help Us Save More Lives 💝
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Every little bit helps! Your support means we can rescue more pets, give them medical care, 
            and find them loving forever homes. Together, we're changing lives!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">$25</h3>
                <p className="text-muted-foreground">Provides food for a week</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-primary">
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">$50</h3>
                <p className="text-muted-foreground">Covers veterinary checkup</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">$100</h3>
                <p className="text-muted-foreground">Helps rescue a pet in need</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 hover:scale-105 transition-all duration-300">
              Give a Little Love
            </Button>
            <Button size="lg" variant="outline" className="px-8 hover:scale-105 transition-all duration-300">
              Support Monthly
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            PawConnect is a registered non-profit. All donations are tax-deductible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
