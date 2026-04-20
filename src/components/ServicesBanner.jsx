import { ArrowUpRight } from 'lucide-react'

export default function ServicesBanner() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900" />

      <div className="relative z-10 max-w-[640px] mx-auto px-6 text-center">
        <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-white leading-[1.2] mb-4 italic">
          Explore Our Services for Lasting Skin Health!
        </h2>
        <p className="text-white/60 text-[13px] sm:text-[14px] leading-[1.7] mb-7 max-w-[520px] mx-auto">
          Our experienced clinicians provide expert, advanced skin treatments designed to deeply hydrate, improve
          elasticity and restore luminosity, healthy looking skin — at fantastic prices that work for everyone.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center gap-2 bg-white text-dark px-6 py-2.5 rounded-full text-[12px] font-medium hover:bg-beige transition-colors"
        >
          VIEW TREATMENTS
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  )
}
