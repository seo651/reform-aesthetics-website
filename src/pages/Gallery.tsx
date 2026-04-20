import { motion } from 'framer-motion';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactSection } from '@/sections/ContactSection';

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Clinic waiting area' },
  { src: '/images/gallery-2.jpg', alt: 'Reform clinic signage' },
  { src: '/images/gallery-3.jpg', alt: 'Treatment room' },
  { src: '/images/cta-bg.jpg', alt: 'Clinic interior' },
  { src: '/images/hero-bg.jpg', alt: 'Reform exterior' },
  { src: '/images/service-anti-wrinkle.jpg', alt: 'Treatment in progress' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-2.jpg" alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wider text-white/90 uppercase mb-6">
              <span>HOME</span><span className="text-white/40">&gt;</span><span>GALLERY</span>
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Take a look inside our clinic and see real results from our treatments.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <SectionBadge text="Gallery" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 mb-4">Inside Reform Aesthetics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our modern clinic provides a calming, professional environment where you can feel relaxed and at ease during every visit.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
