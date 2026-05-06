import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, Clock, MapPin } from 'lucide-react';
import { ContactSection } from '@/sections/ContactSection';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const contactCards = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email Us',
    lines: ['info@reformmedical.co.uk'],
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Call Us',
    lines: ['0116 3800318'],
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Opening Hours',
    lines: [
      'Monday: Closed',
      'Tuesday: 8:30 am – 6:00 pm',
      'Wednesday: Closed',
      'Thursday: Closed',
      'Friday: 8:30 am – 5:30 pm',
      'Saturday: 10:00 am – 3:00 pm',
      'Sunday: By appointment only',
    ],
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Visit Us',
    lines: ['18 De Montfort Street Leicester LE1 7GL', 'Private Car Park At The Rear'],
  },
];

export default function Contact() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-1.jpg" alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[11px] font-sans font-semibold tracking-[0.12em] text-white/90 uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
              HOME
              <span className="text-white/40">/</span>
              CONTACT US
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[64px] text-white leading-tight mb-6"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Where Advanced Aesthetics<br className="hidden sm:block" /> Meet Genuine Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-10 font-sans leading-relaxed"
          >
            Discover a calm, expert-led approach to aesthetic treatments. At Reform Aesthetics, we combine advanced,
            non-surgical techniques with a discreet, welcoming environment—so every visit feels personal, comfortable,
            and results-driven.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <a
              href="https://pearlportal.net/Portal/rad/OnlineBooking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-[11px] font-sans font-semibold tracking-[0.12em] uppercase hover:bg-gray-100 transition-colors"
            >
              BOOK YOUR CONSULTATION
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Main two-column contact section ── */}
      <ContactSection />

      {/* ── Alternative Ways to Reach Us ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <SectionBadge text="Alternative Ways" />
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] leading-tight text-black"
              style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
            >
              Prefer a Different Way to Reach Us?
            </h2>
            <p className="mt-4 text-[#363636] text-sm sm:text-base font-sans max-w-xl mx-auto">
              Whether by phone, email, or in person, our team is happy to help in the way that suits you best.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map(({ icon, title, lines }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
                className="relative pt-10 flex flex-col items-center"
              >
                {/* Floating icon above card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#6e6a66] flex items-center justify-center text-white z-10 shadow-sm">
                  {icon}
                </div>
                {/* Card */}
                <div className="w-full bg-[#efeae7] rounded-2xl pt-10 pb-7 px-6 flex flex-col items-center text-center gap-3">
                  <h3
                    className="text-[18px] text-black"
                    style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                  >
                    {title}
                  </h3>
                  <div className="space-y-1">
                    {lines.map((line, j) => (
                      <p key={j} className="text-[#363636] text-[13px] font-sans leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
