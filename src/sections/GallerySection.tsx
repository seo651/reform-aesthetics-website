import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: 'Clinic waiting area' },
  { id: 2, src: '/images/gallery-2.jpg', alt: 'Reform clinic signage' },
  { id: 3, src: '/images/gallery-3.jpg', alt: 'Treatment room' },
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <SectionBadge text="Gallery" variant="dark" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
                Take a Look<br />Inside Our Clinic
              </h2>
            </div>
            <p className="text-gray-600 max-w-md lg:text-right">
              Every face tells a story. Explore real treatment outcomes achieved at Reform
              Aesthetics and Dental. If you're considering dermal fillers and would like to discuss
              your goals, book a personalised consultation with our team.
            </p>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] self-start lg:self-auto"
            >
              SEE GALLERY
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {[0, 1, 2].map((offset) => {
                    const imgIndex = (currentIndex + offset) % galleryImages.length;
                    return (
                      <div key={imgIndex} className="aspect-[4/3] rounded-xl overflow-hidden">
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
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
