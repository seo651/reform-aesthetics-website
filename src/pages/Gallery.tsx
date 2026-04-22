import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ContactSection } from '@/sections/ContactSection';

/* ── Filter categories (left sidebar) ── */
const filters = [
  'Dermal Fillers',
  'Anti-Wrinkle Injections',
  'Skin Peels',
  'Microneedling',
  'Skin Care',
  'Prothilo',
];

/* ── Before/After cases ── */
const aestheticsCases = [
  {
    id: 1,
    caseNum: '01',
    patient: 'Patient Name : Saikat Kundu',
    service: 'Dermal Fillers',
    category: 'Dermal Fillers',
    description:
      'Wow what an amazing transformation! In just 3 months this beautiful lady has had her smile made over. Doctor Robinson achieved this with the 6 month smiles brace system. This was then complimented with Zoom teeth whitening, preserving her own natural teeth. Great result!',
    image: '/images/team-priya.jpg',
  },
  {
    id: 2,
    caseNum: '02',
    patient: 'Patient Name : Saikat Kundu',
    service: 'Dermal Fillers',
    category: 'Dermal Fillers',
    description:
      'Wow what an amazing transformation! In just 3 months this beautiful lady has had her smile made over. Doctor Robinson achieved this with the 6 month smiles brace system. This was then complimented with Zoom teeth whitening, preserving her own natural teeth. Great result!',
    image: '/images/team-priya.jpg',
  },
  {
    id: 3,
    caseNum: '03',
    patient: 'Patient Name : Saikat Kundu',
    service: 'Dermal Fillers',
    category: 'Dermal Fillers',
    description:
      'Wow what an amazing transformation! In just 3 months this beautiful lady has had her smile made over. Doctor Robinson achieved this with the 6 month smiles brace system. This was then complimented with Zoom teeth whitening, preserving her own natural teeth. Great result!',
    image: '/images/team-priya.jpg',
  },
  {
    id: 4,
    caseNum: '04',
    patient: 'Patient Name : Saikat Kundu',
    service: 'Dermal Fillers',
    category: 'Dermal Fillers',
    description:
      'Wow what an amazing transformation! In just 3 months this beautiful lady has had her smile made over. Doctor Robinson achieved this with the 6 month smiles brace system. This was then complimented with Zoom teeth whitening, preserving her own natural teeth. Great result!',
    image: '/images/team-priya.jpg',
  },
  {
    id: 5,
    caseNum: '01',
    patient: 'Patient Name : Saikat Kundu',
    service: 'Anti-Wrinkle Injections',
    category: 'Anti-Wrinkle Injections',
    description:
      'Smooth, natural-looking results achieved with anti-wrinkle injections. Treatment targeting forehead lines and crow\'s feet for a refreshed, youthful appearance.',
    image: '/images/service-anti-wrinkle.jpg',
  },
  {
    id: 6,
    caseNum: '01',
    patient: 'Patient Name : Saikat Kundu',
    service: 'Skin Peels',
    category: 'Skin Peels',
    description:
      'A course of skin peels has transformed this patient\'s skin, reducing hyperpigmentation and improving skin texture and radiance.',
    image: '/images/gallery-1.jpg',
  },
];

