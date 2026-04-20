import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Krish Y',
    rating: 5,
    text: 'I\'ve been visiting Reform Aesthetics for several treatments and have been consistently impressed with the quality of care. The clinic is beautifully maintained, and the staff are friendly and welcoming. I always feel comfortable and well looked after. Thank you for helping me feel confident in my own skin!'
  },
  {
    name: 'Hind Bashir',
    rating: 5,
    text: 'I went to Reform Aesthetics and Dental for skin treatments and the experience was wonderful. The team were super lovely and made me feel really comfortable. Professional, reliable, and truly trustworthy. I can\'t recommend them highly enough — top class service from start to finish.'
  },
  {
    name: 'Preet Kaur',
    rating: 5,
    text: 'Wanted to share my review for the team at Reform Dental Clinic. Had a really positive visit with the team. Such a lovely, friendly and knowledgeable group of people. Everything was explained clearly before treatment. Would highly recommend to anyone looking for quality dental care in Leicester.'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full border border-brown/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-brown rounded-full" />
            </div>
            <span className="text-brown text-sm tracking-wider uppercase font-medium">Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-dark leading-tight mb-4">
            What Our Happy Patients Are Saying
          </h2>
          <p className="text-gray-text text-base max-w-2xl mx-auto">
            We are committed to providing the highest quality patient care, and are extremely fortunate to have a team
            of dedicated professionals.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-light-bg rounded-2xl p-7 flex flex-col"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-brown/15 flex items-center justify-center">
                  <span className="text-brown font-semibold text-sm">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">{testimonial.name}</p>
                  <p className="text-gray-text text-xs">Google</p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-text text-sm leading-relaxed flex-1 mb-5">
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-dark text-sm font-semibold">5.0 RATING</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
