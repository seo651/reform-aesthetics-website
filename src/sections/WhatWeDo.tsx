import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

/* ── Filled grey circle icons — matching the screenshot exactly ── */
function IconPatientCare() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Person head */}
      <circle cx="24" cy="16" r="7" fill="white" />
      {/* Body arc */}
      <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Refresh arrows around head */}
      <path d="M8 16C8 10 13 6 19 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 16C40 10 35 6 29 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 16l-2-3.5M8 16l3-1" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M40 16l2-3.5M40 16l-3-1" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconClinicRoof() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Face outline */}
      <ellipse cx="24" cy="25" rx="13" ry="15" stroke="white" strokeWidth="2.2" />
      {/* Eyes */}
      <circle cx="19" cy="22" r="1.5" fill="white" />
      <circle cx="29" cy="22" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M19 29c1.2 2 3 3 5 3s3.8-1 5-3" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Sparkle top-right — skin glow */}
      <path d="M38 8l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="white" opacity="0.9" />
      {/* Small sparkle dot */}
      <circle cx="34" cy="6" r="1" fill="white" opacity="0.7" />
    </svg>
  );
}

function IconExpertTeam() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Centre person */}
      <circle cx="24" cy="15" r="6" fill="white" />
      <path d="M14 38c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left person */}
      <circle cx="10" cy="19" r="4.5" fill="white" opacity="0.75" />
      <path d="M4 38c0-4 2.7-7 6-8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      {/* Right person */}
      <circle cx="38" cy="19" r="4.5" fill="white" opacity="0.75" />
      <path d="M44 38c0-4-2.7-7-6-8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

const features = [
  {
    Icon: IconPatientCare,
    title: 'Patient-Centered Care',
    description:
      'We listen first. Every treatment is personalised to your skin goals for natural, lasting results.',
  },
  {
    Icon: IconClinicRoof,
    title: 'All-In-One Care Under One Roof',
    description:
      'From Anti-Ageing to advanced skin rejuvenation, all treatments are carried out in one trusted clinic.',
  },
  {
    Icon: IconExpertTeam,
    title: 'Expert Team You Can Trust',
    description:
      'Our specialists combine medical expertise with the latest technology to deliver safe, effective care.',
  },
];

export function WhatWeDo() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ── Top row: H2 left | description + CTA right ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">

          {/* Left */}
          <AnimatedSection className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <SectionBadge text="What We Do" />
            </div>
            <h2
              className="text-[36px] sm:text-[44px] lg:text-[52px] mt-6 leading-[1.1] text-black"
              style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
            >
              An Independent Skin &amp; Aesthetics Clinic Focused on Results
            </h2>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection delay={0.15} className="lg:pt-16 text-center lg:text-left">
            <p className="text-[#363636] text-[15px] leading-relaxed font-sans mb-8">
              We provide specialist skin and anti-ageing treatments designed to enhance your natural
              features, not change them. Our philosophy is simple: subtle, refined improvements
              using premium products and evidence-based techniques.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://pearlportal.net/Portal/rad/OnlineBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-300 text-black text-[11px] font-sans font-semibold tracking-[0.1em] uppercase hover:bg-gray-50 transition-colors"
              >
                START YOUR SKIN TRANSFORMATION
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Full-width divider ── */}
        <div className="border-t border-gray-200 mb-14" />

        {/* ── 3-column features with pipe dividers ── */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-0">
          {features.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * index }}
              className={`flex flex-col gap-5 items-center text-center md:items-start md:text-left ${
                index > 0 ? 'md:border-l md:border-gray-200 md:pl-12' : 'md:pr-12'
              } ${index === 1 ? 'md:px-12' : ''}`}
            >
              {/* Filled medium-grey circle with white icon */}
              <div className="w-[64px] h-[64px] rounded-full bg-[#ddd5cc] flex items-center justify-center flex-shrink-0">
                <Icon />
              </div>

              <h3
                className="text-[19px] sm:text-[21px] text-black leading-snug"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                {title}
              </h3>

              <p className="text-[#363636] text-sm leading-relaxed font-sans">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
