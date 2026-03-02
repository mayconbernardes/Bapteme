import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import InvitationSection from '@/components/InvitationSection';
import CeremonySection from '@/components/CeremonySection';
import MusicSection from '@/components/MusicSection';
import ProgrammeSection from '@/components/ProgrammeSection';
import CantalSection from '@/components/CantalSection';
import RestaurantsSection from '@/components/RestaurantsSection';
import ConfirmationSection from '@/components/ConfirmationSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <InvitationSection />
        <CeremonySection />
        <MusicSection />
        <ProgrammeSection />
        <CantalSection />
        <RestaurantsSection />
        <ConfirmationSection />
      </main>
      <Footer />
      <ScrollToTop />
    </LanguageProvider>
  );
};

export default Index;
