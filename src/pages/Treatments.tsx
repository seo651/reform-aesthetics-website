import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/sections/CTASection';

/* ─────────────────────────────── FAQ ─────────────────────────────── */
const faqs = [
  {
    question: 'What does the treatment involve?',
    answer:
      'Anti-wrinkle injections use a purified protein to temporarily relax specific facial muscles. The procedure is quick, typically taking 15-30 minutes, and involves a series of small injections into targeted areas.',
  },
  {
    question: 'What is the result?',
    answer:
      'Results typically appear within 3-7 days, with full effects visible after 2 weeks. You can expect smoother, more youthful-looking skin with a natural appearance. Results generally last 3-4 months.',
  },
  {
    question: 'Side effects?',
    answer:
      'Side effects are generally mild and temporary. They may include slight redness, swelling, or bruising at the injection site. These usually resolve within a few hours to a couple of days.',
  },
  {
    question: 'What areas can be treated with Anti Wrinkle Treatments?',
    answer:
      "Common treatment areas include forehead lines, frown lines (between the eyebrows), and crow's feet (around the eyes). We can also treat bunny lines, chin dimpling, and neck bands.",
  },
  {
    question: 'What is Hyperhidrosis?',
    answer:
      'Hyperhidrosis is a condition characterised by excessive sweating. Anti-wrinkle injections can be used to treat this by blocking the nerve signals that stimulate sweat glands, particularly in the underarms.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EDE8E2]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionBadge text="FAQ'S" />
          <h2 className="font-times text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] mt-6 mb-10 text-gray-900">
            Clear Answers for Your Confidence
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              className="bg-white rounded-2xl overflow-hidden border border-white/60"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[15px] sm:text-base font-normal text-gray-900 pr-4 font-sans">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  {openIndex === idx ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-500 text-sm leading-relaxed font-sans">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Gallery ─────────────────────────────── */
const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/cta-bg.jpg',
  '/images/hero-bg.jpg',
  '/images/service-anti-wrinkle.jpg',
];

function TreatmentGallery() {
  const [startIdx, setStartIdx] = useState(0);
  const visible = galleryImages.slice(startIdx, startIdx + 3);

  const next = () =>
    setStartIdx((prev) => (prev + 3 >= galleryImages.length ? 0 : prev + 3));
  const prev = () =>
    setStartIdx((prev) =>
      prev - 3 < 0 ? Math.max(galleryImages.length - 3, 0) : prev - 3
    );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10">
          <div className="lg:max-w-xs">
            <SectionBadge text="GALLERY" />
            <h2 className="font-times text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] mt-5 text-gray-900">
              Take a Look Inside Our Clinic
            </h2>
          </div>
          <div className="flex items-start gap-6 lg:max-w-md lg:pt-4">
            <p className="text-gray-500 text-sm leading-relaxed font-sans">
              Every face tells a story. Explore real treatment outcomes achieved at Reform Aesthetics
              and Dental. If you're considering dermal fillers and would like to discuss your goals,
              book a personalised consultation with our team.
            </p>
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-900 text-xs font-semibold tracking-wider uppercase whitespace-nowrap hover:bg-gray-900 hover:text-white transition-colors flex-shrink-0"
            >
              SEE GALLERY
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Gallery images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {visible.map((src, idx) => (
            <motion.div
              key={startIdx + idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100"
            >
              <img
                src={src}
                alt={`Clinic gallery ${startIdx + idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation arrows — left aligned per PDF */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Contact ─────────────────────────────── */
const contactHours = [
  'Monday: Closed',
  'Tuesday: 8:30 am – 5:30 pm',
  'Wednesday: Closed',
  'Thursday: Closed',
  'Friday: 8:30 am – 5:30 pm',
  'Saturday: 10:00 am – 3:00 pm',
  'Sunday: 10:00 am – 3:00 pm',
];

function TreatmentContact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Map */}
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.6!2d-1.1305!3d52.6293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e1e1e1e1e1e1%3A0x0!2zNTLCsDM3JzQ1LjUiTiAxwrAwNyc1MC4wIlc!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Reform Clinic Location"
                className="absolute inset-0"
              />

              {/* Overlay cards at bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
                <div className="bg-black/85 backdrop-blur-sm text-white rounded-xl px-5 py-4 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-[#c4a882]" />
                    <span className="text-sm font-medium font-sans">Opening Hours</span>
                  </div>
                  <div className="space-y-1">
                    {contactHours.map((h, i) => (
                      <p key={i} className="text-white/70 text-xs font-sans">
                        {h}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="bg-black/85 backdrop-blur-sm text-white rounded-xl px-5 py-4 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-4 h-4 text-[#c4a882]" />
                    <span className="text-sm font-medium font-sans">Contact Information</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/70 text-xs font-sans font-semibold uppercase tracking-wider">
                      PHONE:
                    </p>
                    <a
                      href="tel:01163800318"
                      className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors font-sans"
                    >
                      0116 3800318
                    </a>
                    <p className="text-white/70 text-xs font-sans font-semibold uppercase tracking-wider pt-1">
                      EMAIL ADDRESS:
                    </p>
                    <a
                      href="mailto:info@reformmedical.co.uk"
                      className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors font-sans"
                    >
                      info@reformmedical.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-sm">
              <div className="mb-6">
                <SectionBadge text="CONTACT US" />
                <h2 className="font-times text-2xl sm:text-3xl lg:text-[36px] leading-tight mt-4 text-gray-900">
                  Get in touch with us
                </h2>
              </div>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll be in touch.");
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5 font-sans">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5 font-sans">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors font-sans"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5 font-sans">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5 font-sans">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors font-sans"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5 font-sans">
                    I am interested in...
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors text-gray-500 appearance-none bg-white font-sans">
                    <option value="">I am interested in...</option>
                    <option>Anti-Wrinkle Injections</option>
                    <option>Dermal Fillers</option>
                    <option>Skin Peels</option>
                    <option>Skin Boosters</option>
                    <option>Polynucleotides</option>
                    <option>Signature Facials</option>
                    <option>General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5 font-sans">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your problems and how we can help you..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors resize-none font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gray-900 text-white text-sm font-semibold tracking-wider uppercase hover:bg-black transition-colors font-sans"
                >
                  SUBMIT MESSAGE
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Benefits icons (line-art SVG matching PDF) ─────────────────────────── */
function IconFace() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="20" cy="20" r="14" />
      <path d="M14 24s2 4 6 4 6-4 6-4" strokeLinecap="round" />
      <circle cx="15" cy="18" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="25" cy="18" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M20 5l11 4v8c0 7-5 12-11 14-6-2-11-7-11-14V9l11-4z" />
      <path d="M15 20l4 4 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="20" cy="20" r="14" />
      <path d="M20 12v9l5 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M20 30s-12-7-12-16a7 7 0 0 1 12-5 7 7 0 0 1 12 5c0 9-12 16-12 16z" />
    </svg>
  );
}

/* ─────────────────────────────── Main Page ─────────────────────────────── */
export default function Treatments() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/treatments-hero.jpg"
            alt="Treatments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full text-center">
          {/* Breadcrumb pill + gold lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-[#c4a882]" />
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-medium tracking-[0.12em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882]" />
              <span className="text-gray-600">HOME</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-semibold">ANTI-WRINKLE INJECTIONS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882]" />
            </span>
            <div className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-[#c4a882]" />
          </motion.div>

          {/* H1 — Times New Roman 400 italic */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="italic text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.15] mb-6"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Anti-wrinkle injections
          </motion.h1>

          {/* Description — sans-serif 400 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
          >
            An injectable solution that uses a purified protein to gently relax muscles, helping to
            smooth the appearance of wrinkles and fine lines.
          </motion.p>

          {/* CTA — cream pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#EDE8E2] text-gray-900 text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-md font-sans"
            >
              ARRANGE YOUR CONSULTATION
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── About Anti-Wrinkle — cream overlap ── */}
      <section className="relative bg-[#EDE8E2] rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-16 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <AnimatedSection>
              <SectionBadge text="ABOUT ANTI WRINKLE INJECTIONS" />

              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] mt-6 mb-6 text-gray-900"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Smooth Away Fine Lines with Expert Anti-Wrinkle Injections
              </h2>

              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 font-sans">
                Reclaim a youthful, refreshed appearance with our professionally administered
                anti-wrinkle injections. At Reform Skincare, we use precise techniques and premium
                products to soften expression lines and prevent the formation of new wrinkles —
                delivering natural-looking results you'll love.
              </p>

              {/* Checklist */}
              <div className="space-y-0">
                {[
                  'Restore a Smoother, More Youthful Look',
                  'Minimize Forehead Lines, Frown Lines & Crow\'s Feet',
                  'Quick, Non-Surgical Procedure with Minimal Downtime',
                  'Trusted, Medically Trained Skincare Professionals',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className="flex items-center gap-4 py-5 border-b border-gray-300/60 last:border-b-0"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9D8A7B] flex-shrink-0" />
                    <span className="text-gray-800 font-sans text-[15px]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — circular before/after + brand logo cards */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center">

                {/* Circular frame with thick tan ring */}
                <div className="relative w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] mb-8">
                  {/* Thick tan/gold ring */}
                  <div className="absolute inset-0 rounded-full border-[18px] border-[#c4a882]/35" />
                  {/* Image fills inside the ring */}
                  <div className="absolute inset-[18px] rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="/images/treatments-beforeafter.jpg"
                      alt="Before and after anti-wrinkle treatment"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Horizontal divider */}
                <div className="w-full max-w-[440px] h-px bg-gray-300 mb-6" />

                {/* Brand logo marquee — all 5 home page logos */}
                <div className="w-full max-w-[440px] relative overflow-hidden">
                  {/* Left fade */}
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-[#EDE8E2] to-transparent" />
                  {/* Right fade */}
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-[#EDE8E2] to-transparent" />

                  <div
                    className="flex items-center gap-0 w-max"
                    style={{ animation: 'marquee-treatment 20s linear infinite' }}
                  >
                    {[
                      { src: '/images/brand-bocouture.png', alt: 'Bocouture',    h: 36 },
                      { src: '/images/brand-cellenis.png',  alt: 'Cellenis PRP', h: 38 },
                      { src: '/images/brand-enerpeel.png',  alt: 'Enerpeel',     h: 42 },
                      { src: '/images/brand-derma.png',     alt: 'DermaFocus',   h: 38 },
                      { src: '/images/brand-profhilo.png',  alt: 'Profhilo',     h: 30 },
                      { src: '/images/brand-bocouture.png', alt: 'Bocouture2',   h: 36 },
                      { src: '/images/brand-cellenis.png',  alt: 'Cellenis2',    h: 38 },
                      { src: '/images/brand-enerpeel.png',  alt: 'Enerpeel2',    h: 42 },
                      { src: '/images/brand-derma.png',     alt: 'DermaFocus2',  h: 38 },
                      { src: '/images/brand-profhilo.png',  alt: 'Profhilo2',    h: 30 },
                    ].map((brand, idx) => (
                      <div key={idx} className="flex items-center flex-shrink-0">
                        <div className="px-6 py-3 flex items-center justify-center">
                          <img
                            src={brand.src}
                            alt={brand.alt}
                            style={{ height: brand.h, width: 'auto' }}
                            className="object-contain opacity-80"
                            draggable={false}
                          />
                        </div>
                        <div className="w-px h-6 bg-gray-300 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                  <style>{`
                    @keyframes marquee-treatment {
                      0%   { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  `}</style>
                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Book a Visit CTA ── */}
      <CTASection />

      {/* ── Benefits Section ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left image */}
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="/images/service-anti-wrinkle.jpg"
                  alt="Anti-wrinkle treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Right content */}
            <AnimatedSection delay={0.2}>
              <SectionBadge text="BENEFITS" />

              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] mt-6 mb-5 text-gray-900"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Renew your look, refresh your confidence.
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans">
                "Welcome to Reform Aesthetics and Dental. I am Dr Priya Sonia Patel the founder of
                Reform Aesthetics and Dental. I have been working as a Dental Surgeon since 2007 and
                developed a specialist interest in aesthetic medicine."
              </p>

              {/* 2×2 Benefits grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {[
                  {
                    Icon: IconFace,
                    title: 'Smoother, More Youthful-Looking Skin',
                    desc: 'Anti-wrinkle injections significantly reduce the appearance of fine lines and wrinkles',
                  },
                  {
                    Icon: IconShield,
                    title: 'A Preventative Approach to Aging',
                    desc: 'Beyond simply treating existing wrinkles, these injections can be a powerful preventative tool.',
                  },
                  {
                    Icon: IconClock,
                    title: 'Quick, Convenient, and Minimally Invasive',
                    desc: 'The procedure for anti-wrinkle injections is very fast, often taking only about 15-30 minutes, and requires no downtime.',
                  },
                  {
                    Icon: IconHeart,
                    title: 'Boosts Confidence and Self-Esteem',
                    desc: 'Feeling good about your appearance can have a positive impact on your overall confidence.',
                  },
                ].map(({ Icon, title, desc }, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className=""
                  >
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 text-gray-600">
                      <Icon />
                    </div>
                    <h3
                      className="text-base sm:text-lg mb-2 leading-snug text-gray-900"
                      style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                    >
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── Gallery ── */}
      <TreatmentGallery />

      {/* ── Contact ── */}
      <TreatmentContact />
    </>
  );
}
