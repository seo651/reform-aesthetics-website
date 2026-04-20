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
    firstName: '', lastName: '', email: '', phone: '', treatment: '', message: ''
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your enquiry! We will be in touch shortly.')
  }

  return (
    <section id="booking" className="py-14 sm:py-18 bg-beige">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <p className="text-center text-gray-text text-[13px] mb-8 max-w-md mx-auto">
          Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left - Hours + Contact */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-beige rounded-lg flex items-center justify-center">
                  <Clock size={15} className="text-brown" />
                </div>
                <h3 className="font-semibold text-dark text-[15px]">Opening Hours</h3>
              </div>
              <ul className="space-y-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-[13px]">
                    <span className="text-gray-text">{h.day}</span>
                    <span className={h.time === 'Closed' ? 'text-red-500 font-medium' : 'text-dark font-medium'}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-beige rounded-lg flex items-center justify-center">
                  <Phone size={15} className="text-brown" />
                </div>
                <h3 className="font-semibold text-dark text-[15px]">Contact Information</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-brown mt-0.5 shrink-0" />
                  <span className="text-gray-text text-[13px]">18 De Montfort St, Leicester LE1 7GL, UK</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={14} className="text-brown shrink-0" />
                  <a href="tel:01163800318" className="text-gray-text text-[13px] hover:text-dark transition-colors">0116 3800318</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="text-brown shrink-0" />
                  <a href="mailto:info@reformmedical.co.uk" className="text-gray-text text-[13px] hover:text-dark transition-colors">info@reformmedical.co.uk</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-xl p-5 sm:p-7">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <div className="w-5 h-5 rounded-full border border-brown/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brown rounded-full" />
              </div>
              <span className="text-brown text-[11px] tracking-wider uppercase font-medium">Contact Us</span>
            </div>
            <h3 className="font-serif text-[22px] sm:text-[26px] text-dark text-center mb-6">Get in touch with us</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-gray-text mb-1">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none text-[13px] bg-light-bg" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-gray-text mb-1">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none text-[13px] bg-light-bg" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-gray-text mb-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none text-[13px] bg-light-bg" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-gray-text mb-1">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none text-[13px] bg-light-bg" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-text mb-1">I am interested in</label>
                <select name="treatment" value={formData.treatment} onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none text-[13px] bg-light-bg appearance-none">
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
                <label className="block text-[11px] font-medium text-gray-text mb-1">Any problems you are having and how we can help</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brown focus:ring-1 focus:ring-brown outline-none text-[13px] bg-light-bg resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-black text-white py-2.5 rounded-full text-[12px] font-medium tracking-wider hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                SUBMIT DETAILS
                <Send size={12} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
