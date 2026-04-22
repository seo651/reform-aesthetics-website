import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactSection } from '@/sections/ContactSection';
import { teamMembers } from '@/sections/TeamSection';

// Featured = Dr Priya (id 1), rest in sidebar tabs
const featured = teamMembers[0];
const sidebarMembers = teamMembers.slice(1);

export default function Doctors() {
  const [activeId, setActiveId] = useState(sidebarMembers[0].id);
  const activeMember = sidebarMembers.find((m) => m.id === activeId) || sidebarMembers[0];

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-doctors.jpg" alt="Reform Skin Clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          {/* Breadcrumb pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[56px] text-white leading-[1.15] mb-5"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Advanced Skin Care You Can Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans leading-relaxed"
          >
            Meet the experienced team behind Reform Aesthetics and Dental. Every member is dedicated
            to delivering exceptional, personalised care in a professional and welcoming environment.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EDE8E2] text-gray-900 text-[12px] font-sans font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors shadow-sm"
          >
            ARRANGE YOUR CONSULTATION
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </section>

      {/* ── 2. FEATURED — Dr Priya, cream overlap ── */}
      <section className="relative bg-[#EDE8E2] rounded-t-[2.5rem] sm:rounded-t-[3rem] -mt-8 z-20 pt-16 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left text */}
            <AnimatedSection>
              <SectionBadge text="Team Member" />
              <h2
                className="text-3xl sm:text-[40px] mt-4 mb-1 text-gray-900 leading-tight"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                {featured.name}
              </h2>
              <p className="text-sm font-sans font-semibold text-gray-800 mb-0.5">{featured.role}</p>
              <p className="text-xs font-sans text-gray-500 mb-6">{featured.title}</p>
              <div className="space-y-4">
                {featured.bio.map((para, i) => (
                  <p key={i} className="text-gray-500 text-sm leading-relaxed font-sans">
                    {para.content}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Right photo */}
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <div className="rounded-2xl overflow-hidden w-full max-w-[340px] aspect-[3/4]">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover object-top"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3. OTHER TEAM MEMBERS — sidebar tabs ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-10">

            {/* Sidebar tabs */}
            <AnimatedSection>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {sidebarMembers.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setActiveId(member.id)}
                    className={`px-4 py-2.5 rounded-full text-[13px] font-sans whitespace-nowrap transition-all text-left ${
                      activeId === member.id
                        ? 'bg-[#EDE8E2] text-gray-900 font-semibold'
                        : 'bg-transparent text-gray-500 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {member.name}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Active member panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-[1fr_260px] gap-10 items-start"
              >
                {/* Text */}
                <div>
                  <SectionBadge text="Team Member" />
                  <h2
                    className="text-3xl sm:text-[38px] mt-4 mb-1 text-gray-900 leading-tight"
                    style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                  >
                    {activeMember.name}
                  </h2>
                  <p className="text-sm font-sans font-semibold text-gray-800 mb-0.5">
                    {activeMember.role}
                  </p>
                  {activeMember.title && (
                    <p className="text-xs font-sans text-gray-500 mb-5">{activeMember.title}</p>
                  )}
                  {!activeMember.title && <div className="mb-5" />}

                  <div className="space-y-4">
                    {activeMember.bio.map((para, i) =>
                      para.type === 'quote' ? (
                        <p key={i} className="text-gray-500 text-sm leading-relaxed font-sans italic border-l-2 border-[#c4a882] pl-4">
                          {para.content}
                        </p>
                      ) : (
                        <p key={i} className="text-gray-500 text-sm leading-relaxed font-sans">
                          {para.content}
                        </p>
                      )
                    )}
                  </div>
                </div>

                {/* Photo */}
                <div className="flex justify-center md:justify-end">
                  <div className="rounded-2xl overflow-hidden w-full max-w-[260px] aspect-[3/4]">
                    <img
                      src={activeMember.image}
                      alt={activeMember.name}
                      className="w-full h-full object-cover object-top"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
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
