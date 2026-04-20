import { Shield, MessageCircle, Award, Users } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    title: 'Comfort-First Philosophy',
    description: 'Your comfort is our priority. From the moment you arrive, we create a calm, welcoming space so you feel relaxed and confident in your treatment.',
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description: 'We take the time to listen to your concerns, explain every option clearly, and design treatment plans around your individual needs. No jargon, no confusion—just honest advice.',
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: Award,
    title: 'Expert-Led Treatments',
    description: 'Our treatments are delivered by qualified professionals using advanced techniques and trusted products, ensuring you receive the highest standard of care.',
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    icon: Users,
    title: 'Patient-Centered Care',
    description: 'Every skin journey is unique. That\'s why we personalise every treatment plan, from our goals to your pace, to deliver results that truly work for you.',
    gradient: 'from-gray-600 to-gray-800'
  }
]

export default function Philosophy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder area */}
              <div className={`h-48 bg-gradient-to-br ${pillar.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <pillar.icon size={80} className="text-white" />
                </div>
                {/* Subtle pattern overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className="font-semibold text-dark text-base mb-3">{pillar.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
