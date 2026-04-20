import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Treatments', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Testimonials', href: '#' },
  { label: 'Pricing', href: '#' }
]

const hours = [
  { day: 'Monday', time: '9:00 am - 6:00 pm' },
  { day: 'Tuesday', time: '9:00 am - 7:00 pm' },
  { day: 'Wednesday', time: '9:00 am - 6:00 pm' },
  { day: 'Thursday', time: '9:00 am - 7:00 pm' },
  { day: 'Friday', time: '9:00 am - 6:00 pm' },
  { day: 'Saturday', time: '10:00 am - 4:00 pm' },
  { day: 'Sunday', time: 'Closed' }
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="tracking-[0.35em] text-lg font-light">
                R E F O R M
              </div>
              <div className="text-[10px] tracking-[0.2em] text-gray-400 mt-1">AESTHETICS | DENTAL</div>
              <div className="tracking-[0.3em] text-sm font-light mt-1">C L I N I C</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Independent aesthetic clinic in Leicester providing personalised, science-based skincare solutions.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brown transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brown mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">18 De Montfort St, Leicester LE1 7GL, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brown shrink-0" />
                <a href="tel:01163800318" className="text-gray-400 text-sm hover:text-white transition-colors">
                  0116 3800318
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brown shrink-0" />
                <a href="mailto:info@reformmedical.co.uk" className="text-gray-400 text-sm hover:text-white transition-colors">
                  info@reformmedical.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-base mb-6">Opening Hours</h4>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="text-gray-400">{h.day}</span>
                  <span className={h.time === 'Closed' ? 'text-red-400' : 'text-white/80'}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CQC Badge + Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-lg px-3 py-1.5 text-xs font-medium tracking-wide">
                CQC REGISTERED
              </div>
              <span className="text-gray-500 text-xs">Quality assured medical aesthetics</span>
            </div>
            <div className="text-gray-500 text-xs text-center sm:text-right">
              &copy; {new Date().getFullYear()} Reform Aesthetics & Dental Clinic. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
