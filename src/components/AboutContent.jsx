import { Sparkles, Leaf, FlaskConical } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Tailored Full-Spectrum Skincare Solutions',
    description: 'From acne and pigmentation to fine lines and anti-ageing treatments, we provide a complete range of skin solutions under one roof — designed for every age and skin type.'
  },
  {
    icon: Leaf,
    title: 'Relaxed Spa-Inspired Environment',
    description: 'We\'ve designed our clinic space to feel calming, welcoming and safe, with a soothing, spa-like atmosphere so you feel relaxed every visit.'
  },
  {
    icon: FlaskConical,
    title: 'Medical-Grade Products & Advanced Techniques',
    description: 'We use clinically tested products with cutting-edge techniques to deliver safe, effective treatments that help you achieve long-lasting results.'
  }
]

export default function AboutContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full border border-brown/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brown rounded-full" />
              </div>
              <span className="text-brown text-sm tracking-wider uppercase font-medium">About Us</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-dark leading-tight mb-6">
              Looking for trusted skincare professionals in Leicester?
            </h2>
            <p className="text-gray-text text-base leading-relaxed mb-5">
              We offer personalised, clinically proven skincare solutions.
            </p>
            <p className="text-gray-text text-base leading-relaxed">
              At Reform Skincare, we take a results-driven approach to skin care. That's why we take time
              to understand your concerns and goals, creating treatment plans and techniques tailored to
              you. Whether you're dealing with acne, pigmentation, signs of ageing, or simply want
              to maintain a healthy, radiant complexion — our experienced team combines clinical
              science and care to bring out the best in your skin.
            </p>
          </div>

          {/* Right - Feature Cards stacked */}
          <div className="space-y-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-light-bg rounded-2xl p-6 flex gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                  <feature.icon size={22} className="text-brown" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-[15px] mb-2">{feature.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
