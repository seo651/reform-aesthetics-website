import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Users, Stethoscope, Shield, Award, Sparkles } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { TeamSection } from '@/sections/TeamSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ContactSection } from '@/sections/ContactSection';

const values = [
  {
    icon: Shield,
    title: 'Comfort-First Philosophy',
    description: 'Your comfort is our priority. From the moment you arrive, we create a calm, welcoming space so you feel relaxed and confident.',
    image: '/images/gallery-1.jpg',
  },
  {
    icon: Users,
    title: 'Transparent Communication',
    description: 'We explain every step clearly, answer all your questions, and create personalised plans so you always know what to expect.',
    image: '/images/gallery-2.jpg',
  },
  {
    icon: Award,
    title: 'Expert-Led Treatments',
    description: 'Our qualified professionals use advanced techniques and trusted products, ensuring you receive the highest standard of care.',
    image: '/images/gallery-3.jpg',
  },
  {
    icon: Sparkles,
    title: 'Patient-Centered Care',
    description: 'Every treatment plan is individually crafted around your unique needs, goals, and lifestyle for results that truly work for you.',
    image: '/images/cta-bg.jpg',
  },
];

const stats = [
  { number: '80+', label: 'Years of Combined Experience' },
  { number: '60+', label: 'Successful Transformations' },
  { number: '10+', label: 'Ongoing Patient Relationships' },
  { number: '220+', label: 'Ongoing Patient Memberships' },
  { number: '5+', label: 'Advanced Procedures Offered' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.jpg" alt="Reform Clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wider text-white/90 uppercase mb-6">
              <span>HOME</span>
              <span className="text-white/40">&gt;</span>
              <span>ABOUT US</span>
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Compassionate Skincare That Puts You First
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8"
          >
            Discover a calm, caring approach to skin health. We provide advanced treatments in a soothing
            environment to restore your glow, boost your confidence, and enhance your natural beauty.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-all"
          >
            ARRANGE YOUR CONSULTATION
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <SectionBadge text="About Us" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 leading-tight mb-6">
                Looking for trusted skincare professionals in Leicester?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We offer personalised, clinically proven skincare solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Reform Skincare, we take a results-driven approach to skin care. That's why we take time
                to understand your concerns and goals, creating treatment plans and techniques tailored to
                you. Whether you're dealing with acne, pigmentation, signs of ageing, or simply want
                to maintain a healthy, radiant complexion — our experienced team combines clinical
                science and care to bring out the best in your skin.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: Stethoscope, title: 'Tailored Full-Spectrum Skincare Solutions', desc: 'From acne and pigmentation to fine lines, we provide a complete range of skin solutions under one roof.' },
                  { icon: Heart, title: 'Relaxed Spa-Inspired Environment', desc: 'Our clinic combines clinical excellence with a soothing, spa-like atmosphere so you feel comfortable.' },
                  { icon: Award, title: 'Medical-Grade Products & Advanced Techniques', desc: 'We use clinically tested products with cutting-edge techniques to deliver safe, effective results.' },
                ].map((feature, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-5 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center lg:justify-between gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="relative px-4"
              >
                <span className="font-serif text-4xl sm:text-5xl">{stat.number}</span>
                <div className="mt-2 text-gray-600 text-xs sm:text-sm max-w-[140px] mx-auto">{stat.label}</div>
                {idx < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <SectionBadge text="What We Do" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 mb-6 leading-tight">
              Reform Aesthetics is an independently owned medical Aesthetics Clinic in Leicester city centre.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We specialise in advanced medical skin treatments designed to restore youth, rejuvenate and refresh your natural beauty in a safe
              and supportive environment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values / Philosophy Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="h-44 overflow-hidden">
                  <img src={value.image} alt={value.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-base mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Banner */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden" style={{ backgroundImage: 'url(/images/cta-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-6 sm:px-12 py-16 sm:py-20 text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 italic">
                Explore Our Services for Lasting Skin Health!
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Our experienced clinicians provide expertly delivered treatments designed to deeply hydrate,
                improve elasticity and restore luminous, healthy-looking skin.
              </p>
              <a href="/treatments" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-all">
                VIEW TREATMENTS
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact */}
      <ContactSection />
    </>
  );
}
