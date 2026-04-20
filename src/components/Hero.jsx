import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background - clinic interior image placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-beige/80 via-beige/60 to-beige/90" />
        {/* Simulated clinic interior with soft shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-300" />
          <div className="absolute top-0 left-1/3 w-1/3 h-full bg-gray-200" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="bg-white/80 backdrop-blur-sm text-dark text-xs tracking-wider uppercase px-4 py-2 rounded-full border border-gray-200">
            <span className="text-gray-text">HOME</span>
            <span className="mx-2 text-gray-300">&gt;</span>
            <span className="text-dark font-medium">ABOUT US</span>
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark leading-[1.15] mb-6">
          Compassionate Skincare That Puts You First
        </h1>

        <p className="text-gray-text text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Discover a calm, caring approach to skin health. At Reform Skincare, we provide advanced treatments in a soothing
          environment to restore your glow, boost your confidence, and enhance your natural beauty.
        </p>

        <a
          href="#booking"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
        >
          ARRANGE YOUR CONSULTATION
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
