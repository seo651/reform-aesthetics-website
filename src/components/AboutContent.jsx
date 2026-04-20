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
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left - Text */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full border border-brown/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brown rounded-full" />
              </div>
              <span className="text-brown text-[12px] tracking-wider uppercase font-medium">About Us</span>
            </div>
            <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[38px] text-dark leading-[1.2] mb-4">
              Looking for trusted skincare professionals in Leicester?
            </h2>
            <p className="text-gray-text text-[14px] leading-[1.7] mb-4">
              We offer personalised, clinically proven skincare solutions.
            </p>
            <p className="text-gray-text text-[14px] leading-[1.7]">
              At Reform Skincare, we take a results-driven approach to skin care. That's why we take time
              to understand your concerns and goals, creating treatment plans and techniques tailored to
              you. Whether you're dealing with acne, pigmentation, signs of ageing, or simply want
              to maintain a healthy, radiant complexion — our experienced team combines clinical
              science and care to bring out the best in your skin.
            </p>
          </div>

          {/* Right - Feature Cards stacked */}
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-light-bg rounded-xl p-5 flex gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 border border-gray-100">
                  <feature.icon size={18} className="text-brown" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-[14px] mb-1.5">{feature.title}</h3>
                  <p className="text-gray-text text-[13px] leading-[1.65]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
