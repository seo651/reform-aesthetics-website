import { Link } from 'react-router';
import { MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Testimonials', href: '/' },
  { label: 'Pricing', href: '/pricing' },
];

export function FooterSection() {
  return (
    <footer className="bg-cream pt-16 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-2xl tracking-[0.2em]">REFORM</span>
              <p className="text-[9px] tracking-[0.25em] text-gray-500 mt-0.5">
                AESTHETICS | DENTAL
              </p>
              <p className="font-serif text-sm tracking-[0.15em]">CLINIC</p>
            </div>

            {/* CQC Badge */}
            <div className="w-24 h-24 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-white">
                <div className="text-2xl font-light">Q</div>
                <div className="text-[8px] leading-tight">
                  CareQuality<br />Commission
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              We are a high-quality medical aesthetics clinic offering advanced anti-ageing
              treatments tailored to your individual goals. Serving clients across Leicester, we
              combine clinical expertise with a personalised approach to deliver safe, natural-looking
              results.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="w-12 h-0.5 bg-gray-800 mb-6" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-600 text-sm hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location */}
          <div>
            <h4 className="font-medium mb-4">Location</h4>
            <div className="w-12 h-0.5 bg-gray-800 mb-6" />
            <div className="rounded-xl overflow-hidden h-32 bg-gray-200">
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

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <div className="w-12 h-0.5 bg-gray-800 mb-6" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  18 De Montfort St, Leicester LE1 7GL, UK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <a href="tel:01163800318" className="text-gray-600 text-sm hover:text-black">
                  0116 3800318
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <a
                  href="mailto:info@reformmedical.co.uk"
                  className="text-gray-600 text-sm hover:text-black"
                >
                  info@reformmedical.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Copyright © 2026 Reform Skincare designed by{' '}
            <a href="https://get-found.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Get Found
            </a>
            .
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
            <a href="#" className="hover:text-black transition-colors">
              Cancellation Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-black transition-colors">
              Complaints Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
