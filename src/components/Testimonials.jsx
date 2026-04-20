import { Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Krish Y',
    rating: 5,
    text: 'I\'ve been visiting Reform Aesthetics for several treatments and have been consistently impressed with the quality of care. The clinic is beautifully maintained, and the staff are friendly and welcoming.'
  },
  {
    name: 'Hind Bashir',
    rating: 5,
    text: 'I went to Reform Aesthetics and Dental for skin treatments and the experience was wonderful. The team were super lovely and made me feel really comfortable. Professional, reliable, and truly trustworthy.'
  },
  {
    name: 'Preet Kaur',
    rating: 5,
    text: 'Had a really positive visit with the team. Such a lovely, friendly and knowledgeable group of people. Everything was explained clearly before treatment. Would highly recommend to anyone.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-18 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full border border-brown/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-brown rounded-full" />
            </div>
            <span className="text-brown text-[12px] tracking-wider uppercase font-medium">Testimonials</span>
          </div>
          <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[38px] text-dark leading-[1.2] mb-3">
            What Our Happy Patients Are Saying
          </h2>
          <p className="text-gray-text text-[13px] sm:text-[14px] max-w-[520px] mx-auto leading-[1.6]">
            We are committed to providing the highest quality patient care, and are extremely fortunate to have a team
            of dedicated professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-light-bg rounded-xl p-5 sm:p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-brown/15 flex items-center justify-center">
                  <span className="text-brown font-semibold text-[12px]">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-dark text-[13px]">{t.name}</p>
                  <p className="text-gray-text text-[11px]">Google</p>
                </div>
              </div>

              <p className="text-gray-text text-[13px] leading-[1.65] flex-1 mb-4">
                "{t.text}"
              </p>

              <div className="flex items-center gap-2.5 pt-3 border-t border-gray-200">
                <div className="flex gap-px">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-dark text-[11px] font-semibold tracking-wide">5.0 RATING</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