/* ── Clinic gallery images ── */
const clinicImages = [
  { src: '/images/clinic-treatment-room.jpg', alt: 'Treatment room' },
  { src: '/images/clinic-waiting-1.jpg', alt: 'Clinic waiting area' },
  { src: '/images/clinic-signage.jpg', alt: 'Reform Aesthetics and Dental' },
  { src: '/images/clinic-skin-scanner.jpg', alt: '3D skin scanner consultation' },
  { src: '/images/clinic-waiting-2.jpg', alt: 'Clinic lounge area' },
  { src: '/images/gallery-5.jpg', alt: 'Reform Aesthetics clinic' },
  { src: '/images/gallery-6.jpg', alt: 'Reform Aesthetics clinic interior' },
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

/* ── Before/After image with centre divider + slider handle ── */
function BeforeAfterImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4]">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {/* Centre divider */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-px h-full bg-white/70" />
      </div>
      {/* Slider handle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
        <div className="flex items-center gap-0.5">
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
            <path d="M4 1L1 4.5L4 8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
            <path d="M1 1L4 4.5L1 8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'aesthetics' | 'clinic'>('aesthetics');
  const [activeFilter, setActiveFilter] = useState('Dermal Fillers');

  const filteredCases = aestheticsCases.filter((c) => c.category === activeFilter);

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
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
            Our Smile Transformations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-sans leading-relaxed"
          >
            Discover the incredible results our patients have achieved with Reform Aesthetics and Dental.
            Browse through real before-and-after photos showcasing the power of expert dental
            care and advanced cosmetic treatments.
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

      {/* ── 2. GALLERY CONTENT — cream overlap ── */}
      <section className="relative bg-[#EDE8E2] rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-0 pb-20">

        {/* Tab switcher — full width, no horizontal padding, flush to rounded top */}
        <div className="grid grid-cols-2 rounded-t-[2.5rem] sm:rounded-t-[3rem] overflow-hidden">
          <button
            onClick={() => setActiveTab('aesthetics')}
            className={`flex items-center justify-center gap-2.5 py-5 text-xs font-sans font-semibold tracking-[0.15em] uppercase transition-colors ${
              activeTab === 'aesthetics'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50'
            }`}
          >
            <GalleryIcon />
            AESTHETICS GALLERY
          </button>
          <button
            onClick={() => setActiveTab('clinic')}
            className={`flex items-center justify-center gap-2.5 py-5 text-xs font-sans font-semibold tracking-[0.15em] uppercase transition-colors ${
              activeTab === 'clinic'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50'
            }`}
          >
            <GalleryIcon />
            CLINIC GALLERY
          </button>
        </div>

        {/* ── AESTHETICS TAB ── */}
        {activeTab === 'aesthetics' && (
          <div className="px-4 sm:px-6 lg:px-8 pt-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[180px_1fr] gap-8">

                {/* Left sidebar — filter pills */}
                <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans whitespace-nowrap transition-all text-left ${
                        activeFilter === filter
                          ? 'bg-[#EDE8E2] text-gray-900 font-semibold border border-gray-300'
                          : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {/* Small icon circle */}
                      <span className="w-5 h-5 rounded-full border border-gray-300 bg-white flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 12 12" className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="6" cy="6" r="4" />
                        </svg>
                      </span>
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Right — cases list */}
                <div className="space-y-6">
                  {(filteredCases.length > 0 ? filteredCases : aestheticsCases.slice(0, 4)).map((c, idx) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.08 * idx }}
                      className="bg-white rounded-2xl overflow-hidden grid sm:grid-cols-[240px_1fr] shadow-sm"
                    >
                      {/* Before/After image */}
                      <div className="sm:h-full min-h-[220px]">
                        <BeforeAfterImage src={c.image} alt={c.patient} />
                      </div>

                      {/* Case info */}
                      <div className="p-6 lg:p-8 flex flex-col justify-center">
                        {/* Case badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 text-white text-[10px] font-sans font-semibold tracking-[0.15em] uppercase mb-4 self-start">
                          CASE {c.caseNum}
                        </div>

                        <h3
                          className="text-2xl sm:text-[28px] text-gray-900 mb-3 leading-tight"
                          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                        >
                          {c.patient}
                        </h3>

                        <p className="text-gray-500 text-sm leading-relaxed font-sans mb-4">
                          {c.description}
                        </p>

                        <p className="text-gray-700 text-sm font-sans">
                          <span className="font-semibold">Service:</span> {c.service}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ── CLINIC GALLERY TAB ── */}
        {activeTab === 'clinic' && (
          <div className="px-4 sm:px-6 lg:px-8 pt-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {clinicImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.07 * idx }}
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
            </div>
          </div>
        )}

      </section>

      {/* ── 3. CONTACT ── */}
      <ContactSection />
    </>
  );
}
