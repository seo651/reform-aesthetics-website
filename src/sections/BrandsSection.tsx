import { motion } from 'framer-motion';
import { SectionBadge } from '@/components/SectionBadge';

const brands = [
  { name: 'BOCOUTURE', style: 'text-[#0056A4] font-bold tracking-wider text-sm' },
  { name: 'MAILI', style: 'text-gray-800 font-light tracking-[0.3em] text-lg' },
  { name: 'ENERPEEL', style: 'text-[#00A0B0] font-bold tracking-wider text-sm' },
  { name: 'Juvederm', style: 'text-[#E87722] font-medium italic text-lg' },
  { name: 'Dermapen', style: 'text-[#0056A4] font-bold tracking-wider text-sm' },
];

export function BrandsSection() {
  return (
    <section className="relative bg-cream rounded-t-[3rem] -mt-8 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
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
          className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 mb-12"
        >
          Trusted Brands We<br />Partner With...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-0"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-center"
            >
              <span className={`px-6 py-3 ${brand.style}`}>{brand.name}</span>
              {index < brands.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-gray-400 mx-2" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
