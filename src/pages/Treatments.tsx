import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Plus, Minus, Sparkles, Shield, Clock, Heart } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { CTASection } from '@/sections/CTASection';
import { ProcessSection } from '@/sections/ProcessSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ContactSection } from '@/sections/ContactSection';

const faqs = [
  {
    question: 'What does the treatment involve?',
    answer: 'Anti-wrinkle injections use a purified protein to temporarily relax specific facial muscles. The procedure is quick, typically taking 15-30 minutes, and involves a series of small injections into targeted areas.',
  },
  {
    question: 'What is the result?',
    answer: 'Results typically appear within 3-7 days, with full effects visible after 2 weeks. You can expect smoother, more youthful-looking skin with a natural appearance. Results generally last 3-4 months.',
  },
  {
    question: 'Side effects?',
    answer: 'Side effects are generally mild and temporary. They may include slight redness, swelling, or bruising at the injection site. These usually resolve within a few hours to a couple of days.',
  },
  {
    question: 'What areas can be treated with Anti Wrinkle Treatments?',
    answer: 'Common treatment areas include forehead lines, frown lines (between the eyebrows), and crow\'s feet (around the eyes). We can also treat bunny lines, chin dimpling, and neck bands.',
  },
  {
    question: 'What is Hyperhidrosis?',
    answer: 'Hyperhidrosis is a condition characterised by excessive sweating. Anti-wrinkle injections can be used to treat this by blocking the nerve signals that stimulate sweat glands, particularly in the underarms.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionBadge text="FAQ's" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] mt-6 mb-10">
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
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-serif text-[15px] sm:text-base font-medium text-gray-900 pr-4">{faq.question}</span>
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
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Treatments() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <img src="/images/service-anti-wrinkle.jpg" alt="Treatments" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full text-center">
          {/* Breadcrumb with decorative gold lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            {/* Left gold line */}
            <div className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-[#c4a882]" />

            {/* Breadcrumb pill */}
            <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/95 backdrop-blur-sm text-[12px] font-medium tracking-[0.15em] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c4a882]" />
              <span className="text-gray-700">HOME</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-semibold">ANTI-WRINKLE INJECTIONS</span>
              <span className="w-2 h-2 rounded-full bg-[#c4a882]" />
            </span>

            {/* Right gold line */}
            <div className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-[#c4a882]" />
          </motion.div>

          {/* Heading - italic serif */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.15] mb-6"
          >
            Anti-wrinkle injections
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            An injectable solution that uses a purified protein to gently relax muscles, helping to smooth the appearance of wrinkles and fine lines.
          </motion.p>

          {/* CTA Button - cream/beige pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#EDE8E2] text-gray-900 text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-md"
            >
              ARRANGE YOUR CONSULTATION
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Anti-Wrinkle Section */}
      <section className="relative bg-cream rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-16 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <AnimatedSection>
              <SectionBadge text="About Anti Wrinkle Injections" />

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] mt-6 mb-6">
                Smooth Away Fine Lines with Expert Anti-Wrinkle Injections
              </h2>

              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
                Reclaim a youthful, refreshed appearance with our professionally administered anti-wrinkle injections. At Reform
                Skincare, we use precise techniques and premium products to soften expression lines and prevent the formation of
                new wrinkles — delivering natural-looking results you'll love.
              </p>

              {/* Benefits list */}
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
                    className="flex items-center gap-4 py-5 border-b border-gray-200 last:border-b-0"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#9D8A7B] flex-shrink-0" />
                    <span className="text-gray-800 font-medium text-[15px]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right - Before/After Circle + Brand Logos */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center">
                {/* Circular before/after image with concentric rings */}
                <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] mb-10">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-[12px] border-[#c4a882]/20" />
                  {/* Middle ring */}
                  <div className="absolute inset-3 rounded-full border-[6px] border-[#c4a882]/30" />
                  {/* Inner image circle */}
                  <div className="absolute inset-6 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="/images/team-priya.jpg"
                      alt="Before and after"
                      className="w-full h-full object-cover"
                    />
                    {/* Center divider line */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-px h-full bg-white/80" />
                    </div>
                    {/* Slider handle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                      <div className="flex items-center gap-0.5">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M5 1L1 5L5 9" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand logos */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-[420px]">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#c4a882] to-transparent mb-4 rounded-full" />
                    <span className="text-[#0056A4] font-bold tracking-wider text-lg">
                      BO<span className="text-[#E87722]">COUTURE</span><sup className="text-[10px]">®</sup>
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#c4a882] to-transparent mb-4 rounded-full" />
                    <span className="text-gray-800 font-light tracking-[0.35em] text-xl">
                      MAILI<sup className="text-[10px] font-normal">®</sup>
                    </span>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Book a Visit CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[1.5rem] overflow-hidden">
            {/* Dark background image */}
            <div className="absolute inset-0">
              <img src="/images/cta-bg.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/65" />
            </div>

            <div className="relative z-10 px-6 sm:px-10 pt-10 pb-0 text-center">
              <SectionBadge text="Book A Visit" />
              <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight mt-5 mb-3">
                Explore Our Services for<br />Lasting Skin Health!
              </h2>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
                Our experienced clinicians provide expertly delivered skin booster treatments designed to deeply hydrate, improve
                elasticity and restore luminous, healthy-looking skin — all tailored specifically to you.
              </p>
            </div>

            {/* Form bar overlapping bottom */}
            <div className="relative z-10 px-6 sm:px-10 pb-0">
              <div className="bg-white rounded-t-2xl px-6 sm:px-8 py-6 shadow-lg">
                <p className="text-gray-800 text-sm font-medium mb-4">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We\'ll be in touch.'); }}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors bg-white"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-black text-white text-sm font-semibold tracking-wider uppercase hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    LETS TALK
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Image */}
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="/images/service-anti-wrinkle.jpg"
                  alt="Anti-wrinkle treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Right - Benefits Content */}
            <AnimatedSection delay={0.2}>
              <SectionBadge text="Benefits" />

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] mt-6 mb-5">
                Renew your look, refresh your confidence.
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 border-b border-gray-100 pb-8">
                "Welcome to Reform Aesthetics and Dental. I am Dr Priya Sonia Patel the founder of Reform Aesthetics
                and Dental. I have been working as a Dental Surgeon since 2007 and developed a specialist interest
                in aesthetic medicine."
              </p>

              {/* 2x2 Benefits Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {[
                  {
                    icon: Sparkles,
                    title: 'Smoother, More Youthful-Looking Skin',
                    desc: 'Anti-wrinkle injections significantly reduce the appearance of fine lines and wrinkles',
                  },
                  {
                    icon: Shield,
                    title: 'A Preventative Approach to Aging',
                    desc: 'Beyond simply treating existing wrinkles, these injections can be a powerful preventative tool.',
                  },
                  {
                    icon: Clock,
                    title: 'Quick, Convenient, and Minimally Invasive',
                    desc: 'The procedure for anti-wrinkle injections is very fast, often taking only about 15-30 minutes, and requires no downtime.',
                  },
                  {
                    icon: Heart,
                    title: 'Boosts Confidence and Self-Esteem',
                    desc: 'Feeling good about your appearance can have a positive impact on your overall confidence.',
                  },
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    className={idx < 2 ? 'pb-8 border-b border-gray-100' : ''}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <benefit.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-medium mb-2 leading-snug">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <ServicesSection />
      <CTASection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
