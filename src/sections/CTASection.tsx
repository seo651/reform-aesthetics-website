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
    <section className="py-8">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <AnimatedSection>

          {/* ── Dark hero card ── */}
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/cta-bg.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Text content — pb makes visual room before form overlaps */}
            <div className="relative z-10 px-6 sm:px-12 pt-14 pb-24 text-center">
              <SectionBadge text="Book A Visit" variant="dark" />
              <h2
                className="text-3xl sm:text-4xl lg:text-[46px] text-white mt-5 mb-5 leading-tight"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Explore Our Services for<br />Lasting Skin Health!
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
                Our experienced clinicians provide expertly delivered skin booster treatments designed
                to deeply hydrate, improve elasticity and restore luminous, healthy-looking skin — all
                tailored specifically to you.
              </p>
            </div>
          </div>

          {/* ── White form card — negative margin pulls it UP into the dark card ── */}
          <div className="relative z-20 mx-2 sm:mx-6 lg:mx-12 -mt-14">
            <div className="bg-white rounded-[1.5rem] shadow-xl px-8 sm:px-12 py-8 sm:py-9">
              <p className="text-gray-600 text-sm mb-5 font-sans">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="flex-1 px-5 py-4 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:border-gray-400 font-sans text-gray-700 placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="flex-1 px-5 py-4 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:border-gray-400 font-sans text-gray-700 placeholder:text-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-5 py-4 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:border-gray-400 font-sans text-gray-700 placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1a1f2e] text-white text-[11px] font-semibold tracking-[0.14em] uppercase hover:bg-black transition-colors whitespace-nowrap font-sans flex-shrink-0"
                >
                  LETS TALK
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}
