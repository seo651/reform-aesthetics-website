import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Anti-Wrinkle Injections in Leicester',
    description: 'Our anti-wrinkle treatments offer a safe, non-surgical solution to reduce forehead lines, crow\'s feet, and frown lines. By gently relaxing targeted muscles, we soften expression lines while maintaining natural facial movement.',
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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 mb-12 max-w-lg">
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
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                              <h3 className="font-serif text-xl">{service.title}</h3>
                              <button
                                onClick={() => toggleExpand(service.id)}
                                className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors"
                              >
                                <Minus className="w-4 h-4 text-white" />
                              </button>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              {service.description}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {service.details}
                            </p>
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
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
                    <h3 className="font-serif text-xl group-hover:text-gray-600 transition-colors">
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
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-black text-sm font-medium hover:bg-gray-200 transition-all hover:scale-[1.02]"
          >
            SEE MORE TREATMENTS
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
