export default function WhatWeDo() {
  return (
    <section className="py-14 sm:py-18 bg-white">
      <div className="max-w-[780px] mx-auto px-6 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full border border-brown/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-brown rounded-full" />
          </div>
          <span className="text-brown text-[12px] tracking-wider uppercase font-medium">What We Do</span>
        </div>
        <h2 className="font-serif text-[24px] sm:text-[30px] lg:text-[36px] text-dark leading-[1.25] mb-4">
          Reform Aesthetics is an independently owned medical Aesthetics Clinic in Leicester city centre.
        </h2>
        <p className="text-gray-text text-[14px] sm:text-[15px] leading-[1.7] max-w-[600px] mx-auto">
          We specialise in advanced medical skin treatments designed to restore youth, rejuvenate and refresh your natural beauty in a safe
          and supportive environment.
        </p>
      </div>
    </section>
  )
}
