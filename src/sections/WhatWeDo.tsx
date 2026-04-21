import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

// Line-art SVG icons matching the PDF illustrated style
function IconPatient() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
      <circle cx="20" cy="14" r="6" />
      <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
    </svg>
  );
}
function IconClinic() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
      <rect x="8" y="16" width="24" height="18" rx="2" />
      <path d="M16 34V24h8v10" />
      <path d="M8 16l12-10 12 10" />
      <path d="M18 20h4M20 18v4" strokeLinecap="round" />
    </svg>
  );
}
function IconExpert() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
      <circle cx="20" cy="14" r="5" />
      <path d="M9 34c0-5 4.5-9 11-9s11 4 11 9" strokeLinecap="round" />
      <circle cx="32" cy="28" r="5" />
      <path d="M30 28l1.5 1.5L34 26" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const features = [
  {
    Icon: IconPatient,
    title: 'Patient-Centered Care',
    description: 'We listen first. Every treatment is personalised to your skin goals for natural, lasting results.',
  },
  {
    Icon: IconClinic,
    title: 'All-In-One Care Under One Roof',
    description: 'From Anti-Ageing to advanced skin rejuvenation, all treatments are carried out in one trusted clinic.',
  },
  {
    Icon: IconExpert,
    title: 'Expert Team You Can Trust',
    description: 'Our specialists combine medical expertise with the latest technology to deliver safe, effective care.',
  },
];

export function WhatWeDo() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <AnimatedSection>
            <SectionBadge text="What We Do" />
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] mt-6 leading-tight text-gray-900"
              style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
            >
              An Independent Skin & Aesthetics Clinic Focused on Results
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:pt-14">
            <p className="text-gray-600 leading-relaxed mb-6 font-sans text-sm">
              We provide specialist skin and anti-ageing treatments designed to enhance your natural
              features — not change them. Our philosophy is simple: subtle, refined improvements
              using premium products and evidence-based techniques.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 text-black text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-gray-200 transition-colors font-sans"
            >
              START YOUR SKIN TRANSFORMATION
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12" />

        {/* Feature cards — text description above, icon circle, title, description below */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Description text at top (from the 3-column layout in PDF) */}
              <p className="text-gray-500 text-sm leading-relaxed font-sans mb-6">{description}</p>

              {/* Divider */}
              <div className="w-px h-8 bg-gray-300 mx-0 mb-5 hidden md:block" />

              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mb-4 text-gray-600">
                <Icon />
              </div>

              {/* Title */}
              <h3 className="font-sans font-medium text-sm text-gray-900">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
