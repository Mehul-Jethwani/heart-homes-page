import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, DollarSign, Gift, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const DonatePage = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const { toast } = useToast();

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount > 0) {
      toast({
        title: "Thank you for your generosity! ❤️",
        description: `Your donation of ₹${amount} will help save more lives.`,
      });
      setCustomAmount('');
      setSelectedAmount(null);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Your Support Saves Lives
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Every donation helps us rescue, care for, and rehome animals in need
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Pets Rescued This Year</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <Gift className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-foreground mb-2">350+</h3>
              <p className="text-muted-foreground">Successful Adoptions</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-foreground mb-2">₹15L+</h3>
              <p className="text-muted-foreground">Medical Care Provided</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Make a Donation</h2>
              <p className="text-lg text-muted-foreground">
                Choose an amount or enter your own to help animals in need
              </p>
            </div>

            <Card className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Preset Amounts */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">Select Amount</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[500, 1000, 2500, 5000].map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        size="lg"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className="text-lg font-semibold"
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter amount in ₹"
                      className="pl-10 text-lg"
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <Button 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={handleDonate}
                  disabled={!selectedAmount && !customAmount}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Your donation is tax-deductible. You'll receive a receipt via email.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">How Your Donation Helps</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">₹500</h3>
                  <p className="text-muted-foreground">
                    Provides food and basic care for one pet for a week
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">₹2,000</h3>
                  <p className="text-muted-foreground">
                    Covers vaccinations and basic medical checkup for one pet
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">₹5,000</h3>
                  <p className="text-muted-foreground">
                    Helps rescue and rehabilitate an injured or abandoned animal
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">₹10,000+</h3>
                  <p className="text-muted-foreground">
                    Funds emergency surgeries and long-term medical treatment
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonatePage;
