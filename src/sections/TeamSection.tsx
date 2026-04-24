import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

export const teamMembers = [
  {
    id: 1,
    name: 'Dr Priya Sonia Patel',
    role: 'Principal Dentist & Aesthetic Doctor',
    title: 'Founder & Clinical Director at Reform Aesthetics and Dental',
    image: '/images/team-dr-priya.jpg',
    bio: [
      { type: 'text', content: 'Dr Priya Sonia Patel is an experienced Dental Surgeon and Aesthetic practitioner with a career spanning over 18 years. She began her professional journey in the UK before working in Singapore for several years, where she practised private dentistry and aesthetics. In 2021 she returned to the UK when she later established Reform Aesthetics and Dental in 2024.' },
      { type: 'text', content: 'Combining clinical precision with a refined aesthetic fluency, Dr Priya is dedicated to delivering natural, harmonious results through evidence-based techniques. Her expertise extends beyond practice and her passion in Aesthetics has lead to her also working as a trainer for a renowned international training Academy - Derma Medical, where she educates and mentors other medical professionals in Aesthetic procedures.' },
      { type: 'text', content: "Dr Priya's approach embodies professionalism, innovation, and uncompromising care, ensuring every patient receives exceptional, tailored treatment in a bespoke and trusted environment." },
    ],
  },
  {
    id: 2,
    name: 'Dr Muataz A. Osman',
    role: 'Dental Surgeon',
    title: 'Periodontal Gum Specialist & Implantologist',
    image: '/images/team-dr-muataz.jpg',
    bio: [
      { type: 'text', content: 'Dr Muataz Osman is a highly skilled dentist with special interest in periodontics and implant dentistry dedicated to providing expert care in gum disease treatment, implant dentistry, and oral surgery.' },
      { type: 'text', content: 'He holds a Post Graduate Certificate in both Implant Dentistry and Restorative Dentistry awarded by the Royal College of Surgeons. He also completed an advanced PG Certificate in Full Mouth Oral Implant Rehabilitation through ICE Hospital in collaboration with the University of Salford.' },
      { type: 'text', content: 'His practice focuses on Periodontics, Implant dentistry, and Oral surgery including gum disease treatment, soft tissue management, implants, and complex surgical extractions.' },
    ],
  },
  {
    id: 3,
    name: 'Elizabeth',
    role: 'Assistant Practice Manager',
    title: '',
    image: '/images/team-elizabeth.jpg',
    bio: [
      { type: 'text', content: 'Liz is the Assistant Practice Manager at Reform Aesthetics and Dental, bringing over 10 years of experience in Private Healthcare. Having worked overseas in Asia, she has extensive experience supporting high-calibre patients and delivering exceptional standards of care.' },
      { type: 'text', content: 'She oversees the day-to-day running of the clinic, manages the front-of-house team, and ensures a seamless patient journey from enquiry to aftercare.' },
      { type: 'text', content: 'Known for her professionalism and interpersonal skills, Elizabeth ensures every patient receives attentive, personalised care.' },
    ],
  },
  {
    id: 4,
    name: 'Rae McNeill',
    role: 'Dental Nurse and Skin Health Practitioner',
    title: 'GDC Number: 213755',
    image: '/images/team-rae.jpg',
    bio: [
      { type: 'text', content: 'Rae has extensive experience in dentistry since 2011. She has furthered her qualifications in aesthetic treatments including Chemical Peels and Microneedling.' },
      { type: 'text', content: 'Her approachable nature and attention to detail make her a trusted professional in both dental care and skin aesthetics.' },
      { type: 'quote', content: '"I have been a Dental nurse for over 10 years and have also been working in health care my whole life. I like to make people comfortable, cared for and place their trust in me."' },
    ],
  },
  {
    id: 5,
    name: 'Hannah Burton',
    role: 'Qualified Nurse Practitioner',
    title: '',
    image: '/images/team-hannah.jpg',
    bio: [
      { type: 'text', content: 'Hannah specialises in lymphatic drainage and Brazilian wood massage. These treatments support detoxification, reduce swelling, improve circulation, and enhance overall wellbeing.' },
      { type: 'text', content: 'She also offers IV vitamin drips and PRP treatments as part of a holistic approach to health, recovery, and longevity.' },
      { type: 'quote', content: '"My treatments support the body\'s natural detoxification process and overall wellbeing."' },
    ],
  },
  {
    id: 6,
    name: 'Shyam Nansi',
    role: 'Certified Nutritionist',
    title: 'MPharm, MRPharmS',
    image: '/images/team-shyam.jpg',
    bio: [
      { type: 'text', content: 'Shyam is an in-house certified nutritionist specialising in health, wellbeing, and weight loss management. He provides personalised nutrition plans tailored to individual lifestyles.' },
      { type: 'text', content: 'He also supports women through menopausal changes, offering guidance for both physiological and physical challenges.' },
      { type: 'quote', content: '"With 18 years of dedication to fitness and nutrition, I deliver a coaching experience designed to fit seamlessly into your lifestyle and help you achieve your goals."' },
    ],
  },
];

export function TeamSection() {
  const [activeId, setActiveId] = useState(1);
  const activeMember = teamMembers.find((m) => m.id === activeId) || teamMembers[0];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-10">

          {/* Tabs — wrap on mobile, vertical on desktop */}
          <AnimatedSection>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {teamMembers.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setActiveId(member.id)}
                  className={`px-4 py-2.5 rounded-full text-[13px] font-sans whitespace-nowrap transition-all text-left ${
                    activeId === member.id
                      ? 'bg-[#efeae7] text-black font-semibold'
                      : 'bg-transparent text-[#363636] hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {member.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Active member content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:grid md:grid-cols-[1fr_260px] gap-8 md:gap-10 items-start min-w-0"
            >
              {/* Text */}
              <div className="text-center md:text-left min-w-0 w-full">
                <div className="flex justify-center md:justify-start">
                  <SectionBadge text="Team Member" />
                </div>
                <h2
                  className="text-3xl sm:text-[38px] mt-4 mb-1 text-black leading-tight"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  {activeMember.name}
                </h2>
                <p className="text-sm font-sans font-semibold text-[#363636] mb-0.5">
                  {activeMember.role}
                </p>
                {activeMember.title && (
                  <p className="text-xs font-sans text-[#363636] mb-5">{activeMember.title}</p>
                )}
                {!activeMember.title && <div className="mb-5" />}

                <div className="space-y-4">
                  {activeMember.bio.map((para, i) =>
                    para.type === 'quote' ? (
                      <p key={i} className="text-[#363636] text-sm leading-relaxed font-sans italic border-l-2 border-[#c5b1a1] pl-4 text-left">
                        {para.content}
                      </p>
                    ) : (
                      <p key={i} className="text-[#363636] text-sm leading-relaxed font-sans">
                        {para.content}
                      </p>
                    )
                  )}
                </div>
              </div>

              {/* Photo — centred on mobile, right-aligned on desktop */}
              <div className="flex justify-center md:justify-end w-full">
                <div className="rounded-2xl overflow-hidden w-full max-w-[260px] sm:max-w-[300px] aspect-[3/4]">
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="auto"
                    style={{ imageRendering: 'high-quality' }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
