import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/sections/CTASection';
import { GallerySection } from '@/sections/GallerySection';
import { ContactSection } from '@/sections/ContactSection';

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface TreatmentPageProps {
  breadcrumb: string;
  heroTitle: string;
  heroSubtext: string;
  heroImage: string;
  aboutBadge: string;
  aboutHeading: string;
  aboutBody: string;
  checklistItems: string[];
  circularImage: string;
  circularImageAlt?: string;
  benefitsHeading: string;
  benefitsBody: string;
  benefitsImage: string;
  benefitsImageAlt?: string;
  benefits: BenefitItem[];
}

function IconA() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="20" cy="20" r="14" />
      <path d="M14 24s2 4 6 4 6-4 6-4" strokeLinecap="round" />
      <circle cx="15" cy="18" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="25" cy="18" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconB() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M20 5l11 4v8c0 7-5 12-11 14-6-2-11-7-11-14V9l11-4z" />
      <path d="M15 20l4 4 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconC() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="20" cy="20" r="14" />
      <path d="M20 12v9l5 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconD() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M20 30s-12-7-12-16a7 7 0 0 1 12-5 7 7 0 0 1 12 5c0 9-12 16-12 16z" />
    </svg>
  );
}

const benefitIcons = [IconA, IconB, IconC, IconD];

const brandLogos = [
  { src: '/images/brand-bocouture.png', alt: 'Bocouture',    h: 36 },
  { src: '/images/brand-cellenis.png',  alt: 'Cellenis PRP', h: 38 },
  { src: '/images/brand-enerpeel.png',  alt: 'Enerpeel',     h: 42 },
  { src: '/images/brand-derma.png',     alt: 'DermaFocus',   h: 38 },
  { src: '/images/brand-profhilo.png',  alt: 'Profhilo',     h: 30 },
  { src: '/images/brand-bocouture.png', alt: 'Bocouture2',   h: 36 },
  { src: '/images/brand-cellenis.png',  alt: 'Cellenis2',    h: 38 },
  { src: '/images/brand-enerpeel.png',  alt: 'Enerpeel2',    h: 42 },
  { src: '/images/brand-derma.png',     alt: 'DermaFocus2',  h: 38 },
  { src: '/images/brand-profhilo.png',  alt: 'Profhilo2',    h: 30 },
];

export function TreatmentPage({
  breadcrumb,
  heroTitle,
  heroSubtext,
  heroImage,
  aboutBadge,
  aboutHeading,
  aboutBody,
  checklistItems,
  circularImage,
  circularImageAlt = 'Treatment result',
  benefitsHeading,
  benefitsBody,
  benefitsImage,
  benefitsImageAlt = 'Treatment',
  heroObjectPosition = 'top',
  benefits,
}: TreatmentPageProps & { heroObjectPosition?: string }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={heroTitle} className="w-full h-full object-cover" style={{ objectPosition: heroObjectPosition }} />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-[#c5b1a1]" />
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-medium tracking-[0.12em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
              <span className="text-[#363636]">HOME</span>
              <span className="text-gray-300">/</span>
              <span className="text-black font-semibold">{breadcrumb}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
            </span>
            <div className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-[#c5b1a1]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[58px] text-white leading-[1.15] mb-6"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            {heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
          >
            {heroSubtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://pearlportal.net/Portal/rad/OnlineBooking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#efeae7] text-black text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-md font-sans"
            >
              BOOK YOUR CONSULTATION
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── About — cream overlap ── */}
      <section className="relative bg-[#efeae7] rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-16 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Left — text content */}
            <AnimatedSection className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <SectionBadge text={aboutBadge} />
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] mt-6 mb-6 text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                {aboutHeading}
              </h2>

              <p className="text-[#363636] text-[15px] leading-relaxed mb-10 font-sans">
                {aboutBody}
              </p>

              <div className="space-y-0">
                {checklistItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="flex items-center justify-center lg:justify-start gap-4 py-5 border-b border-gray-300/60 last:border-b-0"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9D8A7B] flex-shrink-0" />
                    <span className="text-[#363636] font-sans text-[15px]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — circular image + brand logos, sticky on desktop */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center lg:sticky lg:top-24">
                {/* Circular frame */}
                <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[420px] aspect-square mb-8 flex-shrink-0 mx-auto">
                  <div className="absolute inset-0 rounded-full border-[18px] border-[#c5b1a1]/35" />
                  <div className="absolute inset-[18px] rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={circularImage}
                      alt={circularImageAlt}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                </div>

                <div className="w-full max-w-[440px] h-px bg-gray-300 mb-6" />

                {/* Brand logo marquee */}
                <div className="w-full max-w-[440px] relative overflow-hidden">
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-[#efeae7] to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-[#efeae7] to-transparent" />
                  <div
                    className="flex items-center gap-0 w-max"
                    style={{ animation: 'marquee-treatment 20s linear infinite' }}
                  >
                    {brandLogos.map((brand, idx) => (
                      <div key={idx} className="flex items-center flex-shrink-0">
                        <div className="px-6 py-3 flex items-center justify-center">
                          <img
                            src={brand.src}
                            alt={brand.alt}
                            style={{ height: brand.h, width: 'auto' }}
                            className="object-contain opacity-80"
                            draggable={false}
                          />
                        </div>
                        <div className="w-px h-6 bg-gray-300 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                  <style>{`
                    @keyframes marquee-treatment {
                      0%   { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  `}</style>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Book a Visit CTA ── */}
      <CTASection />

      {/* ── Benefits Section ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 lg:items-stretch">

            {/* Left image — fills full column height on desktop */}
            <AnimatedSection className="flex flex-col lg:h-full">
              <div className="relative rounded-2xl overflow-hidden flex-1" style={{ minHeight: 'clamp(280px, 40vw, 420px)' }}>
                <img
                  src={benefitsImage}
                  alt={benefitsImageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </AnimatedSection>

            {/* Right content */}
            <AnimatedSection delay={0.2} className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <SectionBadge text="BENEFITS" />
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] mt-6 mb-5 text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                {benefitsHeading}
              </h2>

              <p className="text-[#363636] text-sm leading-relaxed mb-8 font-sans">
                {benefitsBody}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                {benefits.map(({ title, desc }, idx) => {
                  const Icon = benefitIcons[idx % benefitIcons.length];
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      className="flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 text-[#363636]">
                        <Icon />
                      </div>
                      <h3
                        className="text-base sm:text-lg mb-2 leading-snug text-black"
                        style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                      >
                        {title}
                      </h3>
                      <p className="text-[#363636] text-sm leading-relaxed font-sans">{desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <GallerySection />

      {/* ── Contact ── */}
      <ContactSection />
    </>
  );
}
