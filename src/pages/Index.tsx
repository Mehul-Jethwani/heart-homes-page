import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrowsePets from '@/components/BrowsePets';
import AdoptSection from '@/components/AdoptSection';
import SuccessStories from '@/components/SuccessStories';
import PetCare from '@/components/PetCare';
import GetInvolved from '@/components/GetInvolved';
import Donate from '@/components/Donate';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrowsePets />
      <AdoptSection />
      <SuccessStories />
      <PetCare />
      <GetInvolved />
      <Donate />
      <Footer />
    </div>
  );
};

export default Index;
