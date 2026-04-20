import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, Phone, ArrowUpRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function TopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Treatments', href: '/treatments' },
    { label: 'About Us', href: '/about' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top Black Bar */}
      <header className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Menu + Book Online */}
            <div className="flex items-center gap-3">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors">
                    <Menu className="w-4 h-4" />
                    <span className="hidden sm:inline">MENU</span>
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] bg-white p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b">
                      <Link to="/" onClick={() => setIsOpen(false)} className="font-serif text-xl tracking-wider">
                        REFORM
                      </Link>
                    </div>
                    <nav className="flex-1 p-6">
                      <ul className="space-y-4">
                        {navLinks.map((link) => (
                          <li key={link.label}>
                            <Link
                              to={link.href}
                              onClick={() => setIsOpen(false)}
                              className={`text-lg font-medium transition-colors ${
                                location.pathname === link.href ? 'text-black' : 'text-gray-600 hover:text-black'
                              }`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-6 border-t">
                      <a
                        href="tel:01163800318"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Phone className="w-4 h-4" />
                        0116 3800318
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <a
                href="https://pearlportal.net/Portal/rad/OnlineBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                BOOK ONLINE
              </a>
            </div>

            {/* Center: Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-center">
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em]">
                  REFORM
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-white/80">
                  AESTHETICS | DENTAL
                </span>
                <span className="font-serif text-xs sm:text-sm tracking-[0.15em]">CLINIC</span>
              </div>
            </Link>

            {/* Right: View Dental + Phone */}
            <div className="flex items-center gap-3">
              <a
                href="https://reformdental.get-found.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                VIEW DENTAL CLINIC
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="tel:01163800318"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">0116 3800318</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="w-full bg-white border-b border-gray-100 hidden lg:block sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-8 h-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium tracking-wider transition-colors relative group ${
                    location.pathname === link.href ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link.label.toUpperCase()}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
