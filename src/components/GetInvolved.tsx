import { Button } from '@/components/ui/button';
import { HandHeart, CalendarDays, Share2 } from 'lucide-react';
import volunteersImage from '@/assets/volunteers.jpg';

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of animal lovers and make a difference in the lives of pets in need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-scale-in">
            <img 
              src={volunteersImage} 
              alt="Volunteers helping animals" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Volunteer with Us</h3>
                <p className="text-muted-foreground">
                  Spend time with our animals, help with daily care, or assist at adoption events. 
                  Every hour you give makes a huge difference.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <CalendarDays className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Foster a Pet</h3>
                <p className="text-muted-foreground">
                  Provide temporary care for pets in need. Fostering saves lives and helps pets 
                  adjust to home environments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Spread the Word</h3>
                <p className="text-muted-foreground">
                  Share our pets on social media, tell your friends about us, and help us reach 
                  more potential adopters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="hover:scale-105 transition-transform">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
