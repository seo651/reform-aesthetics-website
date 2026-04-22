import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const galleryImages = [
  { id: 1, src: '/images/clinic-treatment-room.jpg', alt: 'Treatment room' },
  { id: 2, src: '/images/clinic-waiting-1.jpg', alt: 'Clinic waiting area' },
  { id: 3, src: '/images/clinic-signage.jpg', alt: 'Reform Aesthetics and Dental' },
  { id: 4, src: '/images/clinic-skin-scanner.jpg', alt: '3D skin scanner consultation' },
  { id: 5, src: '/images/clinic-waiting-2.jpg', alt: 'Clinic lounge area' },
  { id: 6, src: '/images/gallery-5.jpg', alt: 'Reform Aesthetics clinic' },
  { id: 7, src: '/images/gallery-6.jpg', alt: 'Reform Aesthetics clinic interior' },
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header row: badge+h2 left | description + button right */}
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 text-center lg:text-left">
            <div className="lg:max-w-xs">
              <div className="flex justify-center lg:justify-start">
                <SectionBadge text="GALLERY" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] mt-4 leading-tight text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Take a Look<br />Inside Our Clinic
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:max-w-lg lg:pt-6">
              <p className="text-[#363636] text-sm leading-relaxed font-sans flex-1">
                Take a glimpse inside our clinic and the space where your treatments happen. Explore real results achieved by our team, and book a consultation to start your journey.
              </p>
              <a
                href="/gallery"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-[#363636] transition-colors whitespace-nowrap flex-shrink-0 font-sans"
              >
                SEE GALLERY
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Image grid */}
        <AnimatedSection delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
            >
              {[0, 1, 2].map((offset) => {
                const imgIndex = (currentIndex + offset) % galleryImages.length;
                return (
                  <div key={imgIndex} className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={galleryImages[imgIndex].src}
                      alt={galleryImages[imgIndex].alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows — centered */}
          <div className="flex justify-center gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-[#363636]" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-[#363636]" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
