import { Shield, MessageCircle, Award, Users } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    title: 'Comfort-First Philosophy',
    description: 'Your comfort is our priority. From the moment you arrive, we create a calm, welcoming space so you feel relaxed and confident in your treatment.',
    gradient: 'from-stone-600 to-stone-800'
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description: 'We explain every step clearly, answer all your questions, and create personalised plans so you always know what to expect.',
    gradient: 'from-stone-500 to-stone-700'
  },
  {
    icon: Award,
    title: 'Expert-Led Treatments',
    description: 'Our qualified professionals use advanced techniques and trusted products, ensuring you receive the highest standard of care.',
    gradient: 'from-stone-600 to-stone-800'
  },
  {
    icon: Users,
    title: 'Patient-Centered Care',
    description: 'Every treatment plan is individually crafted around your unique needs, goals, and lifestyle for results that truly work for you.',
    gradient: 'from-stone-500 to-stone-700'
  }
]

export default function Philosophy() {
  return (
    <section className="pb-16 sm:pb-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className={`h-36 sm:h-44 bg-gradient-to-br ${pillar.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <pillar.icon size={60} className="text-white" />
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-semibold text-dark text-[13px] sm:text-[14px] mb-2">{pillar.title}</h3>
                <p className="text-gray-text text-[12px] sm:text-[13px] leading-[1.6]">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
