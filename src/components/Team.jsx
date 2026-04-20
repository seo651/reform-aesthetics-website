import { useState } from 'react'

const team = [
  {
    name: 'Dr. Priya Patel',
    role: 'Founder & Lead Doctor — Reform Aesthetics and Dental Clinic',
    initials: 'PP',
    bio: [
      'Welcome to Reform Aesthetics and Dental. I am Dr Priya Patel and I have been the founder of Reform Aesthetics and Dental Clinic. I have been actively involved in aesthetic medicine since 2010.',
      'In addition to working in medical aesthetics, I also work as an expert aesthetic trainer for cosmetic courses. I trained alongside plastic surgeons who are known to be pioneers in aesthetic procedures and work alongside the very best.',
      'The experience has allowed me to further develop my passion for aesthetics and learn advanced techniques and stay on the cutting edge of the latest medical advancements.'
    ],
    credentials: ['BDS', 'Aesthetic Medicine Specialist', 'Expert Trainer']
  },
  {
    name: 'Shyam Nansi',
    role: 'MPharm, MRPharmS, Certified Nutritionist',
    initials: 'SN',
    bio: [
      'Shyam is our in-house nutritionist specialising in weight management and menopausal health support.',
      'With 18 years of dedication to fitness combined with extensive pharmacy expertise, he takes a holistic approach to helping patients achieve their wellness goals.'
    ],
    credentials: ['MPharm', 'MRPharmS', 'Certified Nutritionist']
  },
  {
    name: 'Rae McNeill',
    role: 'Dental Nurse & Skin Health Practitioner',
    initials: 'RM',
    bio: [
      'Rae brings over a decade of experience to the clinic with specialist qualifications in chemical peels and microneedling.',
      'Known for her warm personality and meticulous attention to detail, she ensures every patient feels comfortable throughout their treatment journey.'
    ],
    credentials: ['GDC Registered', 'Chemical Peels', 'Microneedling']
  },
  {
    name: 'Dr Michelle Egan',
    role: 'MBChB, MRCGP',
    initials: 'ME',
    bio: [
      'Dr Michelle Egan graduated from the University of Leeds in 2009 and brings her extensive GP experience to the clinic.',
      'She specialises in steroid joint injections for shoulders, knees, thumbs, hips, and carpal tunnel conditions.'
    ],
    credentials: ['MBChB', 'MRCGP', 'University of Leeds']
  }
]

export default function Team() {
  const [activeTab, setActiveTab] = useState(0)
  const member = team[activeTab]

  return (
    <section className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs row */}
        <div className="flex flex-wrap gap-0 mb-10 border-b border-gray-300">
          {team.map((person, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3.5 text-sm font-medium transition-all relative ${
                activeTab === idx
                  ? 'bg-white text-dark rounded-t-xl'
                  : 'text-gray-text hover:text-dark'
              }`}
            >
              {person.name}
              {activeTab === idx && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brown" />
              )}
            </button>
          ))}
        </div>

        {/* Active Member - two column layout */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Bio */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-3xl sm:text-4xl text-dark mb-2">{member.name}</h3>
              <p className="text-brown font-medium text-sm mb-8">{member.role}</p>
              <div className="space-y-4">
                {member.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-text text-sm leading-relaxed">{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {member.credentials.map((cred, idx) => (
                  <span
                    key={idx}
                    className="bg-beige text-dark text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Photo placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center min-h-[400px] md:min-h-[500px] relative overflow-hidden">
              <div className="w-40 h-40 rounded-full bg-brown/10 flex items-center justify-center border-4 border-white shadow-lg">
                <span className="font-serif text-5xl text-brown/60">{member.initials}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
