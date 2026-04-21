import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

// Line-art icons matching PDF illustrated style
function IconCalendar() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="4" y="6" width="24" height="22" rx="2" />
      <path d="M4 12h24M10 4v4M22 4v4" strokeLinecap="round" />
      <rect x="9" y="16" width="4" height="4" rx="1" />
    </svg>
  );
}
function IconDroplet() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M16 4c0 0-9 9-9 15a9 9 0 0 0 18 0C25 13 16 4 16 4z" />
      <path d="M16 22a4 4 0 0 1-4-4" strokeLinecap="round" />
    </svg>
  );
}
function IconSparkle() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
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
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-[#EDE8E2] rounded-[2.5rem] px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left */}
              <div>
                <SectionBadge text="Process" />
                <h2
                  className="text-3xl sm:text-4xl lg:text-[46px] mt-6 mb-6 leading-tight text-gray-900"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  Glow Up Your Skin in 3 Easy Steps
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans">
                  Our Glow Up Process makes achieving radiant, healthy skin simple and stress-free.
                  Whether you're looking to combat ageing, clear blemishes, or restore your natural
                  glow, our team guides you every step of the way.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-gray-800 transition-colors font-sans"
                >
                  ARRANGE YOUR CONSULTATION
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right: Steps */}
              <div className="relative">
                {/* Connecting vertical line */}
                <div className="absolute left-[23px] top-12 bottom-12 w-px bg-gray-300 hidden sm:block" />

                <div className="space-y-10">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 * index }}
                      className="flex gap-5 relative"
                    >
                      {/* Number circle — matches PDF: outlined circle with number */}
                      <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-[#EDE8E2] flex-shrink-0 z-10">
                        <span className="text-sm font-sans text-gray-700">{step.number}</span>
                      </div>

                      {/* Content */}
                      <div>
                        {/* Icon circle */}
                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-3 text-gray-600">
                          <step.Icon />
                        </div>
                        <h3
                          className="text-base mb-1.5 text-gray-900"
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
