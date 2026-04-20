import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 50, suffix: '+', label: 'Years of Combined Experience' },
  { number: 10000, suffix: '+', label: 'Successful Treatments' },
  { number: 5000, suffix: '+', label: 'Ongoing Patient Relationships' },
  { number: 30, suffix: '+', label: 'Advanced Procedures Offered' }
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
    <span className="font-serif text-5xl sm:text-6xl text-dark">
      {count.toLocaleString()}{suffix}
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
    <section ref={ref} className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brown text-sm tracking-wider uppercase font-medium">Our Track Record</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-dark mt-4">Numbers That Speak</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <AnimatedNumber target={stat.number} suffix={stat.suffix} inView={inView} />
              <div className="mt-3 text-gray-text text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
