import { motion } from 'framer-motion';
import { SectionBadge } from '@/components/SectionBadge';

// Brands exactly as shown in the PDF homepage
const brands = [
  {
    name: 'SkinMed',
    render: () => (
      <span className="font-sans font-semibold tracking-wider text-gray-700 text-base italic">
        SkinMed
      </span>
    ),
  },
  {
    name: 'BELOTERO',
    render: () => (
      <span className="font-sans font-bold tracking-wider text-[#E87722] text-base uppercase">
        BELOTERO
      </span>
    ),
  },
  {
    name: 'DermaFocus',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#0056A4]" fill="currentColor">
          <circle cx="10" cy="10" r="8" opacity="0.2" />
          <circle cx="10" cy="10" r="5" opacity="0.5" />
          <circle cx="10" cy="10" r="2" />
        </svg>
        <span className="font-sans font-semibold tracking-wide text-gray-700 text-sm">
          DermaFocus
        </span>
        <span className="text-[9px] text-gray-400 font-sans block leading-none mt-1">
          SKINCARE SOLUTIONS
        </span>
      </div>
    ),
  },
  {
    name: 'Cellenis PRP',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#5c2d91]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
        </svg>
        <div>
          <span className="font-sans font-semibold tracking-wide text-gray-700 text-sm">
            Cellenis
          </span>
          <sup className="text-[9px] text-gray-400 font-sans">®</sup>
          <span className="font-sans font-bold text-gray-700 text-sm ml-1">PRP</span>
        </div>
      </div>
    ),
  },
  {
    name: 'PROFHILO',
    render: () => (
      <span className="font-sans font-bold tracking-[0.25em] text-gray-800 text-base uppercase">
        PROFHILO
      </span>
    ),
  },
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center"
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
              <div className="px-6 sm:px-8 py-3 flex items-center justify-center min-w-[100px]">
                {brand.render()}
              </div>
              {index < brands.length - 1 && (
                <div className="hidden sm:block w-px h-7 bg-gray-400/60" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
