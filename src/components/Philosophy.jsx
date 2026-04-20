import { Shield, MessageCircle, Award, Users } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    title: 'Comfort-First Philosophy',
    description: 'We prioritise creating a relaxed, welcoming space where you feel at ease. Your comfort is central to every treatment we provide.'
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description: 'We explain every step clearly, answer all your questions, and create personalised plans so you always know what to expect.'
  },
  {
    icon: Award,
    title: 'Expert-Led Treatments',
    description: 'Our qualified professionals use advanced techniques and stay at the forefront of aesthetic medicine to deliver exceptional results.'
  },
  {
    icon: Users,
    title: 'Patient-Centered Care',
    description: 'Every treatment plan is individually crafted around your unique needs, goals, and lifestyle for results that truly work for you.'
  }
]

export default function Philosophy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brown text-sm tracking-wider uppercase font-medium">What We Do</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-dark mt-4 mb-6">
            Medical Aesthetics Focused on <br className="hidden sm:block" />
            Restoration & Rejuvenation
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Reform Aesthetics is a medical aesthetics clinic specialising in restoration
            and rejuvenation. We combine clinical expertise with a caring approach to
            help you look and feel your very best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-brown/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brown/10 transition-colors">
                <pillar.icon size={28} className="text-brown" />
              </div>
              <h3 className="font-semibold text-dark text-lg mb-3">{pillar.title}</h3>
              <p className="text-gray-text text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
