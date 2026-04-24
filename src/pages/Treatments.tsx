import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/sections/CTASection';
import { GallerySection } from '@/sections/GallerySection';
import { ContactSectionMap as ContactSection } from '@/sections/ContactSectionMap';

const treatmentGroups = [
  {
    category: 'Skin',
    treatments: [
      { label: '3D Skin Analysis', href: '/treatments/3d-skin-analysis' },
      { label: 'Signature Pregnancy Glow Facial', href: '/treatments/signature-pregnancy-glow-facial' },
      { label: 'Esse Live Probiotic Facials', href: '/treatments/signature-facials' },
      { label: 'Skin Peels', href: '/treatments/skin-peels' },
      { label: 'Medical-Grade Skincare', href: '/treatments/medical-grade-skincare' },
      { label: 'Medical Microneedling', href: '/treatments/medical-microneedling' },
      { label: 'Carboxytherapy', href: '/treatments/carboxytherapy' },
    ],
  },
  {
    category: 'Face & Neck Rejuvenation',
    treatments: [
      { label: 'Anti-Wrinkle Injections', href: '/treatments/anti-wrinkle' },
      { label: 'Dermal Fillers', href: '/treatments/dermal-fillers' },
      { label: 'Skin Boosters', href: '/treatments/skin-boosters' },
      { label: 'Polynucleotides', href: '/treatments/polynucleotides' },
      { label: 'Thread Lifts', href: '/treatments/thread-lifts' },
      { label: 'Collagen-Stimulating Injections', href: '/treatments/collagen-stimulating' },
      { label: 'Neck Rejuvenation', href: '/treatments/neck-rejuvenation' },
    ],
  },
  {
    category: 'Fillers',
    treatments: [
      { label: 'Lip Fillers', href: '/treatments/lip-fillers' },
      { label: 'Nose Filler (Non-Surgical Rhinoplasty)', href: '/treatments/nose-filler' },
      { label: 'Chin & Face Filler', href: '/treatments/chin-face-filler' },
      { label: 'Jawline Contouring', href: '/treatments/jawline-contouring' },
      { label: 'Under-Eye Filler', href: '/treatments/under-eye-filler' },
      { label: 'Profhilo', href: '/treatments/profhilo' },
      { label: 'Fat-Dissolving Injections', href: '/treatments/fat-dissolving' },
    ],
  },
  {
    category: 'Advanced Aesthetic Treatments',
    treatments: [
      { label: 'PDO Thread Lift', href: '/treatments/thread-lifts' },
      { label: 'Gummy Smile Correction', href: '/treatments/gummy-smile' },
      { label: 'Hyperhidrosis Treatment', href: '/treatments/hyperhidrosis' },
      { label: 'Bruxism & TMJ Treatment', href: '/treatments/bruxism-tmj' },
      { label: 'Vein Removal', href: '/treatments/vein-removal' },
    ],
  },
  {
    category: 'Hair Loss Treatments',
    treatments: [
      { label: 'Hair Loss Overview', href: '/treatments/hair-loss' },
      { label: 'PRP Hair & Skin', href: '/treatments/prp' },
      { label: 'Exosome Therapy', href: '/treatments/exosomes' },
      { label: 'Vitamin Injections (Biotin & B12)', href: '/treatments/vitamin-injections' },
    ],
  },
  {
    category: 'Wellness',
    treatments: [
      { label: 'Weight Loss Injections', href: '/treatments/weight-loss' },
      { label: 'Lymphatic Drainage Massage', href: '/treatments/lymphatic-drainage' },
      { label: 'Vitamin Injections', href: '/treatments/vitamin-injections' },
    ],
  },
];

export default function Treatments() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/treatments-hero.jpg"
            alt="Our Treatments"
            className="w-full h-full object-cover"
          />
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
              <span className="text-black font-semibold">TREATMENTS</span>
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
            Our Treatments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
          >
            Discover our full range of aesthetic and dental treatments, each designed to help you look
            and feel your very best. Expertly delivered by our medical team in Leicester.
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

      {/* ── Treatments Listing — cream overlap ── */}
      <section className="relative bg-[#efeae7] rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-16 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <SectionBadge text="ALL TREATMENTS" />
              <h2
                className="text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] mt-6 text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Explore Our Full Range
              </h2>
              <p className="text-[#363636] text-[15px] leading-relaxed mt-4 max-w-xl mx-auto font-sans">
                Our comprehensive menu of treatments covers skin, face, fillers, hair and wellness.
                all delivered by experienced medical professionals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentGroups.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * groupIdx }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3
                  className="text-xl text-black mb-5 pb-4 border-b border-gray-100"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  {group.category}
                </h3>
                <ul className="space-y-1">
                  {group.treatments.map((t) => (
                    <li key={t.href + t.label}>
                      <Link
                        to={t.href}
                        className="flex items-center justify-between py-2.5 text-[#363636] hover:text-black text-[14px] font-sans group transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <span>{t.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#c5b1a1]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book a Visit CTA ── */}
      <CTASection />

      {/* ── Gallery ── */}
      <GallerySection />

      {/* ── Contact ── */}
      <ContactSection />
    </>
  );
}
