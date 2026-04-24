import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[auto] sm:min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/images/videos/Reform Medical Web (1).mp4"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-44 lg:py-52">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start gap-2 mb-6"
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
            className="text-5xl sm:text-6xl lg:text-[68px] text-white leading-[1.1] mb-6"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Restore, Rejuvenate And Reform Yourself
          </motion.h1>

          {/* Description — sans-serif 400 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-3xl font-sans"
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
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            <a
              href="https://pearlportal.net/Portal/rad/OnlineBooking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-gray-100 transition-colors font-sans"
            >
              Book a Consultation
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
