import { useState } from 'react'

const team = [
  {
    name: 'Dr. Priya Patel',
    role: 'Founder & Lead Doctor — Reform Aesthetics and Dental Clinic',
    initials: 'PP',
    bio: [
      'Welcome to Reform Aesthetics and Dental. I am Dr Priya Patel, founder of Reform Aesthetics and Dental Clinic. I have been actively involved in aesthetic medicine since 2010.',
      'In addition to working in medical aesthetics, I also work as an expert aesthetic trainer for cosmetic courses alongside plastic surgeons who are pioneers in aesthetic procedures.',
      'This experience has allowed me to further develop my passion for aesthetics, learn advanced techniques, and stay on the cutting edge of the latest medical advancements.'
    ],
    credentials: ['BDS', 'Aesthetic Medicine', 'Expert Trainer']
  },
  {
    name: 'Shyam Nansi',
    role: 'MPharm, MRPharmS, Certified Nutritionist',
    initials: 'SN',
    bio: [
      'Shyam is our in-house nutritionist specialising in weight management and menopausal health support.',
      'With 18 years of dedication to fitness combined with extensive pharmacy expertise, he takes a holistic approach to helping patients achieve their wellness goals.'
    ],
    credentials: ['MPharm', 'MRPharmS', 'Nutritionist']
  },
  {
    name: 'Rae McNeill',
    role: 'Dental Nurse & Skin Health Practitioner',
    initials: 'RM',
    bio: [
      'Rae brings over a decade of experience to the clinic with specialist qualifications in chemical peels and microneedling.',
      'Known for her warm personality and meticulous attention to detail, she ensures every patient feels comfortable throughout their treatment journey.'
    ],
    credentials: ['GDC Registered', 'Peels', 'Microneedling']
  },
  {
    name: 'Dr Michelle Egan',
    role: 'MBChB, MRCGP',
    initials: 'ME',
    bio: [
      'Dr Michelle Egan graduated from the University of Leeds in 2009 and brings her extensive GP experience to the clinic.',
      'She specialises in steroid joint injections for shoulders, knees, thumbs, hips, and carpal tunnel conditions.'
    ],
    credentials: ['MBChB', 'MRCGP', 'Leeds']
  }
]

export default function Team() {
  const [activeTab, setActiveTab] = useState(0)
  const member = team[activeTab]

  return (
    <section className="py-14 sm:py-18 bg-beige">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-brown/20 mb-8">
          {team.map((person, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-3 text-[13px] font-medium transition-all relative ${
                activeTab === idx
                  ? 'bg-white text-dark rounded-t-lg'
                  : 'text-gray-text hover:text-dark'
              }`}
            >
              {person.name}
              {activeTab === idx && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brown" />
              )}
            </button>
          ))}
        </div>

        {/* Member Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Bio */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="font-serif text-[26px] sm:text-[32px] text-dark mb-1">{member.name}</h3>
              <p className="text-brown font-medium text-[13px] mb-6">{member.role}</p>
              <div className="space-y-3">
                {member.bio.map((p, idx) => (
                  <p key={idx} className="text-gray-text text-[13px] leading-[1.7]">{p}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {member.credentials.map((cred, idx) => (
                  <span key={idx} className="bg-beige text-dark text-[11px] font-medium px-3 py-1 rounded-full">
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center min-h-[280px] md:min-h-[400px]">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-brown/10 flex items-center justify-center border-3 border-white shadow-lg">
                <span className="font-serif text-4xl text-brown/50">{member.initials}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
