import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Dr Priya was amazing from start to finish. She made me feel so comfortable and the results were incredible. Would most definitely recommend her to all!'
  },
  {
    name: 'Jessica L.',
    rating: 5,
    text: 'My skin is already glowing — my acne scars are visibly fading too! The team really knows what they\'re doing and I felt completely at ease throughout.'
  },
  {
    name: 'Emma T.',
    rating: 5,
    text: 'The team is courteous, professional, and genuinely cares about their patients. I\'ve never felt more confident in my skin. Highly recommend!'
  },
  {
    name: 'Rachel K.',
    rating: 5,
    text: 'Absolutely brilliant experience. The clinic is beautiful, the staff are lovely, and my results exceeded expectations. I won\'t go anywhere else now.'
  },
  {
    name: 'Amy W.',
    rating: 5,
    text: 'Such a calming environment and truly expert care. Dr Priya took the time to explain everything thoroughly. The results speak for themselves.'
  },
  {
    name: 'Charlotte D.',
    rating: 5,
    text: 'I was nervous about my first treatment but the team put me at ease straight away. Natural-looking results that have boosted my confidence enormously.'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const getVisible = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(current + i) % testimonials.length])
    }
    return items
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-brown text-sm tracking-wider uppercase font-medium">Testimonials</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-dark mt-4">
              What Our Happy Patients<br className="hidden sm:block" /> Are Saying
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-beige transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisible().map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-light-bg rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-dark leading-relaxed mb-6 text-[15px]">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brown/20 flex items-center justify-center">
                  <span className="text-brown font-medium text-sm">{testimonial.name[0]}</span>
                </div>
                <span className="font-medium text-dark text-sm">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
