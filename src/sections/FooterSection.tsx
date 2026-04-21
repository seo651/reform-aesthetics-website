import { Link } from 'react-router';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Testimonials', href: '/' },
  { label: 'Pricing', href: '/pricing' },
];

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TwitterXIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-[#EDE8E2]">

      {/* ── Top CTA Row ── */}
      <div className="px-6 sm:px-10 lg:px-16 pt-14 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

          {/* Left: Heading */}
          <h2
            className="italic text-4xl sm:text-5xl lg:text-[52px] leading-[1.15] text-gray-900 lg:max-w-md"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Reach out to a<br />member of our team
          </h2>

          {/* Centre: CTA Button */}
          <div className="flex items-center">
            <a
              href="https://pearlportal.net/Portal/rad/OnlineBooking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gray-900 text-white text-[11px] font-semibold tracking-[0.14em] uppercase hover:bg-black transition-colors font-sans"
            >
              SECURE YOUR SMILE SLOT
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Social Media */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-900 mb-3 font-sans">SOCIAL MEDIA</p>
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-black transition-colors font-sans"
              >
                <LinkedinIcon />
                Linkedin
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-black transition-colors font-sans"
              >
                <InstagramIcon />
                Instagram
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-black transition-colors font-sans"
              >
                <TwitterXIcon />
                Twitter
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mx-6 sm:mx-10 lg:mx-16" />

      {/* ── Main Footer Grid ── */}
      <div className="px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1: Logo + CQC + Description */}
          <div>
            <div className="mb-5">
              <img
                src="/images/logo-white.png"
                alt="Reform Aesthetics | Dental Clinic"
                style={{ height: 56, width: 'auto', filter: 'invert(1)' }}
                draggable={false}
              />
            </div>

            {/* CQC Badge */}
            <div className="w-[110px] h-[76px] bg-[#5c2d91] rounded-lg flex items-center justify-center mb-5">
              <div className="text-center text-white px-2">
                <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-1">
                  <span className="text-sm font-bold font-sans">Q</span>
                </div>
                <div className="text-[7.5px] leading-tight font-medium font-sans">
                  CareQuality<br />Commission
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed font-sans">
              We are a high-quality medical aesthetics clinic offering advanced anti-ageing
              treatments tailored to your individual goals. Serving clients across Leicester, we
              combine clinical expertise with a personalised approach to deliver safe, natural-looking
              results.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-sans font-medium text-sm tracking-wide mb-3 text-gray-900">Quick Links</h4>
            <div className="w-10 h-0.5 bg-gray-800 mb-5" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-500 text-sm font-sans hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location Map */}
          <div>
            <h4 className="font-sans font-medium text-sm tracking-wide mb-3 text-gray-900">Location</h4>
            <div className="w-10 h-0.5 bg-gray-800 mb-5" />
            <div className="rounded-xl overflow-hidden h-44 bg-gray-200">
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
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-sans font-medium text-sm tracking-wide mb-3 text-gray-900">Contact Us</h4>
            <div className="w-10 h-0.5 bg-gray-800 mb-5" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm leading-snug font-sans">
                  18 De Montfort St, Leicester LE1 7GL, UK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="tel:01163800318" className="text-gray-500 text-sm font-sans hover:text-black transition-colors">
                  0116 3800318
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:info@reformmedical.co.uk"
                  className="text-gray-500 text-sm font-sans hover:text-black transition-colors"
                >
                  info@reformmedical.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-300">
        <div className="px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-sans">
            COPYRIGHT © 2026 REFORM SKINCARE DESIGNED BY{' '}
            <a href="https://get-found.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GET FOUND
            </a>
            .
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider font-sans">
            <a href="#" className="hover:text-black transition-colors">CANCELLATION POLICY</a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-black transition-colors">COMPLAINTS POLICY</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
