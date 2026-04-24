import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

/* ── Pricing categories — exact figures from official price list ── */
const leftCategories = [
  {
    id: 'consultation',
    name: 'Consultation',
    items: [
      { name: 'Aesthetic Consultation', price: '£30' },
    ],
    defaultOpen: true,
  },
  {
    id: 'skin',
    name: 'Skin',
    items: [
      { name: 'Chemical Skin Peel – Face', price: '£100' },
      { name: 'Chemical Skin Peel – Face & Neck', price: '£120' },
      { name: 'Medical Microneedling – Face', price: '£250' },
      { name: 'Medical Microneedling – Face & Neck', price: '£280' },
      { name: 'Medical Microneedling – Face, Neck & Décolletage', price: '£300' },
      { name: 'Skin Boosters – Profhilo 2ml', price: '£250' },
      { name: 'Skin Boosters – NCTF 3ml', price: '£280' },
      { name: 'Skin Boosters – Course of 3', price: '£750' },
    ],
  },
  {
    id: 'face-neck',
    name: 'Face & Neck Rejuvenation',
    items: [
      { name: 'Polynucleotides – 1ml', price: '£260' },
      { name: 'PRP – 1 session', price: '£250' },
      { name: 'PRP – 3 sessions', price: '£690' },
      { name: 'Carboxytherapy – per area', price: '£60' },
      { name: 'Carboxytherapy – Course of 5', price: '£300' },
    ],
  },
  {
    id: 'injectables',
    name: 'Injectables',
    items: [
      { name: 'Anti-Wrinkle Treatment (3 areas)', price: '£270' },
      { name: 'Hyperhidrosis (Excessive Sweating)', price: '£420' },
      { name: 'Jaw Reduction / Bruxism', price: '£350' },
      { name: 'Gummy Smile Treatment', price: '£150' },
    ],
  },
];

const rightCategories = [
  {
    id: 'fillers',
    name: 'Fillers',
    items: [
      { name: 'Dermal Fillers – 1ml', price: 'From £260' },
      { name: 'Dermal Fillers – 0.5ml', price: '£180' },
      { name: 'Tear Trough Filler', price: '£350' },
      { name: 'Non-Surgical Rhinoplasty', price: '£400' },
      { name: 'Ellansé Collagen-Stimulating Filler', price: '£400' },
      { name: 'Filler Dissolving', price: '£150' },
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced Aesthetic Treatments',
    items: [
      { name: 'PDO Threads', price: 'From £1,000' },
      { name: 'Vampire Facial (PRP + Microneedling)', price: '£300' },
    ],
  },
  {
    id: 'hair-loss',
    name: 'Hair Loss Treatments',
    items: [
      { name: 'Hair Rejuvenation Stem Cell Package (Exosomes + Microneedling)', price: '£1,500' },
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness',
    items: [
      { name: 'Vitamin B12 Injection', price: '£45' },
      { name: 'Biotin Injection', price: '£50' },
      { name: 'Weight Loss Injections', price: 'From £280' },
    ],
  },
  {
    id: 'specialist',
    name: 'Specialist Treatments',
    items: [
      { name: 'Deep Vein Removal', price: 'From £2,700' },
    ],
  },
];

function AccordionRow({
  category,
  isOpen,
  onToggle,
}: {
  category: typeof leftCategories[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mb-3 last:mb-0 rounded-xl overflow-hidden border border-gray-100">
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-5 text-left group bg-[#efeae7] hover:bg-[#e8e2dc] transition-colors rounded-xl"
      >
        <span
          className="text-base text-black"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
        >
          {category.name}
        </span>
        <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#363636] transition-colors">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-white" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-white" />
          )}
        </span>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 space-y-0">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-[#363636] text-sm font-sans">{item.name}</span>
                  <span className="text-black text-sm font-sans font-medium">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  /* Track open state for each category by id */
  const allIds = [...leftCategories, ...rightCategories].map((c) => c.id);
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(leftCategories.filter((c) => c.defaultOpen).map((c) => c.id))
  );

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-pricing.jpg"
            alt="Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          {/* Breadcrumb pill */}
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
              <span className="text-black font-semibold">PRICING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1] flex-shrink-0" />
            </span>
            <div className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-[#c5b1a1]" />
          </motion.div>

          {/* H1 — Times New Roman 400 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[54px] text-white leading-[1.2] mb-5"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Transparent Pricing for Advanced<br className="hidden sm:block" /> Aesthetic Treatments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-sans leading-relaxed"
          >
            We believe in clear, honest pricing with no hidden costs. Our fees reflect the quality
            of products used, clinical expertise, and the personalised care you receive at every
            stage of your treatment journey.
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
            BOOK YOUR CONSULTATION
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </section>

      {/* ── 2. PRICING ACCORDION — white overlap rounded ── */}
      <section className="relative bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">

            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl"
            >
              {leftCategories.map((cat) => (
                <AccordionRow
                  key={cat.id}
                  category={cat}
                  isOpen={openIds.has(cat.id)}
                  onToggle={() => toggle(cat.id)}
                />
              ))}
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl"
            >
              {rightCategories.map((cat) => (
                <AccordionRow
                  key={cat.id}
                  category={cat}
                  isOpen={openIds.has(cat.id)}
                  onToggle={() => toggle(cat.id)}
                />
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
