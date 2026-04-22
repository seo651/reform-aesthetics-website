import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

/* ── Pricing categories from official price list ── */
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
    id: 'anti-wrinkle',
    name: 'Anti-Wrinkle Injections',
    items: [
      { name: '1 Area', price: '£180' },
      { name: '2 Areas', price: '£230' },
      { name: '3 Areas', price: '£280' },
      { name: 'Brow Lift', price: '£100' },
      { name: 'Bunny Lines', price: '£100' },
      { name: 'Lip Flip', price: '£80' },
      { name: 'Chin Dimpling', price: '£100' },
      { name: 'Nefertiti Neck Lift', price: '£250' },
      { name: 'Gummy Smile', price: '£100' },
      { name: 'Jaw Slimming / Bruxism', price: '£350' },
      { name: 'Hyperhidrosis – Underarms', price: '£500' },
      { name: 'Hyperhidrosis – Hands', price: '£500' },
    ],
  },
  {
    id: 'fillers',
    name: 'Dermal Fillers',
    items: [
      { name: 'Lip Filler (0.5ml)', price: '£180' },
      { name: 'Lip Filler (1ml)', price: '£250' },
      { name: 'Nasolabial Folds (1ml)', price: '£250' },
      { name: 'Marionette Lines (1ml)', price: '£250' },
      { name: 'Cheek / Mid-Face (1ml)', price: '£280' },
      { name: 'Tear Trough / Under Eye (1ml)', price: '£300' },
      { name: 'Jaw / Chin (1ml)', price: '£280' },
      { name: 'Non-Surgical Rhinoplasty (1ml)', price: '£350' },
      { name: 'Full Face – Price on Consultation', price: 'POC' },
    ],
  },
  {
    id: 'face-neck',
    name: 'Face & Neck Rejuvenation',
    items: [
      { name: 'Profhilo (1 session)', price: '£350' },
      { name: 'Profhilo (course of 2)', price: '£600' },
      { name: 'Skin Boosters – Juvederm Volite (face)', price: '£350' },
      { name: 'Skin Boosters – Restylane Skinboosters', price: '£300' },
      { name: 'Polynucleotides – 1 session', price: '£250' },
      { name: 'Polynucleotides – course of 3', price: '£650' },
      { name: 'PRP – 1 session', price: '£300' },
      { name: 'PRP – course of 3', price: '£800' },
      { name: 'Exosomes – 1 session', price: '£400' },
      { name: 'Exosomes – course of 3', price: '£1,000' },
    ],
  },
  {
    id: 'collagen',
    name: 'Collagen-Stimulating Injections',
    items: [
      { name: 'Ellansé S (1 syringe)', price: '£500' },
      { name: 'Ellansé M (1 syringe)', price: '£550' },
      { name: 'Sculptra (1 vial)', price: '£400' },
      { name: 'Sculptra (course of 3)', price: '£1,100' },
    ],
  },
];

const rightCategories = [
  {
    id: 'skin',
    name: 'Skin Treatments',
    items: [
      { name: 'Skin Peel – Superficial', price: '£80' },
      { name: 'Skin Peel – Medium Depth', price: '£120' },
      { name: 'Skin Peel – Course of 6', price: '£450' },
      { name: 'Medical Microneedling (face)', price: '£200' },
      { name: 'Medical Microneedling – course of 3', price: '£550' },
      { name: 'Carboxytherapy – per session', price: '£120' },
      { name: 'Carboxytherapy – course of 6', price: '£650' },
      { name: '3D Skin Analysis', price: '£50' },
    ],
  },
  {
    id: 'thread',
    name: 'Thread Lifts',
    items: [
      { name: 'PDO Mono Threads', price: 'From £200' },
      { name: 'PDO Cog / Lifting Threads', price: 'From £600' },
      { name: 'Full Face Thread Lift', price: 'POC' },
    ],
  },
  {
    id: 'hair-loss',
    name: 'Hair Loss Treatments',
    items: [
      { name: 'PRP Hair – 1 session', price: '£350' },
      { name: 'PRP Hair – course of 3', price: '£900' },
      { name: 'Polynucleotides Hair – 1 session', price: '£300' },
      { name: 'Polynucleotides Hair – course of 3', price: '£800' },
      { name: 'Exosomes Hair – 1 session', price: '£450' },
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness & Weight Management',
    items: [
      { name: 'Vitamin B12 Injection', price: '£35' },
      { name: 'Biotin Injection', price: '£35' },
      { name: 'Vitamin B12 + Biotin Combo', price: '£60' },
      { name: 'Weight Loss Injections – Saxenda', price: 'From £180/mo' },
      { name: 'Weight Loss Injections – Wegovy', price: 'From £200/mo' },
      { name: 'Lymphatic Drainage Massage', price: 'From £80' },
      { name: 'IV Vitamin Drip', price: 'From £150' },
    ],
  },
  {
    id: 'facials',
    name: 'Facials',
    items: [
      { name: 'Esse Probiotic Signature Facial (60 min)', price: '£90' },
      { name: 'Esse Probiotic Signature Facial (90 min)', price: '£120' },
      { name: 'Pregnancy Glow Facial', price: '£90' },
    ],
  },
  {
    id: 'fat-dissolving',
    name: 'Fat-Dissolving Injections',
    items: [
      { name: 'Aqualyx – 1 area (1 session)', price: '£200' },
      { name: 'Aqualyx – 1 area (course of 3)', price: '£550' },
      { name: 'Aqualyx – chin / jowls', price: '£200' },
    ],
  },
  {
    id: 'vein',
    name: 'Vein Removal',
    items: [
      { name: 'Microsclerotherapy – 1 session', price: '£200' },
      { name: 'Microsclerotherapy – course of 3', price: '£550' },
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
    <div className="border-b border-gray-200 last:border-b-0">
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-5 text-left group hover:bg-gray-50/50 transition-colors rounded-xl"
      >
        <span
          className="text-base text-gray-900"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
        >
          {category.name}
        </span>
        <span className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
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
                  <span className="text-gray-500 text-sm font-sans">{item.name}</span>
                  <span className="text-gray-900 text-sm font-sans font-medium">{item.price}</span>
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
            <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-[#c4a882]" />
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/95 text-[11px] font-sans font-medium tracking-[0.12em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882] flex-shrink-0" />
              <span className="text-gray-500">HOME</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-semibold">PRICING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882] flex-shrink-0" />
            </span>
            <div className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-[#c4a882]" />
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EDE8E2] text-gray-900 text-[12px] font-sans font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-sm"
          >
            BOOK YOUR CONSULTATION
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </section>

      {/* ── 2. PRICING ACCORDION — cream overlap rounded-top ── */}
      <section className="relative bg-[#EDE8E2] rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">

            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden"
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
              className="bg-white rounded-2xl overflow-hidden"
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
