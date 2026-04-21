import { useState } from 'react';
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
          {/* Outer wrapper — positions dark card + overlapping white form */}
          <div className="relative pb-10">

            {/* ── Dark hero card ── */}
            <div className="relative rounded-[2rem] overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0">
                <img src="/images/cta-bg.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/65" />
              </div>

              {/* Text content — extra bottom padding to make room for overlapping form */}
              <div className="relative z-10 px-6 sm:px-12 pt-14 pb-28 text-center">
                <SectionBadge text="Book A Visit" variant="dark" />
                <h2
                  className="text-3xl sm:text-4xl lg:text-[44px] text-white mt-5 mb-4 leading-tight"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  Discover Our Skin Booster Treatments<br />
                  for Lasting Hydration & Radiance
                </h2>
                <p className="text-white/75 text-sm leading-relaxed max-w-2xl mx-auto font-sans">
                  Our experienced clinicians provide expertly delivered skin booster treatments designed
                  to deeply hydrate, improve elasticity and restore luminous, healthy-looking skin — all
                  tailored specifically to you.
                </p>
              </div>
            </div>

            {/* ── White form card — overlaps bottom of dark card ── */}
            <div className="absolute bottom-0 left-4 right-4 sm:left-10 sm:right-10 lg:left-16 lg:right-16 z-20">
              <div className="bg-white rounded-3xl shadow-lg px-8 sm:px-10 py-8">
                <p className="text-gray-600 text-sm mb-5 font-sans">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="flex-1 px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 font-sans"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="flex-1 px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 font-sans"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 font-sans"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-[0.12em] uppercase hover:bg-gray-800 transition-colors whitespace-nowrap font-sans flex-shrink-0"
                  >
                    LETS TALK
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
