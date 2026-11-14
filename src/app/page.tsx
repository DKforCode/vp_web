import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { BrandsSection } from '@/components/sections/BrandsSection';
import { WallPrepSection } from '@/components/sections/WallPrepSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AwardsSection } from '@/components/sections/AwardsSection';
import { StoreLocatorSection } from '@/components/sections/StoreLocatorSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BrandsSection />
        <WallPrepSection />
        <ServicesSection />
        <AwardsSection />
        <StoreLocatorSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
