import { useState } from 'react'

const team = [
  {
    name: 'Dr. Priya Patel',
    role: 'Founder & Lead Doctor',
    image: null,
    bio: 'Dr. Priya Patel has been a qualified dental surgeon since 2007 and has specialised in aesthetic medicine since 2010. With over 15 years of combined experience, she leads the clinic with a passion for delivering natural, confidence-boosting results. She also works as an expert aesthetic trainer, teaching advanced cosmetic techniques alongside plastic surgeons.',
    credentials: ['BDS', 'Aesthetic Medicine Specialist', 'Expert Trainer']
  },
  {
    name: 'Shyam Nansi',
    role: 'MPharm, MRPharmS, Certified Nutritionist',
    image: null,
    bio: 'Shyam is our in-house nutritionist specialising in weight loss management and menopausal health support. With 18 years of dedication to fitness combined with extensive pharmacy expertise, he takes a holistic approach to helping patients achieve their health and wellness goals from the inside out.',
    credentials: ['MPharm', 'MRPharmS', 'Certified Nutritionist']
  },
  {
    name: 'Rae McNeill',
    role: 'Dental Nurse & Skin Health Practitioner',
    image: null,
    bio: 'Rae brings over a decade of dental nursing experience to the clinic, with specialist qualifications in chemical peels and microneedling. Known for her warm personality and meticulous attention to detail, she ensures every patient feels comfortable and well cared for throughout their treatment journey.',
    credentials: ['GDC Registered', 'Chemical Peels', 'Microneedling']
  },
  {
    name: 'Dr Michelle Egan',
    role: 'MBChB, MRCGP',
    image: null,
    bio: 'Dr Michelle Egan graduated from the University of Leeds in 2009 and brings her extensive GP experience to the clinic. She specialises in steroid joint injections for shoulders, knees, thumbs, hips, and carpal tunnel conditions, offering patients expert care for musculoskeletal concerns.',
    credentials: ['MBChB', 'MRCGP', 'University of Leeds']
  }
]

const initials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2)

export default function Team() {
  const [activeTab, setActiveTab] = useState(0)
  const member = team[activeTab]

  return (
    <section className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brown text-sm tracking-wider uppercase font-medium">Our Team</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-dark mt-4">Meet the Experts</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {team.map((person, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-dark hover:bg-white/80 border border-gray-200'
              }`}
            >
              {person.name}
            </button>
          ))}
        </div>

        {/* Active Member Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Photo placeholder */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              <div className="w-32 h-32 rounded-full bg-brown/20 flex items-center justify-center">
                <span className="font-serif text-4xl text-white/80">{initials(member.name)}</span>
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="font-serif text-3xl text-dark mb-1">{member.name}</h3>
              <p className="text-brown font-medium mb-6">{member.role}</p>
              <p className="text-gray-text leading-relaxed mb-6">{member.bio}</p>
              <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
      </div>
    </section>
  )
}
