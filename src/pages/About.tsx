import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { TeamSection } from '@/sections/TeamSection';
import { CTASection } from '@/sections/CTASection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ContactSectionMap as ContactSection } from '@/sections/ContactSectionMap';

/* ── Line-art SVG icons matching PDF illustrated style ── */
function IconTailored() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
      <circle cx="16" cy="16" r="12" />
      <path d="M10 16h12M16 10v12" strokeLinecap="round" />
    </svg>
  );
}
function IconSpa() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
      <path d="M16 6c-4 4-6 8-6 11a6 6 0 0 0 12 0c0-3-2-7-6-11z" />
      <path d="M16 17v5" strokeLinecap="round" />
    </svg>
  );
}
function IconMedical() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
      <path d="M8 12h4V8h8v4h4v8h-4v4h-8v-4H8z" />
    </svg>
  );
}

/* Right-column feature rows with gold circle icon */
const features = [
  {
    Icon: IconTailored,
    title: 'Tailored, Full-Spectrum Skincare Solutions',
    desc: 'From acne and pigmentation to fine lines and anti-ageing treatments, we provide a complete range of skin solutions under one roof, designed for every age and skin type.',
  },
  {
    Icon: IconSpa,
    title: 'Relaxed, Spa-Inspired Environment',
    desc: 'Our clinic is designed with your comfort in mind, combining advanced technology with a calming, spa-like atmosphere to make every visit stress-free.',
  },
  {
    Icon: IconMedical,
    title: 'Medical-Grade Products & Advanced Techniques',
    desc: 'We use clinically tested products and cutting-edge techniques to deliver safe, effective treatments that help you achieve long-lasting results.',
  },
];

/* Stats */
const stats = [
  { number: '80+',  label: 'Years of Combined Experience' },
  { number: '60+',  label: 'Successful Smile Transformations' },
  { number: '10+',  label: 'Ongoing Patient Relationships' },
  { number: '220+', label: 'Ongoing Patient Relationships' },
  { number: '5+',   label: 'Advanced Procedures Offered' },
];

/* Philosophy 2×2 grid icons */
function IconComfort() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
      <path d="M20 8c-5 5-9 10-9 14a9 9 0 0 0 18 0c0-4-4-9-9-14z" />
      <path d="M20 20v6" strokeLinecap="round" />
    </svg>
  );
}
function IconTransparent() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
      <rect x="8" y="10" width="24" height="18" rx="3" />
      <path d="M8 16h24M14 10v4M20 10v4M26 10v4" strokeLinecap="round" />
    </svg>
  );
}
function IconExpertLed() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
      <circle cx="20" cy="14" r="6" />
      <path d="M10 34c0-5.523 4.477-10 10-10s10 4.477 10 10" strokeLinecap="round" />
      <path d="M17 28l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPatientCentered() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
      <path d="M20 30s-11-7-11-15a7 7 0 0 1 11-5.74A7 7 0 0 1 31 15c0 8-11 15-11 15z" />
    </svg>
  );
}

const philosophy = [
  {
    Icon: IconComfort,
    title: 'Comfort-First Philosophy',
    desc: 'Your comfort is our priority. From the moment you arrive, we create a calm, welcoming space so you feel relaxed and confident in your skincare journey.',
  },
  {
    Icon: IconTransparent,
    title: 'Transparent Communication',
    desc: 'We take the time to listen to your concerns, explain every option clearly, and design treatment plans around your individual needs. No jargon, no confusion. Just honest guidance.',
  },
  {
    Icon: IconExpertLed,
    title: 'Expert-Led Treatments',
    desc: 'Our treatments are delivered by qualified professionals using advanced techniques and medical-grade products, ensuring your skin receives the highest standard of care.',
  },
  {
    Icon: IconPatientCentered,
    title: 'Patient-Centered Care',
    desc: 'Every skin journey is unique. That\'s why we personalise every treatment plan, focusing on your goals to deliver results that look natural and feel authentic to you.',
  },
];

