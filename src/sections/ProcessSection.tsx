import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

function IconCalendar() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-5 h-5">
      <rect x="4" y="6" width="24" height="22" rx="2" />
      <path d="M4 12h24M10 4v4M22 4v4" strokeLinecap="round" />
      <rect x="9" y="16" width="4" height="4" rx="1" />
    </svg>
  );
}
function IconDroplet() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-5 h-5">
      <path d="M16 4c0 0-9 9-9 15a9 9 0 0 0 18 0C25 13 16 4 16 4z" />
      <path d="M16 22a4 4 0 0 1-4-4" strokeLinecap="round" />
    </svg>
  );
}
function IconSparkle() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-5 h-5">
      <path d="M16 4l2 8h8l-6.5 4.7 2.5 8L16 20l-6 4.7 2.5-8L6 12h8z" />
    </svg>
  );
}

const steps = [
  {
    number: '01',
    Icon: IconCalendar,
    title: 'Schedule Your Consultation',
    description: 'Book a personalised skin consultation to discuss your concerns and goals. Our team will recommend the best treatments for you.',
  },
  {
    number: '02',
    Icon: IconDroplet,
    title: 'Receive Expert Treatments',
    description: 'Relax in our clinic while our specialists deliver tailored, medical-grade skin treatments to refresh and rejuvenate your complexion.',
  },
  {
    number: '03',
    Icon: IconSparkle,
    title: 'Maintain Your Glow',
    description: 'Enjoy ongoing support with aftercare advice, product recommendations, and follow-ups — helping you keep your skin healthy and radiant.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-8">
      <div className="w-full">
        <AnimatedSection>
          <div className="bg-[#EDE8E2] rounded-[2.5rem] mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* ── Left ── */}
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <SectionBadge text="Process" />
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-[44px] mt-6 mb-5 leading-[1.15] text-gray-900"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  Glow Up Your Skin in 3<br />Easy Steps
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans max-w-sm mx-auto lg:mx-0">
                  Our Glow Up Process makes achieving radiant, healthy skin simple and stress-free.
                  Whether you're looking to combat ageing, clear blemishes, or restore your natural
                  glow, our team guides you every step of the way.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://pearlportal.net/Portal/rad/OnlineBooking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-[0.12em] uppercase hover:bg-gray-800 transition-colors font-sans"
                  >
                    ARRANGE YOUR CONSULTATION
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* ── Right: Steps with vertical timeline ── */}
              <div className="relative">
                {/* Vertical line — centered on 56px number circles: left = 27px */}
                <div
                  className="absolute w-px bg-gray-400"
                  style={{ left: 27, top: 28, bottom: 28 }}
                />

                <div className="space-y-16">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 * index }}
                      className="flex gap-10 items-start"
                    >
                      {/* Number circle — sits ON the vertical line, 56px */}
                      <div className="w-14 h-14 rounded-full border border-gray-400 bg-[#EDE8E2] flex items-center justify-center flex-shrink-0 z-10 relative">
                        <span className="text-[13px] font-sans text-gray-600 tracking-wider">{step.number}</span>
                      </div>

                      {/* Content: icon circle, then title + desc below */}
                      <div className="flex-1">
                        {/* Filled dark grey icon circle — 60px */}
                        <div className="w-[60px] h-[60px] rounded-full bg-[#636363] flex items-center justify-center mb-5">
                          <step.Icon />
                        </div>
                        <h3
                          className="text-[26px] mb-3 text-gray-900 leading-snug"
                          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
