import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactSection } from '@/sections/ContactSection';

/* ── Team data ── */
const featuredDoctor = {
  name: 'Dr. Priya Patel',
  title: 'Founder & Lead Doctor – Reform Aesthetics and Dental Clinic',
  bio: [
    'Welcome to Reform Aesthetics and Dental. I am Dr Priya Sonia Patel the founder of Reform Aesthetics and Dental. I have been working as a Dental Surgeon since 2007 and developed a specialist interest in Aesthetic Medicine since 2010.',
    'In addition to working in Aesthetic Medicine I also work as an Expert Aesthetic Trainer for Cosmetic Courses whereby I train other medical professionals who are keen to perform aesthetic procedures and work alongside the top Plastic surgeons.',
    'This opportunity has allowed me to further develop my passion in aesthetics and rejuvenation techniques and pass on my skills and expertise to other medical professionals',
  ],
  image: '/images/team-priya.jpg',
};

const otherMembers = [
  {
    id: 1,
    name: 'Shyam Nansi',
    credentials: 'MPharm, MRPharmS, Certified Nutritionist',
    bio: [
      'Shyam is our in-house certified nutritionist who brings to Reform a wealth of expertise in health and nutrition and overall wellbeing. He also specialises in weight loss management providing personalised nutrition plans which instils lasting results suited to your lifestyle.',
      'He also has experience in helping women navigate the physiological changes aswell as physical challenges that come with women of a menopausal age group.',
      '"With 18 years of dedication to fitness and a deep passion for nutrition, my guidance and knowledge can help fuel your goals. Combining my expertise as a nutritionist and pharmacist, I deliver a professional coaching experience designed to fit seamlessly into your lifestyle and unlock your full potential. Lets work together to achieve your goals, transform your health and create a plan that works for you"',
    ],
    image: '/images/team-priya.jpg',
    isQuote: [false, false, true],
  },
  {
    id: 2,
    name: 'Rae McNeill',
    credentials: 'Aesthetic Practitioner',
    bio: [
      'Rae is a highly skilled aesthetic practitioner at Reform Aesthetics and Dental, passionate about helping clients achieve their aesthetic goals through safe and effective treatments.',
      'With a keen eye for detail and a patient-first approach, Rae ensures every client feels comfortable and confident throughout their treatment journey.',
    ],
    image: '/images/team-priya.jpg',
    isQuote: [false, false],
  },
  {
    id: 3,
    name: 'Dr Michelle Egan',
    credentials: 'Doctor – Aesthetic Medicine',
    bio: [
      'Dr Michelle Egan is an experienced medical doctor specialising in aesthetic medicine at Reform Aesthetics and Dental.',
      'Dr Egan brings a wealth of clinical expertise to the clinic, combining medical knowledge with an artistic eye to deliver natural, beautiful results for every patient.',
    ],
    image: '/images/team-priya.jpg',
    isQuote: [false, false],
  },
];

export default function Doctors() {
  const [activeId, setActiveId] = useState(1);
  const activeMember = otherMembers.find((m) => m.id === activeId) || otherMembers[0];

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Reform Skin Clinic"
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
              <span className="text-gray-900 font-semibold">DOCTORS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882] flex-shrink-0" />
            </span>
            <div className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-[#c4a882]" />
          </motion.div>

          {/* H1 — Times New Roman 400 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[56px] text-white leading-[1.15] mb-5"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Advanced Skin Care You Can Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans leading-relaxed"
          >
            Experience tranquillity and excellence at Reform Skin Clinic. Our modern aesthetics
            practice in Leicester provides a serene, spa-like environment, ensuring you feel
            relaxed, cared for, and confident throughout your skin health journey.
          </motion.p>

          {/* CTA cream pill */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EDE8E2] text-gray-900 text-[12px] font-sans font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-sm"
          >
            ARRANGE YOUR CONSULTATION
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </section>

      {/* ── 2. FEATURED DOCTOR — cream overlap section ── */}
      <section className="relative bg-[#EDE8E2] rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-16 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — text */}
            <AnimatedSection>
              <SectionBadge text="Team Member" />
              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] mt-6 mb-6 leading-[1.15] text-gray-900"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Your trusted skin clinic in Leicester, specialising in advanced treatments and
                natural results
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                We are an independent skin and aesthetics clinic in Leicester, dedicated to helping
                clients achieve healthy, radiant skin. Our team provides advanced, medical-grade
                treatments tailored to your unique needs — all delivered in a welcoming,
                professional environment.
              </p>
            </AnimatedSection>

            {/* Right — Dr Priya photo */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={featuredDoctor.image}
                  alt={featuredDoctor.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3. OTHER TEAM MEMBERS — sidebar tabs + content ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[180px_1fr] gap-10">

            {/* Sidebar tabs */}
            <AnimatedSection>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {otherMembers.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setActiveId(member.id)}
                    className={`px-4 py-2.5 rounded-full text-sm font-sans whitespace-nowrap transition-all text-left ${
                      activeId === member.id
                        ? 'bg-[#EDE8E2] text-gray-900 font-medium'
                        : 'bg-transparent text-gray-500 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {member.name}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Member content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-[1fr_260px] gap-10 items-start"
              >
                {/* Text */}
                <div>
                  <SectionBadge text="Team Member" />
                  <h2
                    className="text-3xl sm:text-[40px] mt-4 mb-1 text-gray-900 leading-tight"
                    style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                  >
                    {activeMember.name}
                  </h2>
                  <p className="text-sm font-sans font-semibold text-gray-600 mb-6">
                    {activeMember.credentials}
                  </p>

                  <div className="space-y-4">
                    {activeMember.bio.map((para, i) => (
                      activeMember.isQuote[i] ? (
                        <p
                          key={i}
                          className="text-gray-500 text-sm leading-relaxed font-sans italic border-l-2 border-[#c4a882] pl-4"
                        >
                          {para}
                        </p>
                      ) : (
                        <p key={i} className="text-gray-500 text-sm leading-relaxed font-sans">
                          {para}
                        </p>
                      )
                    ))}
                  </div>
                </div>

                {/* Photo */}
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 4. CONTACT ── */}
      <ContactSection />
    </>
  );
}
