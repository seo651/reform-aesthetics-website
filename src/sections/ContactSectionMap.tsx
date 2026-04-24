import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const openingHours = [
  { day: 'Monday',    hours: 'Closed' },
  { day: 'Tuesday',   hours: '8:30 am – 5:30 pm' },
  { day: 'Wednesday', hours: 'Closed' },
  { day: 'Thursday',  hours: 'Closed' },
  { day: 'Friday',    hours: '8:30 am – 5:00 pm' },
  { day: 'Saturday',  hours: '10:00 am – 3:00 pm' },
  { day: 'Sunday',    hours: '10:00 am – 3:00 pm' },
];

const treatmentOptions = [
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
  'Skin Boosters',
  'Profhilo',
  'Polynucleotides',
  'Skin Peels',
  'Medical Microneedling',
  'Carboxytherapy',
  'Medical-Grade Skincare',
  '3D Skin Analysis',
  'Signature Facials',
  'Signature Pregnancy Glow Facial',
  'PRP Hair Rejuvenation',
  'PRF Hair Rejuvenation',
  'Hair Loss Treatments',
  'Exosomes Hair Treatment',
  'PRP Vampire Facial',
  'PDO Thread Lifts',
  'Fat Dissolving',
  'Lymphatic Drainage Massage',
  'Hand Rejuvenation',
  'Vitamin Injections (B12 & Biotin)',
  'Weight Loss Injections',
  'Hyperhidrosis (Excessive Sweating)',
  'Bruxism / TMJ (Teeth Grinding)',
  'Gummy Smile Correction',
  'Vein Removal',
];

export function ContactSectionMap() {
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
    <section id="contact" className="py-8 mx-4 sm:mx-6 lg:mx-8">
      <AnimatedSection>
        <div className="bg-[#efeae7] rounded-[2.5rem] overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* Left: Map + overlay cards */}
            <div className="relative min-h-[560px]">
              <div className="absolute inset-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.6!2d-1.1305!3d52.6293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e1e1e1e1e1e1%3A0x0!2zNTLCsDM3JzQ1LjUiTiAxwrAwNyc1MC4wIlc!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reform Clinic Location"
                />
              </div>

              {/* Overlay cards */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row gap-3">
                {/* Opening Hours */}
                <div className="bg-black/85 backdrop-blur-sm text-white rounded-xl px-5 py-5 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="10" cy="10" r="8" />
                        <path d="M10 6v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-base text-white" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
                      Opening Hours
                    </span>
                  </div>
                  <div className="space-y-1">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center gap-4 text-[11.5px] font-sans">
                        <span className={item.hours === 'Closed' ? 'text-white/40' : 'text-white/80'}>{item.day}</span>
                        <span className={item.hours === 'Closed' ? 'text-white/30' : 'text-[#c5b1a1]'}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-black/85 backdrop-blur-sm text-white rounded-xl px-5 py-5 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h3l1.5 3.5-2 1.2a11 11 0 0 0 4.8 4.8l1.2-2L16 13v3a1 1 0 0 1-1 1C7.16 17 3 12.84 3 5a1 1 0 0 1 1-1z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-base text-white" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
                      Contact Information
                    </span>
                  </div>
                  <div className="space-y-3 font-sans">
                    <div>
                      <p className="text-[#c5b1a1] text-[10px] font-semibold tracking-widest uppercase mb-1">PHONE</p>
                      <a href="tel:01163800318" className="text-white/80 text-sm hover:underline">0116 3800318</a>
                    </div>
                    <div>
                      <p className="text-[#c5b1a1] text-[10px] font-semibold tracking-widest uppercase mb-1">EMAIL ADDRESS</p>
                      <a href="mailto:info@reformmedical.co.uk" className="text-white/80 text-sm hover:underline">info@reformmedical.co.uk</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 sm:p-12 text-left">
              <div className="flex justify-start">
                <SectionBadge text="Contact Us" />
              </div>
              <h2
                className="text-4xl sm:text-5xl mt-5 mb-10 text-black leading-tight"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                Get in touch with us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#363636] mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#363636] mb-2">Last Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans font-medium text-[#363636] mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans placeholder:text-gray-400"
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
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#363636] mb-2">I am interested in... <span className="text-red-400">*</span></label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors font-sans text-[#363636] appearance-none cursor-pointer"
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
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-gray-800 transition-colors resize-none font-sans placeholder:text-gray-400"
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

          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
