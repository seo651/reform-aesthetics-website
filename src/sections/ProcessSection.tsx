import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';

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

const CIRCLE = 52;

export function ProcessSection() {
  return (
    /* Tiny outer gap so rounded corners show against page */
    <section className="py-5 px-3 sm:px-4">
      <div className="bg-[#EDE8E2] rounded-[2rem] px-8 sm:px-14 lg:px-20 py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[42%_58%] gap-10 lg:gap-16 items-start">

            {/* ── Left: text ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start">
                <SectionBadge text="PROCESS" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] mt-6 mb-5 leading-[1.15] text-gray-900"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Glow Up Your Skin in 3<br />Easy Steps
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 font-sans max-w-sm mx-auto lg:mx-0">
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
            </motion.div>

            {/* ── Right: timeline steps ── */}
            <div>
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    /* items-stretch so left track matches right content height */
                    className="flex gap-6 items-stretch"
                  >
                    {/* ── Left track: circle + line ── */}
                    <div className="flex flex-col items-center flex-shrink-0" style={{ width: CIRCLE }}>
                      {/* Number circle */}
                      <div
                        className="rounded-full border border-[#b5aea7] bg-[#EDE8E2] flex items-center justify-center flex-shrink-0"
                        style={{ width: CIRCLE, height: CIRCLE }}
                      >
                        <span className="text-[12px] font-sans text-gray-400 tracking-widest">{step.number}</span>
                      </div>

                      {/* Connector — grows to fill full height of this step row */}
                      {!isLast && (
                        <div
                          className="flex-1 rounded-full bg-[#ccc6bf]"
                          style={{ width: 1, marginTop: 3, marginBottom: 3 }}
                        />
                      )}
                    </div>

                    {/* ── Right content ── */}
                    <div className={`flex-1 ${!isLast ? 'pb-10' : ''}`}>
                      {/* Icon circle — vertically aligned with number circle */}
                      <div
                        className="rounded-full bg-[#6f6b68] flex items-center justify-center mb-4"
                        style={{ width: CIRCLE, height: CIRCLE }}
                      >
                        <step.Icon />
                      </div>

                      <h3
                        className="text-[22px] sm:text-[24px] mb-2 text-gray-900 leading-snug"
                        style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