export default function About() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-about.jpg"
            alt="Reform Clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 text-center">
          {/* Breadcrumb pill — gold dots + gradient lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-[#c5b1a1]" />
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/95 text-[11px] font-sans font-medium tracking-[0.12em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1] flex-shrink-0" />
              <span className="text-[#363636]">HOME</span>
              <span className="text-gray-300">/</span>
              <span className="text-black font-semibold">ABOUT US</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1] flex-shrink-0" />
            </span>
            <div className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-[#c5b1a1]" />
          </motion.div>

          {/* H1 — Times New Roman 400 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[56px] text-white leading-[1.15] mb-5"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Compassionate Skincare That Puts You First
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-sans leading-relaxed"
          >
            Discover a calm, caring approach to skin health. At Reform Aesthetics and Dental, we provide advanced
            treatments in a soothing environment to restore your glow, renew your confidence, and
            enhance your natural beauty.
          </motion.p>

          {/* CTA — cream pill */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="https://pearlportal.net/Portal/rad/OnlineBooking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#efeae7] text-black text-[12px] font-sans font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-sm"
          >
            ARRANGE YOUR CONSULTATION
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </section>

      {/* ── 2 + 3. ABOUT + STATS — single fully-rounded card ── */}
      <section className="relative z-20 -mt-8 pb-10">
        <div className="bg-[#efeae7] rounded-t-[2.5rem] sm:rounded-t-[3rem] pt-16 sm:pt-20 overflow-hidden">

          {/* About content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start pb-12 sm:pb-20">

              {/* Left column — sticky so it stays in view while right scrolls */}
              <AnimatedSection className="text-center lg:text-left lg:sticky lg:top-28">
                <div className="flex justify-center lg:justify-start">
                  <SectionBadge text="About Us" />
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-[44px] mt-6 mb-6 leading-tight text-black"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  Looking for trusted skincare professionals in Leicester?
                </h2>
                <p className="text-[#363636] text-sm leading-relaxed mb-4 font-sans">
                  We offer personalised, clinically proven skincare solutions tailored to your unique needs.
                </p>
                <p className="text-[#363636] text-sm leading-relaxed mb-4 font-sans">
                  At Reform Aesthetics and Dental, we understand that every skin journey is different. That is why we take the time to carry out a thorough consultation, carefully assessing your concerns, lifestyle and long term goals before recommending any treatment. Our approach is never one size fits all. Instead, we create bespoke treatment plans designed specifically around you.
                </p>
                <p className="text-[#363636] text-sm leading-relaxed mb-4 font-sans">
                  Whether you are looking to treat acne, reduce pigmentation, soften signs of ageing or simply maintain a healthy, radiant complexion, our expert team is here to guide you. We combine advanced clinical techniques with high quality products and a patient focused approach to ensure every treatment is both safe and effective.
                </p>
              </AnimatedSection>

              {/* Right column — feature rows */}
              <AnimatedSection delay={0.2}>
                <div className="space-y-0">
                  {features.map(({ title, desc }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      className="py-7 border-b border-gray-300/50 last:border-b-0"
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-2.5">
                        <svg viewBox="0 0 20 20" className="w-5 h-5 flex-shrink-0" fill="none">
                          <path d="M10 1.5l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.77l-4.77 2.44.91-5.32L2.27 7.12l5.34-.78L10 1.5z" fill="#c5b1a1" stroke="#c5b1a1" strokeWidth="0.5" strokeLinejoin="round"/>
                        </svg>
                        <h3
                          className="text-[18px] text-black"
                          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                        >
                          {title}
                        </h3>
                      </div>
                      <p className="text-[#363636] text-sm leading-relaxed font-sans text-center lg:text-left lg:pl-8">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* ── Divider line ── */}
          <div className="border-t border-gray-300/60 mx-6 sm:mx-10 lg:mx-14" />

          {/* Stats bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-10 sm:py-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 sm:gap-y-8 lg:gap-y-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * idx }}
                  className="relative text-center"
                >
                  <div
                    className="text-4xl sm:text-5xl lg:text-6xl leading-none mb-2"
                    style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400, color: '#b0a295' }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-[#363636] text-xs font-sans leading-snug max-w-[120px] mx-auto">
                    {stat.label}
                  </p>
                  {idx < stats.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-3 h-8 w-px bg-gray-400/50" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. WHAT WE DO — large centred heading ── */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <SectionBadge text="What We Do" />
            <h2
              className="text-[24px] sm:text-[30px] lg:text-[38px] mt-6 mb-6 leading-[1.15] text-black"
              style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
            >
              Reform Aesthetics and Dental is an independently owned medical Aesthetics Clinic in Leicester city centre.
            </h2>
            <p className="text-[#363636] text-sm leading-relaxed font-sans max-w-3xl mx-auto">
              We specialise in advanced medical skin treatments designed to Restore youth,
              Rejuvenate and Refresh your natural beauty in a safe and supportive environment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. PHILOSOPHY — 2×2 grid, clean divider lines + center dot ── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative grid sm:grid-cols-2">
            {/* Center intersection dot */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-300 z-10" />

            {philosophy.map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * idx }}
                className={`p-10 text-center sm:text-left ${idx % 2 === 0 ? 'sm:border-r border-gray-200' : ''} ${idx < 2 ? 'border-b border-gray-200' : ''}`}
              >
                {/* Round icon circle + title inline */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[#363636]">
                    <Icon />
                  </div>
                  <h3
                    className="text-[18px] text-black leading-snug"
                    style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                  >
                    {title}
                  </h3>
                </div>
                <p className="text-[#363636] text-sm leading-relaxed font-sans">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TEAM SECTION ── */}
      <TeamSection />

      {/* ── 7. CTA BANNER — dark bg, italic heading, inline form ── */}
      <CTASection />

      {/* ── 8. TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── 9. CONTACT ── */}
      <ContactSection />
    </>
  );
}
