import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Reform Clinic exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/25">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </span>
            <span className="text-xs font-medium tracking-[0.12em] text-white/85 uppercase font-sans">
              Your Trusted Dental Clinic in Leicester
            </span>
          </motion.div>

          {/* H1 — Times New Roman 400 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[58px] text-white leading-[1.15] mb-6"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Restore, Rejuvenate And Reform Yourself
          </motion.h1>

          {/* Description — sans-serif 400 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-xl font-sans"
          >
            We believe healthy skin builds confidence. From advanced facials to medical-grade
            aesthetic treatments, our experienced team delivers personalised care in a calm,
            professional environment focused on real, visible results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-gray-100 transition-colors font-sans"
            >
              COMPLETE YOUR FREE SKIN ASSESSMENT
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/30 text-white text-[11px] font-semibold tracking-[0.1em] uppercase border border-white/30 hover:bg-black/50 transition-colors font-sans"
            >
              FIND THE RIGHT TREATMENT FOR YOU
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
