import { Sparkles, Leaf, FlaskConical, Heart } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Tailored, Full-Spectrum Skincare Solutions',
    description: 'We offer a comprehensive range of treatments designed to address your unique skin concerns, from acne and pigmentation to anti-ageing and general skin health.'
  },
  {
    icon: Leaf,
    title: 'Relaxed, Spa-Inspired Environment',
    description: 'Our clinic combines clinical excellence with a soothing, spa-like atmosphere so you feel comfortable and cared for from the moment you walk in.'
  },
  {
    icon: FlaskConical,
    title: 'Medical-Grade Products & Advanced Techniques',
    description: 'We use only the highest quality, clinically proven products and cutting-edge techniques to deliver safe, effective results.'
  },
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Your goals are our priority. Every treatment plan is individually crafted to suit your skin type, lifestyle, and desired outcomes.'
  }
]

export default function AboutContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <div>
            <span className="text-brown text-sm tracking-wider uppercase font-medium">About Us</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-dark mt-4 mb-6 leading-tight">
              Independent Skincare Clinic in Leicester
            </h2>
            <p className="text-gray-text text-lg leading-relaxed mb-6">
              Reform Aesthetics is an independent Leicester clinic offering personalised,
              science-based skincare solutions. Whether you're looking to treat acne,
              pigmentation, signs of ageing, or simply want to maintain healthy, glowing
              skin — our experienced team is here to help.
            </p>
            <p className="text-gray-text text-lg leading-relaxed">
              We combine medical expertise with a warm, welcoming approach to deliver
              treatments that are tailored to you. Our goal is to help you feel confident
              and comfortable in your own skin.
            </p>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-beige rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                  <feature.icon size={22} className="text-brown" />
                </div>
                <h3 className="font-semibold text-dark text-base mb-2">{feature.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
