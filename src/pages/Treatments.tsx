import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { CTASection } from '@/sections/CTASection';
import { ProcessSection } from '@/sections/ProcessSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ContactSection } from '@/sections/ContactSection';

export default function Treatments() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/service-anti-wrinkle.jpg" alt="Treatments" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wider text-white/90 uppercase mb-6">
              <span>HOME</span><span className="text-white/40">&gt;</span><span>TREATMENTS</span>
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Our Treatments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Discover our comprehensive range of medical-grade aesthetic treatments designed to rejuvenate, restore and enhance your natural beauty.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <SectionBadge text="What We Offer" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 mb-6">
              Advanced Skin Treatments Tailored to You
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From anti-wrinkle injections and dermal fillers to skin peels and signature facials,
              every treatment at Reform Aesthetics is delivered by qualified professionals using premium
              products and evidence-based techniques.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
