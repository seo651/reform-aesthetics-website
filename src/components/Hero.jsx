import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background image - dark clinic signage */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='20' y='100' font-size='80' font-family='serif' fill='%23444' opacity='0.3' font-weight='bold'%3EREFORM%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
              <ArrowUpRight size={14} className="text-white" />
            </div>
            <span className="text-white/80 text-sm tracking-wider uppercase">
              Your Trusted Aesthetic Clinic in Leicester
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Compassionate Skincare That Puts You First
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-xl">
            We believe healthy skin builds confidence. From advanced facials to medical-grade
            aesthetic treatments, our experienced team delivers personalised care in a calm,
            professional environment focused on real, visible results.
          </p>
        </div>
      </div>
    </section>
  )
}
