import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-pets.jpg';

const Hero = () => {
  const scrollToBrowse = () => {
    const element = document.getElementById('browse-pets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Happy pets" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Find Your Perfect <br />
          <span className="text-primary">Paw Partner</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connecting paws with loving homes — one adoption at a time.
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 hover:scale-105 transition-transform shadow-lg"
          onClick={scrollToBrowse}
        >
          Browse Pets
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
