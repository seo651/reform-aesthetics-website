export default function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full border border-brown/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-brown rounded-full" />
          </div>
          <span className="text-brown text-sm tracking-wider uppercase font-medium">What We Do</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-dark leading-tight mb-6">
          Reform Aesthetics is an independently owned medical Aesthetics Clinic in Leicester city centre.
        </h2>
        <p className="text-gray-text text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          We specialise in advanced medical skin treatments designed to restore youth, rejuvenate and refresh your natural beauty in a safe
          and supportive environment.
        </p>
      </div>
    </section>
  )
}
