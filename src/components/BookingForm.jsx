import { useState } from 'react'
import { Send } from 'lucide-react'

const treatmentOptions = [
  'Anti-Wrinkle Injections',
  'Dermal Fillers',
  'Collagen-Stimulating Injections',
  'Polynucleotides',
  'Skin Peels',
  'Carboxytherapy',
  'Skin Boosters',
  'Signature Facials',
  'Weight Loss Management',
  'Joint Injections',
  'General Consultation',
  'Other'
]

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', treatment: '', message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your enquiry! We will be in touch shortly.')
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA */}
          <div>
            <span className="text-brown text-sm tracking-wider uppercase font-medium">Book a Consultation</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-dark mt-4 mb-6 leading-tight">
              Explore Our Services for Lasting Skin Health!
            </h2>
            <p className="text-gray-text text-lg leading-relaxed mb-8">
              Ready to start your skincare journey? Fill out the form and one of our team
              will be in touch to arrange your personalised consultation. We're here to answer
              any questions and help you find the right treatment for your needs.
            </p>
            <div className="bg-beige rounded-2xl p-8">
              <h3 className="font-semibold text-dark text-lg mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  'A thorough skin assessment with one of our experts',
                  'Personalised treatment recommendations',
                  'Clear pricing with no hidden costs',
                  'A relaxed, pressure-free environment'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-text">
                    <div className="w-5 h-5 rounded-full bg-brown/20 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brown" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-light-bg rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors bg-white"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors bg-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors bg-white"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Treatment Interest</label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors bg-white appearance-none"
                  required
                >
                  <option value="">Select a treatment</option>
                  {treatmentOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors bg-white resize-none"
                  placeholder="Tell us about your skin concerns..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Arrange Your Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
