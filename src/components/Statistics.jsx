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
    <span className="font-serif text-[36px] sm:text-[42px] text-dark">
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
    <section ref={ref} className="py-10 sm:py-12 bg-beige">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between gap-y-8 gap-x-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative px-2 sm:px-4 min-w-[120px]">
              <AnimatedNumber target={stat.number} suffix={stat.suffix} inView={inView} />
              <div className="mt-1 text-gray-text text-[11px] sm:text-[12px] leading-snug max-w-[130px] mx-auto">{stat.label}</div>
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-[-2px] top-1/2 -translate-y-1/2 w-px h-10 bg-brown/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
