import { HeroSection } from '@/sections/HeroSection';
import { BrandsSection } from '@/sections/BrandsSection';
import { WhatWeDo } from '@/sections/WhatWeDo';
import { ServicesSection } from '@/sections/ServicesSection';
import { TeamSection } from '@/sections/TeamSection';
import { CTASection } from '@/sections/CTASection';
import { GallerySection } from '@/sections/GallerySection';
import { ProcessSection } from '@/sections/ProcessSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ContactSectionMap as ContactSection } from '@/sections/ContactSectionMap';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <WhatWeDo />
      <ServicesSection />
      <TeamSection />
      <CTASection />
      <GallerySection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
