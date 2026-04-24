import { useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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

const reviews = [
  { name: 'Dharita Pancholi', initials: 'D', text: "DR Priya was amazing. I went in to see her with a heavy bite and also couldn't get rid of the headaches that come along with grinding. She made me feel at ease as I have never considered doing botox before — it was scary — however she did a fab job and most definitely recommend her to all. Thankyou for your guidance and services you are fab.. Dee x" },
  { name: 'Rina', initials: 'R', text: "I had my first microneedling session with Dr. Priya and her lovely team, and honestly, they made me feel so comfortable from start to finish. It's only been two days since my appointment, and my skin is already glowing — my acne scars are visibly fading too! Highly recommend Dr. Priya and her amazing team! 💕" },
  { name: 'p k', initials: 'P', text: "Reform Medical Aesthetic & Dental provides outstanding service from start to finish. The team is courteous, professional, and genuinely cares about patient comfort and results. I am very pleased with my experience and would confidently recommend this clinic to anyone seeking professional and reliable care." },
  { name: 'Diane McLeod', initials: 'D', text: "I have recently had dermal fillers to several areas and I am really pleased with the results. I wanted to look natural and fresh faced and Dr Priya achieved this beautifully. My face feels firmer, my lips slightly fuller. I would highly recommend Dr Priya who put me at my ease and did a lovely job!" },
  { name: 'Shannon Setchell', initials: 'S', text: "I've been having my Botox with Dr. Priya Patel for many years now! She always takes the time to listen to my concerns and makes sure I felt comfortable. My results are subtle, natural, and refreshing. If you're considering Botox, this is the place to go for safe, professional, and beautiful natural results!" },
  { name: 'Krish Y', initials: 'K', text: "This place really stored the confidence I lost many years ago. I travelled all the way from London and it was worth it! My skin feels brand new after getting honest feedback and given treatment that actually works! Thank you Priya for giving me my shine again I'm grateful I went through with it!" },
  { name: 'Hind Bashir', initials: 'H', text: "I went to Reform Aesthetics and Dental for mesopeel and microneedling. After a few sessions, my skin looks so much brighter, smoother, and healthier! The dark spots have lightened and my overall complexion feels fresh and glowing. Definitely recommend them — I'm so happy with my results!" },
  { name: 'Preet Kaur', initials: 'P', text: "Just wanted to share how brilliant my recent visit to Reform Clinic was. Had a skin peel and my skin feels so much smoother and softer now. I had a micro-needling session and honestly, I can't stop looking at my fresh, smooth skin. Huge thanks to Dr Priya, you truly are a star!" },
  { name: 'Eesha Ranee', initials: 'E', text: "I've had the most amazing experience at Reform Aesthetics and Dental. The team is incredibly professional, knowledgeable, and genuinely caring. My skin has never looked better — glowing, smooth, and rejuvenated! Dr Priya always goes beyond to help me with after care advice. Thank you" },
  { name: 'P and A', initials: 'P', text: "Amazing results from skin booster. Currently Glowing! Thanks to Dr Priya she was gentle, professional and only did what she felt would suit my facial compositions. Thank you for supplementing my natural beauty and wanting a natural look!" },
  { name: 'Gill Stevens', initials: 'G', text: "I recently had Botox and fillers done by Priya @ Reform Aesthetics and I couldn't be happier with the results! Priya took the time to understand exactly what I wanted, and the results are natural yet effective. Her professionalism and attention to detail are second to none. She truly is amazing!" },
];

export function ContactSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevReview = () => {
    setDirection(-1);
    setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length);
  };
  const nextReview = () => {
    setDirection(1);
    setReviewIndex((i) => (i + 1) % reviews.length);
  };

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

            {/* Review carousel */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden mt-2">
              <div className="p-6 bg-white min-h-[200px] relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={reviewIndex}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold font-sans" style={{ backgroundColor: '#8c8c8c' }}>
                        {reviews[reviewIndex].initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black font-sans">{reviews[reviewIndex].name}</p>
                        <p className="text-xs text-[#888] font-sans">Patient</p>
                      </div>
                    </div>
                    <p className="text-[13px] text-[#363636] font-sans leading-relaxed">
                      {reviews[reviewIndex].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="bg-black px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                  <span className="text-white text-xs font-semibold font-sans ml-2">5.0 RATING</span>
                  <span className="text-white/40 text-xs font-sans ml-2">{reviewIndex + 1}/{reviews.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={prevReview} className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button onClick={nextReview} className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
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
