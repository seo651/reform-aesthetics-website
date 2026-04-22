import { motion } from 'framer-motion';
import { SectionBadge } from '@/components/SectionBadge';

const brands = [
  { name: 'Bocouture',    src: '/images/brand-bocouture.png',  h: 48 },
  { name: 'Cellenis PRP', src: '/images/brand-cellenis.png',   h: 52 },
  { name: 'Enerpeel',     src: '/images/brand-enerpeel.png',   h: 56 },
  { name: 'DermaFocus',   src: '/images/brand-derma.png',      h: 50 },
  { name: 'Profhilo',     src: '/images/brand-profhilo.png',   h: 40 },
];

// Duplicate for seamless infinite loop
const track = [...brands, ...brands];

export function BrandsSection() {
  return (
    <section className="relative bg-[#efeae7] rounded-t-[3rem] -mt-8 pt-16 pb-20">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
          className="text-3xl sm:text-4xl lg:text-[44px] mt-6 mb-12 text-black"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
        >
          Trusted Brands We<br />Partner With...
        </motion.h2>
      </div>

      {/* Infinite scroll marquee — full width, no horizontal padding */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#efeae7] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#efeae7] to-transparent" />

        <div
          className="flex items-center gap-0 w-max"
          style={{
            animation: 'marquee 28s linear infinite',
          }}
        >
          {track.map((brand, index) => (
            <div key={index} className="flex items-center flex-shrink-0">
              <div className="px-10 py-2 flex items-center justify-center">
                <img
                  src={brand.src}
                  alt={brand.name}
                  style={{ height: brand.h, width: 'auto' }}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  draggable={false}
                />
              </div>
              {/* Divider */}
              <div className="w-px h-8 bg-gray-400/40 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe for marquee */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
