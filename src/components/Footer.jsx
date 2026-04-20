import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const quickLinks = [
  'About Us', 'Treatments', 'Blog', 'Contact Us', 'Testimonials', 'Pricing'
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Reach Out Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                Reach out to a member of our team
              </h2>

              {/* Secure Email Signup */}
              <div className="mb-8">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Secure Your Email</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-brown"
                  />
                  <button className="bg-white text-dark px-6 py-2.5 rounded-full text-sm font-medium hover:bg-beige transition-colors">
                    SUBMIT
                  </button>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Social Media</p>
                <div className="flex gap-4">
                  {['Linkedin', 'Instagram', 'Twitter'].map((label) => (
                    <a key={label} href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                      <Globe size={16} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Logo + Links */}
            <div className="grid sm:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="mb-5">
                  <div className="tracking-[0.3em] text-base font-light">R E F O R M</div>
                  <div className="text-[9px] tracking-[0.15em] text-gray-500 mt-0.5">AESTHETICS | DENTAL</div>
                  <div className="tracking-[0.25em] text-xs font-light mt-0.5">C L I N I C</div>
                </div>
                {/* CQC Badge */}
                <div className="bg-white/10 rounded-lg p-3 inline-block mb-4">
                  <div className="text-[10px] font-bold tracking-wide text-white">CQC</div>
                  <div className="text-[8px] text-gray-400">Quality Commission</div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We are a high quality medical aesthetics clinic offering advanced and rejuvenating treatments delivered by experienced clinicians.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-sm mb-5">Quick Links</h4>
                <ul className="space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location + Contact */}
              <div>
                <h4 className="font-semibold text-sm mb-5">Location</h4>
                <div className="flex items-start gap-2 mb-6">
                  <MapPin size={14} className="text-brown mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-sm">18 De Montfort St, Leicester LE1 7GL</span>
                </div>

                <h4 className="font-semibold text-sm mb-4">Contact Us</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2">
                    <Phone size={13} className="text-brown shrink-0" />
                    <a href="tel:01163800318" className="text-gray-400 text-sm hover:text-white transition-colors">0116 3800318</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={13} className="text-brown shrink-0" />
                    <a href="mailto:info@reformmedical.co.uk" className="text-gray-400 text-sm hover:text-white transition-colors">info@reformmedical.co.uk</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-600 text-xs">
            COPYRIGHT &copy; {new Date().getFullYear()} REFORM SKINCARE IS DESIGNED BY GET FOUND
          </span>
          <div className="flex gap-4 text-xs">
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">CANCELLATION POLICY</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">COMPLAINTS POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
