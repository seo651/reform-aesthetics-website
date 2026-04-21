import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, Phone, ArrowUpRight, ChevronDown, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

/* ── Treatment categories + subcategories ── */
const treatmentCategories = [
  {
    label: 'Skin',
    items: [
      '3D Skin Analysis',
      'Signature Pregnancy Glow Facial',
      'Esse Live Probiotic Facials',
      'Medical-Grade Skincare',
      'Carboxytherapy',
      'Heliocare',
    ],
  },
  {
    label: 'Face & Neck Rejuvenation',
    items: [
      'Chemical Skin Peels',
      'Skin Boosters (NCTF & Profhilo)',
      'Medical Microneedling',
      'Exosomes (Stem Cells) Treatment',
      'Polynucleotides',
      'PRP (Platelet-Rich Plasma)',
    ],
  },
  {
    label: 'Injectables',
    items: [
      'Anti-Wrinkle Treatments',
      'Hyperhidrosis Treatment',
      'Jaw Reduction (Bruxism) Treatment',
      'Migraine Treatment',
      'Gummy Smile Treatment',
    ],
  },
  {
    label: 'Fillers',
    items: [
      'Lip Fillers',
      'Cheek Fillers',
      'Dermal Fillers',
      'Tear Trough Filler',
      'Non-Surgical Rhinoplasty',
      'Ellansé Collagen-Stimulating Filler',
      'Filler Dissolving',
    ],
  },
  {
    label: 'Advanced Aesthetic Treatments',
    items: [
      'PDO Thread Lift',
      'Liquid Face Lift',
      'PRP (Vampire Facial)',
      'Hand Rejuvenation',
    ],
  },
  {
    label: 'Hair Loss Treatments',
    items: [
      'PRP Hair Rejuvenation',
      'PRF Hair Rejuvenation',
    ],
  },
  {
    label: 'Wellness',
    items: [
      'B12 & Biotin Injections',
      'Steroid Joint Injections',
      'Weight Loss Injections',
      'Nutrition Services',
      'Lymphatic Drainage Massage',
      'Mesoestetic',
    ],
  },
  {
    label: 'Specialist Treatments',
    items: [
      'Deep Vein Removal',
    ],
  },
];

const navLinks = [
  { label: 'TREATMENTS', href: '/treatments', hasDropdown: true },
  { label: 'ABOUT US', href: '/about' },
  { label: 'DOCTORS', href: '/doctors' },
  { label: 'PRICING', href: '/pricing' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
];

function LogoWhite({ height = 52 }: { height?: number }) {
  return (
    <img
      src="/images/logo-white.png"
      alt="Reform Aesthetics | Dental Clinic"
      style={{ height, width: 'auto', display: 'block' }}
      draggable={false}
    />
  );
}

function LogoDark({ height = 44 }: { height?: number }) {
  return (
    <img
      src="/images/logo-white.png"
      alt="Reform Aesthetics | Dental Clinic"
      style={{ height, width: 'auto', display: 'block', filter: 'invert(1)' }}
      draggable={false}
    />
  );
}

export function TopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* ── Black top bar ── */}
      <header className="w-full bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">

            {/* Left */}
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
                    <div className="p-6 border-b">
                      <LogoDark height={40} />
                    </div>
                    <nav className="flex-1 p-6 overflow-y-auto">
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

            {/* Centre: Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center select-none"
            >
              <LogoWhite height={54} />
            </Link>

            {/* Right */}
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
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.label}
                    className="relative group"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 text-[11px] font-sans font-semibold tracking-[0.12em] transition-colors ${
                        isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3 h-3 opacity-60 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    <span
                      className={`absolute -bottom-[1px] left-0 h-[2px] bg-black transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </li>
                );
              }
              return (
                <li key={link.label} className="relative group">
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 text-[11px] font-sans font-semibold tracking-[0.12em] transition-colors ${
                      isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {link.label}
                  </Link>
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

      {/* ── Treatments Mega Dropdown ── */}
      {dropdownOpen && (
        <div
          className="absolute top-full left-0 w-full bg-black z-40 shadow-2xl"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <div className="max-w-[1400px] mx-auto flex">

            {/* Left: Categories */}
            <div className="w-[480px] flex-shrink-0 border-r border-white/10">
              {treatmentCategories.map((cat, idx) => (
                <div
                  key={cat.label}
                  onMouseEnter={() => setActiveCategory(idx)}
                  className={`flex items-center justify-between px-10 py-5 cursor-pointer transition-colors ${
                    activeCategory === idx ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <span className="text-white text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                    {cat.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </div>
              ))}
            </div>

            {/* Right: Subcategory items */}
            <div className="flex-1 px-12 py-6">
              <div className="columns-2 gap-x-10">
                {treatmentCategories[activeCategory].items.map((item) => (
                  <Link
                    key={item}
                    to="/treatments"
                    onClick={() => setDropdownOpen(false)}
                    className="block text-white/80 text-[12px] font-sans tracking-[0.15em] uppercase py-4 border-b border-white/10 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
