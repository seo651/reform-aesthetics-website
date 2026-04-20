import { useState } from 'react';
import { ArrowUpRight, MapPin, Phone, Globe } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const openingHours = [
  { day: 'Monday', hours: '9:00 am – 6:00 pm' },
  { day: 'Tuesday', hours: '9:00 am – 7:00 pm' },
  { day: 'Wednesday', hours: '9:00 am – 6:00 pm' },
  { day: 'Thursday', hours: '9:00 am – 7:00 pm' },
  { day: 'Friday', hours: '9:00 am – 5:00 pm' },
  { day: 'Saturday', hours: '10:00 am – 4:00 pm' },
  { day: 'Sunday', hours: 'Closed' },
];

const treatmentOptions = [
  'Anti-Wrinkle Treatments',
  'Dermal Fillers',
  'Skin Boosters',
  'Signature Facials',
  'Skin Peels',
  'Polynucleotides',
  'PRP Treatment',
  'Microneedling',
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
    <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-cream rounded-[2.5rem] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left: Map + Info */}
              <div className="relative min-h-[500px]">
                {/* Map Placeholder */}
                <div className="absolute inset-0 bg-gray-300">
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

                {/* Overlay Cards */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row gap-4">
                  {/* Opening Hours */}
                  <div className="bg-black/80 backdrop-blur-sm text-white rounded-xl p-4 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-sm">Opening Hours</span>
                    </div>
                    <div className="space-y-1 text-xs text-white/80">
                      {openingHours.map((item) => (
                        <div key={item.day} className="flex justify-between">
                          <span>{item.day}</span>
                          <span>{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-black/80 backdrop-blur-sm text-white rounded-xl p-4 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-sm">Contact Information</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-blue-400 uppercase tracking-wider">Phone</span>
                        <p className="text-white/90 mt-0.5">
                          <a href="tel:01163800318" className="hover:underline">0116 3800318</a>
                        </p>
                      </div>
                      <div>
                        <span className="text-blue-400 uppercase tracking-wider">Email Address</span>
                        <p className="text-white/90 mt-0.5">
                          <a href="mailto:info@reformmedical.co.uk" className="hover:underline">info@reformmedical.co.uk</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="p-8 sm:p-12">
                <SectionBadge text="Contact Us" />
                <h2 className="font-serif text-3xl sm:text-4xl mt-4 mb-8">
                  Get in touch with us
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-black transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-black transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-black transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">I am interested in...</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="">Select a treatment</option>
                      {treatmentOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Describe your problems and how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-400 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all hover:scale-[1.02]"
                  >
                    SUBMIT MESSAGE
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <AnimatedSection delay={0.2}>
          <div className="mt-8 bg-cream rounded-[2rem] px-8 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl">
                  Reach out to a<br />member of our team
                </h3>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                SECURE YOUR SMILE SLOT
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-3 block">
                  Social Media
                </span>
                <div className="flex items-center gap-4">
                  {[
                    { label: 'Linkedin', href: 'https://sg.linkedin.com/in/dr-priya-sonia-patel-a7078b31' },
                    { label: 'Instagram', href: 'https://www.instagram.com/reform_medical/' },
                    { label: 'Twitter', href: 'https://x.com/Reformedical' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      {social.label}
                    </a>
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
