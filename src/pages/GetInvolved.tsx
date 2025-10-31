import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Users, Heart, Calendar, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import volunteersImage from '@/assets/volunteers.jpg';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get in touch with you soon about volunteer opportunities.",
    });
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Join our community of animal lovers and make a difference in pets' lives
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Volunteer</h3>
              <p className="text-muted-foreground text-sm">
                Help care for animals, assist with events, or provide foster homes
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <DollarSign className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Donate</h3>
              <p className="text-muted-foreground text-sm">
                Financial support helps us provide food, medical care, and shelter
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Foster</h3>
              <p className="text-muted-foreground text-sm">
                Provide temporary homes for pets awaiting their forever families
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Events</h3>
              <p className="text-muted-foreground text-sm">
                Join adoption drives, fundraisers, and community awareness programs
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Image Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={volunteersImage} 
                alt="Volunteers helping animals" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Become a Volunteer
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our volunteers are the heart of PawConnect. Whether you have a few hours a week or can only help occasionally, every contribution matters. From walking dogs and socializing cats to helping with administrative tasks and fundraising events, there's a role for everyone.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Volunteering is not just about helping animals—it's about joining a community of passionate people who share your love for pets. You'll make lasting friendships while making a real difference.
              </p>
              <Button size="lg">Join Our Team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Sign Up to Volunteer</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll reach out with more information
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Area of Interest</label>
                <Input
                  type="text"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  required
                  placeholder="e.g., Animal care, Events, Administration"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Why do you want to volunteer?
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell us about your interest in volunteering..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
