import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Priya Patel',
    title: 'Founder & Lead Doctor – Reform Aesthetics and Dental Clinic',
    bio: `Welcome to Reform Aesthetics and Dental. I am Dr Priya Sonia Patel the founder of Reform Aesthetics and Dental. I have been working as a Dental Surgeon since 2007 and developed a specialist interest in Aesthetic Medicine since 2010.

In addition to working in Aesthetic Medicine I also work as an Expert Aesthetic Trainer for Cosmetic Courses whereby I train other medical professionals who are keen to perform aesthetic procedures and work alongside the top Plastic surgeons.

This opportunity has allowed me to further develop my passion in aesthetics and rejuvenation techniques and pass on my skills and expertise to other medical professionals`,
    image: '/images/team-priya.jpg',
  },
  {
    id: 2,
    name: 'Shyam Nansi',
    title: 'Team Member – Reform Aesthetics and Dental Clinic',
    bio: 'Shyam Nansi is a dedicated member of the Reform Aesthetics and Dental team, contributing to the clinic\'s mission of providing exceptional patient care and aesthetic treatments.',
    image: '/images/team-priya.jpg',
  },
  {
    id: 3,
    name: 'Rae Mcneill',
    title: 'Team Member – Reform Aesthetics and Dental Clinic',
    bio: 'Rae Mcneill brings expertise and compassion to the Reform Aesthetics and Dental team, ensuring every patient receives personalized attention and care.',
    image: '/images/team-priya.jpg',
  },
  {
    id: 4,
    name: 'Dr Michelle Egan',
    title: 'Doctor – Reform Aesthetics and Dental Clinic',
    bio: 'Dr Michelle Egan is an experienced doctor at Reform Aesthetics and Dental, specializing in aesthetic medicine and patient-centered care.',
    image: '/images/team-priya.jpg',
  },
];

export function TeamSection() {
  const [activeId, setActiveId] = useState(1);
  const activeMember = teamMembers.find((m) => m.id === activeId) || teamMembers[0];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10">
          {/* Sidebar Tabs */}
          <AnimatedSection>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {teamMembers.map((member) => (
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

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-[1fr_280px] gap-8 items-start"
            >
              <div>
                <SectionBadge text="Team Member" />
                <h2
                  className="text-3xl sm:text-4xl mt-4 mb-2 text-gray-900"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  {activeMember.name}
                </h2>
                <p className="text-sm font-semibold font-sans text-gray-700 mb-5">
                  {activeMember.title}
                </p>
                <div className="text-gray-500 text-sm leading-relaxed whitespace-pre-line font-sans">
                  {activeMember.bio}
                </div>
              </div>
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
  );
}
