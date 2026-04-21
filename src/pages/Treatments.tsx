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
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <img src="/images/service-anti-wrinkle.jpg" alt="Treatments" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full text-center">
          {/* Breadcrumb with decorative gold lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            {/* Left gold line */}
            <div className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-[#c4a882]" />

            {/* Breadcrumb pill */}
            <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/95 backdrop-blur-sm text-[12px] font-medium tracking-[0.15em] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c4a882]" />
              <span className="text-gray-700">HOME</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-semibold">ANTI-WRINKLE INJECTIONS</span>
              <span className="w-2 h-2 rounded-full bg-[#c4a882]" />
            </span>

            {/* Right gold line */}
            <div className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-[#c4a882]" />
          </motion.div>

          {/* Heading - italic serif */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.15] mb-6"
          >
            Anti-wrinkle injections
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            An injectable solution that uses a purified protein to gently relax muscles, helping to smooth the appearance of wrinkles and fine lines.
          </motion.p>

          {/* CTA Button - cream/beige pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#EDE8E2] text-gray-900 text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-md"
            >
              ARRANGE YOUR CONSULTATION
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
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
