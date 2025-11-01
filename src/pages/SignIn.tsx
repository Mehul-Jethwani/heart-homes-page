import Navbar from '@/components/Navbar';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PawPrint } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sign in functionality coming soon!",
      description: "We're working on bringing you authentication features.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Sign In Section */}
      <section className="pt-32 pb-16 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <PawPrint className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Hey There! 👋</h1>
                <p className="text-muted-foreground">Welcome back to your PawConnect family</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Let's Go!
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  New here?{' '}
                  <button className="text-primary hover:underline font-medium">
                    Join the family!
                  </button>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default SignIn;
