import { ArrowUpRight } from 'lucide-react'

export default function ServicesBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(157,138,123,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(157,138,123,0.2) 0%, transparent 50%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6 italic">
          Explore Our Services for Lasting Skin Health!
        </h2>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Our experienced clinicians provide expert, advanced skin treatments designed to deeply hydrate, improve
          elasticity and restore luminosity, healthy looking skin — at fantastic prices that work for everyone.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center gap-2 bg-white text-dark px-8 py-3.5 rounded-full text-sm font-medium hover:bg-beige transition-colors"
        >
          VIEW TREATMENTS
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
