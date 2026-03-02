import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

import CeremonySection from '@/components/CeremonySection';
import MusicSection from '@/components/MusicSection';
import ProgrammeSection from '@/components/ProgrammeSection';
import CantalSection from '@/components/CantalSection';
import RestaurantsSection from '@/components/RestaurantsSection';

import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <CeremonySection />
        <MusicSection />
        <ProgrammeSection />
        <CantalSection />
        <RestaurantsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </LanguageProvider>
  );
};

export default Index;
