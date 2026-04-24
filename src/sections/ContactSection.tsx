import { useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const treatmentOptions = [
  // Injectables & Fillers
  'Anti-Wrinkle Injections',
  'Dermal Fillers',
  'Lip Fillers',
  'Cheek & Face Fillers',
  'Jawline Contouring',
  'Tear Trough / Under-Eye Filler',
  'Non-Surgical Rhinoplasty',
  'Liquid Face Lift',
  'Collagen-Stimulating Injections',
  'Filler Dissolving',
  // Skin Treatments
  'Skin Boosters',
  'Profhilo',
  'Polynucleotides',
  'Skin Peels',
  'Medical Microneedling',
  'Carboxytherapy',
  'Medical-Grade Skincare',
  '3D Skin Analysis',
  // Facials
  'Signature Facials',
  'Signature Pregnancy Glow Facial',
  // Hair & Scalp
  'PRP Hair Rejuvenation',
  'PRF Hair Rejuvenation',
  'Hair Loss Treatments',
  'Exosomes Hair Treatment',
  // Face & Body
  'PRP Vampire Facial',
  'PDO Thread Lifts',
  'Fat Dissolving',
  'Lymphatic Drainage Massage',
  'Hand Rejuvenation',
  // Specialist
  'Vitamin Injections (B12 & Biotin)',
  'Weight Loss Injections',
  'Hyperhidrosis (Excessive Sweating)',
  'Bruxism / TMJ (Teeth Grinding)',
  'Gummy Smile Correction',
  'Vein Removal',
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Heading + description + review ── */}
          <AnimatedSection className="flex flex-col gap-6">
            <div>
              <SectionBadge text="Contact Us" />
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-tight text-black"
              style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
            >
              Book an Aesthetic<br />Consultation Today
            </h2>
            <p className="text-[#363636] text-[15px] font-sans leading-relaxed">
              Reform Aesthetics is a privately run, medical-led aesthetics clinic in Leicester, led
              by Dr Priya Sonia Patel. We specialise in subtle, confidence-boosting treatments
              tailored to your individual goals. Our approach is consultative, honest, and
              results-focused—no pressure, no overpromising. Every treatment plan begins
              with a thorough consultation to ensure safety, suitability, and natural-looking
              outcomes.
            </p>

            {/* Review card */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden mt-2">
              <div className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold font-sans" style={{ backgroundColor: '#b07d6e' }}>
                    D
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black font-sans">Dharita Pancholi</p>
                    <p className="text-xs text-[#888] font-sans">Patient</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#363636] font-sans leading-relaxed">
                  DR Priya was amazing. I went in to see her with a heavy bite and also couldn't get rid of the headaches that come along with grinding. She made me feel at ease as I have never considered doing botox before — it was scary — however she did a fab job and most definitely recommend her to all. Thankyou for your guidance and services you are fab.. Dee x
                </p>
              </div>
              <div className="bg-black px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                  <span className="text-white text-xs font-semibold font-sans ml-2">5.0 RATING</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Form card ── */}
          <AnimatedSection delay={0.15}>
            <div className="bg-[#efeae7] rounded-2xl p-7 sm:p-10">
              <h3
                className="text-3xl sm:text-4xl text-black mb-8 leading-tight"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Let's Start the<br />Conversation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#363636] mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-0 py-2.5 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#363636] mb-2">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-0 py-2.5 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#363636] mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-0 py-2.5 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#363636] mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-0 py-2.5 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#363636] mb-2">
                    I am interested in...
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-0 py-2.5 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans text-[#363636] appearance-none cursor-pointer"
                  >
                    <option value="">I am interested in...</option>
                    {treatmentOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#363636] mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    placeholder="Describe your problems and how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-0 py-2.5 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors resize-none font-sans placeholder:text-gray-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-[11px] font-semibold tracking-[0.12em] uppercase hover:bg-[#363636] transition-colors font-sans"
                >
                  SUBMIT MESSAGE
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
