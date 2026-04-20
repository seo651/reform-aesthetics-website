import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactSection } from '@/sections/ContactSection';

const pricingCategories = [
  {
    category: 'Anti-Wrinkle Injections',
    items: [
      { name: '1 Area', price: '£180' },
      { name: '2 Areas', price: '£250' },
      { name: '3 Areas', price: '£300' },
    ],
  },
  {
    category: 'Dermal Fillers',
    items: [
      { name: 'Lip Filler (0.5ml)', price: '£180' },
      { name: 'Lip Filler (1ml)', price: '£250' },
      { name: 'Cheek Filler', price: '£300' },
      { name: 'Chin/Jawline Filler', price: '£300' },
    ],
  },
  {
    category: 'Skin Treatments',
    items: [
      { name: 'Skin Peel', price: 'From £100' },
      { name: 'Microneedling', price: 'From £150' },
      { name: 'Skin Boosters', price: 'From £200' },
      { name: 'Polynucleotides', price: 'From £250' },
    ],
  },
  {
    category: 'Signature Facials',
    items: [
      { name: 'Express Glow Facial', price: '£75' },
      { name: 'Signature Hydra Facial', price: '£120' },
      { name: 'Advanced Rejuvenation Facial', price: '£150' },
    ],
  },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-1.jpg" alt="Pricing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wider text-white/90 uppercase mb-6">
              <span>HOME</span><span className="text-white/40">&gt;</span><span>PRICING</span>
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Clear, honest pricing with no hidden costs. Book a consultation to discuss a treatment plan tailored to you.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <SectionBadge text="Our Prices" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 mb-4">Treatment Price Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All prices include a thorough consultation. Bespoke treatment plans are available — please contact us for a personalised quote.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {pricingCategories.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="font-serif text-2xl mb-6">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                      <div className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <span className="font-medium text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all">
              BOOK A CONSULTATION
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
