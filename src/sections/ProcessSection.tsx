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
    description: 'Enjoy ongoing support with aftercare advice, product recommendations, and follow-ups, helping you keep your skin healthy and radiant.',
  },
];

const C = 62;   // circle diameter px
const GAP = 22; // gap between number col and icon/content col

export function ProcessSection() {
  return (
    <section className="py-0">
      <div className="bg-[#efeae7] px-4 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[44%_56%] gap-10 lg:gap-16 items-start">

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
                className="text-[30px] sm:text-[42px] lg:text-[52px] mt-5 mb-5 leading-[1.12] text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Glow Up Your Skin in 3<br />Easy Steps
              </h2>
              <p className="text-[#363636] text-sm leading-relaxed mb-10 font-sans max-w-sm mx-auto lg:mx-0">
                Our Glow Up Process makes achieving radiant, healthy skin simple and stress-free.
                Whether you're looking to combat ageing, clear blemishes, or restore your natural
                glow, our team guides you every step of the way.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://pearlportal.net/Portal/rad/OnlineBooking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-[0.12em] uppercase hover:bg-[#363636] transition-colors font-sans"
                >
                  ARRANGE YOUR CONSULTATION
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* ── Right: timeline ── */}
            <div className="space-y-0">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `${C}px ${GAP}px 1fr`,
                      gridTemplateRows: `${C}px auto`,
                      marginBottom: isLast ? 0 : 8,
                    }}
                  >
                    {/* Row 1 Col 1 — Number circle */}
                    <div
                      className="rounded-full border-[1.5px] border-[#9e9890] bg-[#efeae7] flex items-center justify-center"
                      style={{ width: C, height: C }}
                    >
                      <span
                        className="font-sans text-[#363636] tracking-widest"
                        style={{ fontSize: 13 }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Row 1 Col 2 — empty spacer */}
                    <div />

                    {/* Row 1 Col 3 — Icon circle */}
                    <div className="flex items-start">
                      <div
                        className="rounded-full bg-[#6e6a66] flex items-center justify-center flex-shrink-0"
                        style={{ width: C, height: C }}
                      >
                        <step.Icon />
                      </div>
                    </div>

                    {/* Row 2 Col 1 — Fading line (all steps, including last) */}
                    <div className="flex justify-center">
                      <div
                        style={{
                          width: 1.5,
                          height: '100%',
                          minHeight: isLast ? 80 : 110,
                          background: 'linear-gradient(to bottom, #a8a29e 0%, transparent 100%)',
                          marginTop: 4,
                        }}
                      />
                    </div>

                    {/* Row 2 Col 2 — empty spacer */}
                    <div />

                    {/* Row 2 Col 3 — Title + description */}
                    <div style={{ paddingTop: 14, paddingBottom: isLast ? 0 : 28 }}>
                      <h3
                        className="mb-2.5 text-black leading-snug"
                        style={{
                          fontFamily: '"Times New Roman", Times, serif',
                          fontWeight: 400,
                          fontSize: 'clamp(20px, 2vw, 26px)',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[#363636] text-sm leading-relaxed font-sans">
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
