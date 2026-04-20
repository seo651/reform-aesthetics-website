import { useState } from 'react'
import { Clock, Phone, Mail, MapPin, Send } from 'lucide-react'

const hours = [
  { day: 'Monday', time: '9:00 am - 6:00 pm' },
  { day: 'Tuesday', time: '9:00 am - 7:00 pm' },
  { day: 'Wednesday', time: '9:00 am - 6:00 pm' },
  { day: 'Thursday', time: '9:00 am - 7:00 pm' },
  { day: 'Friday', time: '9:00 am - 6:00 pm' },
  { day: 'Saturday', time: '10:00 am - 4:00 pm' },
  { day: 'Sunday', time: 'Closed' }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', dFirstName: '', dLastName: '',
    email: '', phone: '', treatment: '', message: ''
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your enquiry! We will be in touch shortly.')
  }

  return (
    <section id="booking" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro text */}
        <div className="text-center mb-10">
          <p className="text-gray-text text-sm max-w-xl mx-auto">
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Opening Hours + Contact Info */}
          <div className="space-y-8">
            {/* Opening Hours Card */}
            <div className="bg-white rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-beige rounded-xl flex items-center justify-center">
                  <Clock size={18} className="text-brown" />
                </div>
                <h3 className="font-semibold text-dark text-lg">Opening Hours</h3>
              </div>
              <ul className="space-y-2.5">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="text-gray-text">{h.day}</span>
                    <span className={h.time === 'Closed' ? 'text-red-500 font-medium' : 'text-dark font-medium'}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-beige rounded-xl flex items-center justify-center">
                  <Phone size={18} className="text-brown" />
                </div>
                <h3 className="font-semibold text-dark text-lg">Contact Information</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-brown mt-0.5 shrink-0" />
                  <span className="text-gray-text text-sm">18 De Montfort St, Leicester LE1 7GL, UK</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-brown shrink-0" />
                  <a href="tel:01163800318" className="text-gray-text text-sm hover:text-dark transition-colors">0116 3800318</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-brown shrink-0" />
                  <a href="mailto:info@reformmedical.co.uk" className="text-gray-text text-sm hover:text-dark transition-colors">info@reformmedical.co.uk</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl p-7 md:p-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full border border-brown/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brown rounded-full" />
              </div>
              <span className="text-brown text-xs tracking-wider uppercase font-medium">Contact Us</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-dark text-center mb-8">Get in touch with us</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-text mb-1.5">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors text-sm bg-light-bg" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-text mb-1.5">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors text-sm bg-light-bg" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-text mb-1.5">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors text-sm bg-light-bg" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-text mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors text-sm bg-light-bg" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-text mb-1.5">I am interested in</label>
                <select name="treatment" value={formData.treatment} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors text-sm bg-light-bg appearance-none">
                  <option value="">Select a treatment</option>
                  <option>Anti-Wrinkle Injections</option>
                  <option>Dermal Fillers</option>
                  <option>Collagen-Stimulating Injections</option>
                  <option>Polynucleotides</option>
                  <option>Skin Peels</option>
                  <option>Carboxytherapy</option>
                  <option>Skin Boosters</option>
                  <option>Signature Facials</option>
                  <option>General Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-text mb-1.5">Any problems you are having and how we can help</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none transition-colors text-sm bg-light-bg resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-black text-white py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                SUBMIT DETAILS
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
