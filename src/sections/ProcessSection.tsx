import { motion } from 'framer-motion';
import { Calendar, Droplets, Sparkles, ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Schedule Your Consultation',
    description: 'Book a personalised skin consultation to discuss your concerns and goals. Our team will recommend the best treatments for you.',
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Receive Expert Treatments',
    description: 'Relax in our clinic while our specialists deliver tailored, medical-grade skin treatments to refresh and rejuvenate your complexion.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Maintain Your Glow',
    description: 'Enjoy ongoing support with aftercare advice, product recommendations, and follow-ups — helping you keep your skin healthy and radiant.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-cream rounded-[2.5rem] px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Content */}
              <div>
                <SectionBadge text="Process" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 mb-6">
                  Glow Up Your Skin in 3 Easy Steps
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our Glow Up Process makes achieving radiant, healthy skin simple and stress-free.
                  Whether you're looking to combat ageing, clear blemishes, or restore your natural
                  glow, our team guides you every step of the way.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
                >
                  ARRANGE YOUR CONSULTATION
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right: Steps */}
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-300 hidden sm:block" />

                <div className="space-y-10">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 * index }}
                      className="flex gap-5 relative"
                    >
                      {/* Number Circle */}
                      <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center bg-cream flex-shrink-0 z-10">
                        <span className="text-sm font-medium">{step.number}</span>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center mb-3">
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
