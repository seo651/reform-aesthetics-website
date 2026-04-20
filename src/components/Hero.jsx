import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-beige">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(200,190,180,0.25) 0%, transparent 50%, rgba(200,190,180,0.15) 100%)'
      }} />

      <div className="relative z-10 text-center max-w-[680px] mx-auto px-6 py-14 sm:py-20">
        <div className="mb-7">
          <span className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-full border border-gray-200/50">
            <span className="text-gray-text">HOME</span>
            <span className="mx-2 text-gray-300">&gt;</span>
            <span className="text-dark font-medium">ABOUT US</span>
          </span>
        </div>

        <h1 className="font-serif text-[30px] sm:text-[40px] lg:text-[48px] text-dark leading-[1.15] mb-4">
          Compassionate Skincare That Puts You First
        </h1>

        <p className="text-gray-text text-[14px] sm:text-[15px] leading-[1.7] max-w-[500px] mx-auto mb-8">
          Discover a calm, caring approach to skin health. At Reform Skincare, we provide advanced treatments in a soothing
          environment to restore your glow, boost your confidence, and enhance your natural beauty.
        </p>

        <a
          href="#booking"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-[12px] font-medium tracking-wider hover:bg-gray-800 transition-colors"
        >
          ARRANGE YOUR CONSULTATION
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  )
}
