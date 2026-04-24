import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Anti-Wrinkle Injections in Leicester',
    image: '/images/anti-wrinkle.jpg',
    description: "Our anti-wrinkle treatments offer a safe, non-surgical solution to reduce forehead lines, crow's feet, and frown lines. By gently relaxing targeted muscles, we soften expression lines while maintaining natural facial movement.",
    details: 'Delivered by experienced medical injectors, treatments are tailored to achieve subtle, refreshed results: never frozen or overdone, with minimal downtime.',
    href: '/treatments/anti-wrinkle',
  },
  {
    id: 2,
    title: 'Dermal Fillers',
    image: '/images/dermal-fillers.jpg',
    description: 'Dermal fillers restore lost volume, smooth deeper lines, and refine facial structure. We treat areas including lips, cheeks, jawline, and under-eyes using premium, clinically approved fillers.',
    details: 'Results are immediate, natural-looking, and minimally invasive, ideal for restoring youthful balance without surgery.',
    href: '/treatments/dermal-fillers',
  },
  {
    id: 3,
    title: 'Collagen-Stimulating Injections',
    image: '/images/collagen-stimulating.jpg',
    description: "Ellansé is an advanced injectable that restores facial volume while stimulating your body's natural collagen production. Over time, skin becomes firmer, smoother, and more elastic.",
    details: 'Ideal for patients seeking long-lasting rejuvenation with gradual, natural enhancement and minimal downtime.',
    href: '/treatments/collagen-stimulating',
  },
  {
    id: 4,
    title: 'Polynucleotide',
    image: '/images/polynucleotide.jpg',
    description: 'Polynucleotides are advanced regenerative injectables designed to remodel and rejuvenate the skin. They improve elasticity, hydration, and texture while reducing fine lines, dark circles, and skin laxity.',
    details: 'Using premium brands such as Plinest and Newest, we treat the face, under-eyes, neck, décolleté, and hands to stimulate collagen production and support cellular renewal.',
    href: '/treatments/polynucleotides',
  },
  {
    id: 5,
    title: 'Skin Peels',
    image: '/images/skin-peels.jpg',
    description: 'Using the advanced Mesoestetic range, our medical-grade skin peels remove dead skin cells, stimulate cell turnover, and improve tone and texture.',
    details: 'Effective for acne, pigmentation, rosacea, and dull skin, peels are comfortable with minimal downtime. A course of treatments is typically recommended for optimal results.',
    href: '/treatments/skin-peels',
  },
  {
    id: 6,
    title: 'Carboxytherapy',
    image: '/images/carboxytherapy.jpg',
    description: 'Carboxytherapy uses sterile CO₂ injections to stimulate circulation and collagen production. This improves firmness, smooths skin, and reduces the appearance of cellulite, stretch marks, and dark under-eye circles.',
    details: 'A safe, minimally invasive treatment with minimal side effects. Multiple sessions are recommended for best results.',
    href: '/treatments/carboxytherapy',
  },
  {
    id: 7,
    title: 'Skin Boosters',
    image: '/images/skin-boosters.jpg',
    description: 'Skin boosters deeply hydrate and revitalise from within. Profhilo improves skin laxity and firmness, while NCTF nourishes with hyaluronic acid, vitamins, and antioxidants.',
    details: 'Ideal for dull skin, early ageing, and loss of elasticity, delivering radiant, refreshed skin with no downtime.',
    href: '/treatments/skin-boosters',
  },
  {
    id: 8,
    title: 'Signature Facials',
    image: '/images/signature-facials.jpg',
    description: 'Our 75-minute Live Probiotic Facial delivers intensive skin restoration using live lactobacillus probiotics and advanced hydration techniques.',
    details: 'Designed to rebalance the skin microbiome, improve barrier function, and restore natural radiance using Esse Organic skincare.',
    href: '/treatments/signature-facials',
  },
  {
    id: 9,
    title: 'Weight Loss Injections',
    image: '/images/weight-loss-injections.jpg',
    description: 'Our medically supervised weight-loss injections support appetite control and metabolic balance. When combined with healthy lifestyle changes, they help reduce calorie intake and support sustainable weight management.',
    details: 'Each treatment plan is personalised to ensure safe, effective, long-term results.',
    href: '/treatments/weight-loss',
  },
  {
    id: 10,
    title: 'Vitamin Injections – Biotin & B12',
    image: '/images/vitamin-injections.jpg',
    description: 'Vitamin B12 and Biotin injections support energy levels, improve hair strength, and enhance skin health. Intramuscular delivery ensures faster absorption compared to oral supplements.',
    details: 'Ideal for individuals experiencing fatigue, hair thinning, or nutrient deficiency.',
    href: '/treatments/vitamin-injections',
  },
];

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<number>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? 0 : id);
  };

  // Split services into two columns
  const leftServices = services.filter((_, i) => i % 2 === 0);
  const rightServices = services.filter((_, i) => i % 2 !== 0);

  return (
    <section id="treatments" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <SectionBadge text="Treatments" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[48px] mt-6 mb-12 max-w-lg leading-tight text-black mx-auto lg:mx-0"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Explore Our Treatments for Lasting Skin Health!
          </h2>
        </AnimatedSection>

        {/* Two-column accordion grid */}
        <div className="grid md:grid-cols-2 gap-x-10">
          {/* Left column */}
          <div>
            {leftServices.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                isExpanded={expandedId === service.id}
                onToggle={() => toggleExpand(service.id)}
              />
            ))}
          </div>
          {/* Right column */}
          <div>
            {rightServices.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                isExpanded={expandedId === service.id}
                onToggle={() => toggleExpand(service.id)}
              />
            ))}
          </div>
        </div>

        {/* See More */}
        <AnimatedSection className="text-center mt-10">
          <a
            href="/treatments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-black text-[11px] font-sans font-semibold tracking-[0.1em] uppercase hover:bg-gray-50 transition-colors"
          >
            SEE MORE TREATMENTS
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  isExpanded,
  onToggle,
}: {
  service: typeof services[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      {isExpanded ? (
        /* Expanded card */
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="py-5"
          >
            <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-[200px] flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-[17px] leading-snug text-black pr-3"
                      style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                    >
                      {service.title}
                    </h3>
                    <button
                      onClick={onToggle}
                      className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 hover:bg-[#363636] transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                  <p className="text-[#363636] text-[13px] leading-relaxed font-sans mb-2">
                    {service.description}
                  </p>
                  <p className="text-[#363636] text-[13px] leading-relaxed font-sans mb-4">
                    {service.details}
                  </p>
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold tracking-[0.1em] uppercase text-black hover:underline"
                  >
                    READ MORE
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        /* Collapsed row */
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <h3
            className="text-[17px] sm:text-[19px] text-black group-hover:text-[#363636] transition-colors"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            {service.title}
          </h3>
          <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#363636] transition-colors">
            <Plus className="w-3.5 h-3.5 text-white" />
          </span>
        </button>
      )}
    </div>
  );
}
