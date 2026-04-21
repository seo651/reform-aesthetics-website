import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Anti-Wrinkle Injections in Leicester',
    description: "Our anti-wrinkle treatments offer a safe, non-surgical solution to reduce forehead lines, crow's feet, and frown lines. By gently relaxing targeted muscles, we soften expression lines while maintaining natural facial movement.",
    details: 'Delivered by experienced medical injectors, treatments are tailored to achieve subtle, refreshed results — never frozen or overdone — with minimal downtime.',
    image: '/images/service-anti-wrinkle.jpg',
  },
  { id: 2, title: 'Dermal Fillers', description: '', details: '' },
  { id: 3, title: 'Collagen-Stimulating Injections', description: '', details: '' },
  { id: 4, title: 'Polynucleotide', description: '', details: '' },
  { id: 5, title: 'Skin-Peels', description: '', details: '' },
  { id: 6, title: 'Carboxytherapy', description: '', details: '' },
  { id: 7, title: 'Skin Boosters', description: '', details: '' },
  { id: 8, title: 'Signature Facials', description: '', details: '' },
  { id: 9, title: 'Weight Loss Injections', description: '', details: '' },
  { id: 10, title: 'Vitamin Injections – Biotin & B12', description: '', details: '' },
];

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<number>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? 0 : id);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionBadge text="Services" />
          <h2
            className="text-3xl sm:text-4xl lg:text-[48px] mt-6 mb-12 max-w-lg leading-tight text-gray-900"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Explore Our Services for Lasting Skin Health!
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-0">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={0.05 * (index % 2)}>
              <div className="border-b border-gray-200">
                {expandedId === service.id && service.image ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="py-6"
                    >
                      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-2/5">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-48 sm:h-full object-cover"
                            />
                          </div>
                          <div className="sm:w-3/5 p-6">
                            <div className="flex items-start justify-between mb-4">
                              <h3
                                className="text-lg leading-snug text-gray-900 pr-3"
                                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                              >
                                {service.title}
                              </h3>
                              <button
                                onClick={() => toggleExpand(service.id)}
                                className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors"
                              >
                                <Minus className="w-4 h-4 text-white" />
                              </button>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-3 font-sans">
                              {service.description}
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5 font-sans">
                              {service.details}
                            </p>
                            <a
                              href="/treatments"
                              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase hover:underline font-sans"
                            >
                              READ MORE
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <h3
                      className="text-lg sm:text-xl group-hover:text-gray-600 transition-colors text-gray-900"
                      style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                    >
                      {service.title}
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
                      {expandedId === service.id ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </span>
                  </button>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* See More Button */}
        <AnimatedSection className="text-center mt-10">
          <a
            href="/treatments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-300 text-black text-xs font-semibold tracking-[0.1em] uppercase hover:bg-gray-50 transition-colors font-sans"
          >
            SEE MORE TREATMENTS
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
