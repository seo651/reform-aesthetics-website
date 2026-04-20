import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

export function CTASection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div
            className="relative rounded-[2rem] overflow-hidden"
            style={{
              backgroundImage: 'url(/images/cta-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-6 sm:px-12 py-16 sm:py-20">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <SectionBadge text="Book A Visit" variant="dark" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-6 mb-4">
                  Discover Our Skin Booster Treatments for Lasting Hydration & Radiance
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Our experienced clinicians provide expertly delivered skin booster treatments
                  designed to deeply hydrate, improve elasticity and restore luminous, healthy-looking
                  skin — all tailored specifically to you.
                </p>
              </div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
              >
                <p className="text-gray-600 mb-6">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    LETS TALK
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
