import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Users, Stethoscope } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const features = [
  {
    icon: Stethoscope,
    title: 'Patient-Centered Care',
    description: 'We listen first. Every treatment is personalised to your skin goals for natural, lasting results.',
  },
  {
    icon: Heart,
    title: 'All-In-One Care Under One Roof',
    description: 'From Anti-Ageing to advanced skin rejuvenation, all treatments are carried out in one trusted clinic.',
  },
  {
    icon: Users,
    title: 'Expert Team You Can Trust',
    description: 'Our specialists combine medical expertise with the latest technology to deliver safe, effective care.',
  },
];

export function WhatWeDo() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <AnimatedSection>
            <SectionBadge text="What We Do" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 leading-tight">
              An Independent Skin & Aesthetics Clinic Focused on Results
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:pt-12">
            <p className="text-gray-600 leading-relaxed mb-6">
              We provide specialist skin and anti-ageing treatments designed to enhance your natural
              features — not change them. Our philosophy is simple: subtle, refined improvements using
              premium products and evidence-based techniques.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-black text-sm font-medium hover:bg-gray-200 transition-all hover:scale-[1.02]"
            >
              START YOUR SKIN TRANSFORMATION
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12" />

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="w-14 h-14 rounded-full bg-gray-500 flex items-center justify-center mb-5 group-hover:bg-gray-600 transition-colors">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
