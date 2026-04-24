import { motion } from 'framer-motion';
import { ContactSection } from '@/sections/ContactSection';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-1.jpg" alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wider text-white/90 uppercase mb-6">
              <span>HOME</span><span className="text-white/40">&gt;</span><span>CONTACT</span>
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto"
          >
            We would love to hear from you. Book a consultation or reach out with any questions about our treatments.
          </motion.p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
