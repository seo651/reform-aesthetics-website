import { motion } from 'framer-motion';
import { SectionBadge } from '@/components/SectionBadge';

const brands = [
  { name: 'Bocouture',    src: '/images/brand-bocouture.png',  h: 28 },
  { name: 'Cellenis PRP', src: '/images/brand-cellenis.png',   h: 32 },
  { name: 'Enerpeel',     src: '/images/brand-enerpeel.png',   h: 36 },
  { name: 'DermaFocus',   src: '/images/brand-derma.png',      h: 30 },
  { name: 'Profhilo',     src: '/images/brand-profhilo.png',   h: 24 },
];

export function BrandsSection() {
  return (
    <section className="relative bg-[#EDE8E2] rounded-t-[3rem] -mt-8 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionBadge text="Why Choose Us" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-[44px] mt-6 mb-12 text-gray-900"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
        >
          Trusted Brands We<br />Partner With...
        </motion.h2>

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="flex items-center"
            >
              <div className="px-8 sm:px-10 py-4 flex items-center justify-center">
                <img
                  src={brand.src}
                  alt={brand.name}
                  style={{ height: brand.h, width: 'auto' }}
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                  draggable={false}
                />
              </div>
              {/* Vertical divider between logos */}
              {index < brands.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-gray-400/50 flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
