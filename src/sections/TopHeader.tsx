import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'TREATMENTS', href: '/treatments', hasDropdown: true },
  { label: 'ABOUT US', href: '/about' },
  { label: 'DOCTORS', href: '/doctors' },
  { label: 'PRICING', href: '/pricing' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
];

/* Reform logo mark SVG — matches the decorative lotus/diamond in the O */
function ReformLogoMark({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Lotus / diamond ornament matching brand mark */}
      <path d="M12 2 C12 2 8 6 8 10 C8 14 12 16 12 16 C12 16 16 14 16 10 C16 6 12 2 12 2Z" opacity="0.9" />
      <path d="M12 8 C12 8 6 10 4 14 C6 16 10 16 12 16 C14 16 18 16 20 14 C18 10 12 8 12 8Z" opacity="0.7" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function TopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    /* Sticky wrapper — entire header block sticks together */
    <div className="sticky top-0 z-50 w-full">
      {/* ── Black top bar ── */}
      <header className="w-full bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">

            {/* Left: Menu hamburger + BOOK ONLINE */}
            <div className="flex items-center gap-3">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-[11px] font-sans font-semibold tracking-[0.08em] hover:bg-white/10 transition-colors">
                    <Menu className="w-3.5 h-3.5" />
                    MENU
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] bg-white p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b flex items-center gap-2">
                      <ReformLogoMark size={18} color="#111" />
                      <span className="font-sans font-bold text-sm tracking-[0.2em]">REFORM</span>
                    </div>
                    <nav className="flex-1 p-6">
                      <ul className="space-y-5">
                        {navLinks.map((link) => (
                          <li key={link.label}>
                            <Link
                              to={link.href}
                              onClick={() => setIsOpen(false)}
                              className={`text-base font-sans font-medium transition-colors ${
                                location.pathname === link.href
                                  ? 'text-black'
                                  : 'text-gray-500 hover:text-black'
                              }`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-6 border-t">
                      <a href="tel:01163800318" className="flex items-center gap-2 text-sm font-sans text-gray-600">
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
                className="px-5 py-2 rounded-full bg-white text-black text-[11px] font-sans font-semibold tracking-[0.08em] hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                BOOK ONLINE
              </a>
            </div>

            {/* Centre: Logo — absolutely centred */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 text-center flex flex-col items-center select-none"
            >
              {/* R E F ◆ R M with ornament in place of the O */}
              <div className="flex items-center gap-0">
                <span
                  className="text-white leading-none tracking-[0.22em] text-[22px] sm:text-[26px]"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  R E F
                </span>
                <span className="mx-1.5">
                  <ReformLogoMark size={22} color="white" />
                </span>
                <span
                  className="text-white leading-none tracking-[0.22em] text-[22px] sm:text-[26px]"
                  style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
                >
                  R M
                </span>
              </div>
              <span className="text-white/70 text-[8px] tracking-[0.28em] font-sans mt-0.5 uppercase">
                Aesthetics | Dental
              </span>
              <span
                className="text-white tracking-[0.35em] text-[11px] mt-0.5"
                style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
              >
                CLINIC
              </span>
            </Link>

            {/* Right: VIEW DENTAL CLINIC + phone */}
            <div className="flex items-center gap-3">
              <a
                href="https://reformdental.get-found.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-[11px] font-sans font-semibold tracking-[0.06em] hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                VIEW DENTAL CLINIC
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="tel:01163800318"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-[11px] font-sans font-semibold tracking-[0.06em] hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">0116 3800318</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── White nav bar ── */}
      <nav className="w-full bg-white border-b border-gray-100 hidden lg:block shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <ul className="flex items-center justify-center gap-10 h-[46px]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.label} className="relative group">
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 text-[11px] font-sans font-semibold tracking-[0.12em] transition-colors ${
                      isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    )}
                  </Link>
                  {/* Active underline */}
                  <span
                    className={`absolute -bottom-[1px] left-0 h-[2px] bg-black transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
