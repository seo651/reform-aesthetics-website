import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ContactSection } from '@/sections/ContactSection';

/* ── Clinic gallery images (no duplicates) ── */
const clinicImages = [
  { src: '/images/clinic-signage.jpg', alt: 'Reform Aesthetics and Dental' },
  { src: '/images/clinic-waiting-1.jpg', alt: 'Clinic waiting area' },
  { src: '/images/gallery-5.jpg', alt: 'Reform Aesthetics and Dental clinic' },
  { src: '/images/clinic-treatment-room.jpg', alt: 'Treatment room' },
  { src: '/images/clinic-waiting-2.jpg', alt: 'Clinic lounge area' },
  { src: '/images/gallery-6.jpg', alt: 'Reform Aesthetics and Dental interior' },
  { src: '/images/clinic-skin-scanner.jpg', alt: '3D skin scanner consultation' },
];

/* ── Aesthetics cases ── */
const aestheticsCases = [
  {
    id: 1,
    service: 'Anti-Wrinkle Treatments',
    description: 'Smooth, natural-looking results achieved with anti-wrinkle injections. Treatment targeting forehead lines and crow\'s feet for a refreshed, youthful appearance.',
    image: '/images/aesthetics-anti-wrinkle.jpg',
  },
  {
    id: 2,
    service: 'Lymphatic Drainage Massage',
    description: 'Gentle lymphatic drainage massage supporting detoxification, reducing fluid retention and promoting a sculpted, revitalised appearance.',
    image: '/images/aesthetics-lymphatic-1.jpg',
  },
  {
    id: 3,
    service: 'Lymphatic Drainage Massage',
    description: 'Our therapeutic lymphatic massage treatments help reduce puffiness, improve circulation and restore a healthy, radiant glow.',
    image: '/images/aesthetics-lymphatic-2.jpg',
  },
  {
    id: 4,
    service: 'Lymphatic Drainage Massage',
    description: 'Professional lymphatic drainage massage delivering visible improvements in skin tone, contouring and overall wellness.',
    image: '/images/aesthetics-lymphatic-3.jpg',
  },
  {
    id: 5,
    service: 'PRP Treatment',
    description: 'Platelet-Rich Plasma therapy harnessing your body\'s own regenerative power to stimulate collagen, improve skin texture and restore a youthful glow.',
    image: '/images/aesthetics-prp-1.jpg',
  },
  {
    id: 6,
    service: 'PRP Treatment',
    description: 'PRP rejuvenation delivering natural, gradual improvements in skin quality, tone and radiance with minimal downtime.',
    image: '/images/aesthetics-prp-2.jpg',
  },
  {
    id: 7,
    service: 'Skin Boosters',
    description: 'Before and after skin booster treatment — deeply hydrating injectable treatments that restore elasticity and deliver a luminous, healthy-looking complexion.',
    image: '/images/aesthetics-skin-boosters.webp',
  },
];

/* ── Gallery icon SVG ── */
function GalleryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'aesthetics' | 'clinic'>('clinic');

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/clinic-treatment-room.jpg"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          {/* Breadcrumb pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-[#c4a882]" />
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/95 text-[11px] font-sans font-medium tracking-[0.12em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882] flex-shrink-0" />
              <span className="text-gray-500">HOME</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-semibold">GALLERY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882] flex-shrink-0" />
            </span>
            <div className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-[#c4a882]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[54px] text-white leading-[1.15] mb-5"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Our Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-sans leading-relaxed"
          >
            Discover the incredible results our patients have achieved with Reform Aesthetics and Dental.
            Browse through real results and explore our beautiful clinic.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="https://pearlportal.net/Portal/rad/OnlineBooking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EDE8E2] text-gray-900 text-[12px] font-sans font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-sm"
          >
            ARRANGE YOUR CONSULTATION
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </section>

      {/* ── 2. GALLERY CONTENT ── */}
      <section className="relative bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* ── Tab switcher card ── */}
          <div className="border border-[#c4a882] rounded-2xl overflow-hidden grid grid-cols-2 mb-10 shadow-sm">
            <button
              onClick={() => setActiveTab('aesthetics')}
              className={`flex flex-col items-center justify-center gap-2 py-6 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase transition-colors ${
                activeTab === 'aesthetics'
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-white text-gray-500 hover:bg-[#EDE8E2]'
              }`}
            >
              <GalleryIcon />
              AESTHETICS GALLERY
            </button>
            <button
              onClick={() => setActiveTab('clinic')}
              className={`flex flex-col items-center justify-center gap-2 py-6 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase transition-colors ${
                activeTab === 'clinic'
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-white text-gray-500 hover:bg-[#EDE8E2]'
              }`}
            >
              <GalleryIcon />
              CLINIC GALLERY
            </button>
          </div>

          {/* ── CLINIC GALLERY TAB ── */}
          <AnimatePresence mode="wait">
            {activeTab === 'clinic' && (
              <motion.div
                key="clinic"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className="text-[38px] sm:text-[48px] text-gray-900 mb-4 leading-tight"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  Clinic Gallery
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-sans max-w-3xl mb-8">
                  Step inside Reform Aesthetics and Dental. Our clinic is designed to be a calm, welcoming space where you feel at ease from the moment you arrive. Explore our treatment rooms, reception area and consultation spaces.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clinicImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.06 * idx }}
                      className="aspect-[4/3] rounded-2xl overflow-hidden group bg-gray-100"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── AESTHETICS GALLERY TAB ── */}
            {activeTab === 'aesthetics' && (
              <motion.div
                key="aesthetics"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className="text-[38px] sm:text-[48px] text-gray-900 mb-4 leading-tight"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  Aesthetics Gallery
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-sans max-w-3xl mb-8">
                  Discover the remarkable journeys of our patients as they achieve brighter, healthier skin. Each transformation showcases the skill and care our team provides, helping you envision the possibilities for your own treatment.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {aestheticsCases.map((c, idx) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.08 * idx }}
                      className="rounded-2xl overflow-hidden group bg-gray-100"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={c.image}
                          alt={c.service}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 bg-white">
                        <p className="text-gray-900 text-sm font-sans font-semibold mb-1">{c.service}</p>
                        <p className="text-gray-500 text-xs font-sans leading-relaxed">{c.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ── 3. CONTACT ── */}
      <ContactSection />
    </>
  );
}
