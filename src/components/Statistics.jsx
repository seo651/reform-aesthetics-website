import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 80, suffix: '+', label: 'Years of Combined Experience' },
  { number: 60, suffix: '+', label: 'Successful Smile Transformations' },
  { number: 10, suffix: '+', label: 'Ongoing Patient Relationships' },
  { number: 220, suffix: '+', label: 'Ongoing Patient Memberships' },
  { number: 5, suffix: '+', label: 'Advanced Procedures Offered' }
]

function AnimatedNumber({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span className="font-serif text-4xl sm:text-5xl text-dark">
      {count}{suffix}
    </span>
  )
}

export default function Statistics() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-14 bg-beige border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative">
              <AnimatedNumber target={stat.number} suffix={stat.suffix} inView={inView} />
              <div className="mt-2 text-gray-text text-xs sm:text-sm leading-snug">{stat.label}</div>
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
