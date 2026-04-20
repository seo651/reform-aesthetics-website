import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const quickLinks = [
  'About Us', 'Treatments', 'Blog', 'Contact Us', 'Testimonials', 'Pricing'
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 sm:py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] text-white leading-[1.2] mb-6">
                Reach out to a member of our team
              </h2>

              <div className="mb-6">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2.5">Secure Your Email</p>
                <div className="flex gap-2.5 max-w-sm">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-[13px] text-white placeholder:text-gray-500 outline-none focus:border-brown"
                  />
                  <button className="bg-white text-dark px-5 py-2 rounded-full text-[12px] font-medium hover:bg-beige transition-colors">
                    SUBMIT
                  </button>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2.5">Social Media</p>
                <div className="flex gap-4">
                  {['Linkedin', 'Instagram', 'Twitter'].map((label) => (
                    <a key={label} href="#" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-[13px]">
                      <Globe size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Links grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* Brand */}
              <div>
                <div className="mb-4">
                  <div className="tracking-[0.25em] text-[13px] font-light">R E F O R M</div>
                  <div className="text-[8px] tracking-[0.12em] text-gray-500 mt-px">AESTHETICS | DENTAL</div>
                  <div className="tracking-[0.2em] text-[11px] font-light mt-px">C L I N I C</div>
                </div>
                <div className="bg-white/10 rounded-md px-2.5 py-1.5 inline-block mb-3">
                  <div className="text-[9px] font-bold tracking-wide">CQC</div>
                  <div className="text-[7px] text-gray-400">Quality Commission</div>
                </div>
                <p className="text-gray-500 text-[11px] leading-[1.5]">
                  High quality medical aesthetics clinic offering advanced treatments delivered by experienced clinicians.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-[13px] mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 text-[13px] hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location + Contact */}
              <div>
                <h4 className="font-semibold text-[13px] mb-4">Location</h4>
                <div className="flex items-start gap-2 mb-5">
                  <MapPin size={13} className="text-brown mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-[12px]">18 De Montfort St, Leicester LE1 7GL</span>
                </div>
                <h4 className="font-semibold text-[13px] mb-3">Contact Us</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Phone size={12} className="text-brown shrink-0" />
                    <a href="tel:01163800318" className="text-gray-400 text-[12px] hover:text-white transition-colors">0116 3800318</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={12} className="text-brown shrink-0" />
                    <a href="mailto:info@reformmedical.co.uk" className="text-gray-400 text-[12px] hover:text-white transition-colors">info@reformmedical.co.uk</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-gray-600 text-[11px]">
            COPYRIGHT &copy; {new Date().getFullYear()} REFORM SKINCARE IS DESIGNED BY GET FOUND
          </span>
          <div className="flex gap-4 text-[11px]">
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">CANCELLATION POLICY</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">COMPLAINTS POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
