import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, Phone, ArrowUpRight, ChevronDown, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

/* ── Treatment categories + subcategories ── */
const treatmentCategories = [
  {
    label: 'Skin',
    items: [
      { label: '3D Skin Analysis', href: '/treatments/3d-skin-analysis' },
      { label: 'Signature Pregnancy Glow Facial', href: '/treatments/signature-pregnancy-glow-facial' },
      { label: 'Esse Live Probiotic Facials', href: '/treatments/signature-facials' },
      { label: 'Skin Peels', href: '/treatments/skin-peels' },
      { label: 'Medical-Grade Skincare', href: '/treatments/medical-grade-skincare' },
      { label: 'Medical Microneedling', href: '/treatments/medical-microneedling' },
      { label: 'Carboxytherapy', href: '/treatments/carboxytherapy' },
    ],
  },
  {
    label: 'Face & Neck Rejuvenation',
    items: [
      { label: 'Dermal Fillers', href: '/treatments/dermal-fillers' },
      { label: 'Skin Boosters', href: '/treatments/skin-boosters' },
      { label: 'Polynucleotides', href: '/treatments/polynucleotides' },
      { label: 'Thread Lifts', href: '/treatments/thread-lifts' },
      { label: 'Collagen-Stimulating Injections', href: '/treatments/collagen-stimulating' },
      { label: 'Neck Rejuvenation', href: '/treatments/neck-rejuvenation' },
    ],
  },
  {
    label: 'Injectables',
    items: [
      { label: 'Anti-Wrinkle Injections', href: '/treatments/anti-wrinkle' },
      { label: 'Lip Fillers', href: '/treatments/lip-fillers' },
      { label: 'Nose Filler (Non-Surgical Rhinoplasty)', href: '/treatments/nose-filler' },
      { label: 'Chin & Face Filler', href: '/treatments/chin-face-filler' },
      { label: 'Jawline Contouring', href: '/treatments/jawline-contouring' },
      { label: 'Under-Eye Filler', href: '/treatments/under-eye-filler' },
      { label: 'Profhilo', href: '/treatments/profhilo' },
      { label: 'Fat-Dissolving Injections', href: '/treatments/fat-dissolving' },
    ],
  },
  {
    label: 'Fillers',
    items: [
      { label: 'Dermal Fillers', href: '/treatments/dermal-fillers' },
      { label: 'Lip Fillers', href: '/treatments/lip-fillers' },
      { label: 'Tear Trough Filler', href: '/treatments/under-eye-filler' },
      { label: 'Chin & Face Filler', href: '/treatments/chin-face-filler' },
      { label: 'Non-Surgical Rhinoplasty', href: '/treatments/nose-filler' },
      { label: 'Collagen-Stimulating Filler (Ellansé)', href: '/treatments/collagen-stimulating' },
      { label: 'Jawline Contouring', href: '/treatments/jawline-contouring' },
    ],
  },
  {
    label: 'Advanced Aesthetic Treatments',
    items: [
      { label: 'PDO Thread Lift', href: '/treatments/thread-lifts' },
      { label: 'Gummy Smile Correction', href: '/treatments/gummy-smile' },
      { label: 'Hyperhidrosis Treatment', href: '/treatments/hyperhidrosis' },
      { label: 'Bruxism & TMJ Treatment', href: '/treatments/bruxism-tmj' },
      { label: 'Vein Removal', href: '/treatments/vein-removal' },
    ],
  },
  {
    label: 'Hair Loss Treatments',
    items: [
      { label: 'Hair Loss Overview', href: '/treatments/hair-loss' },
      { label: 'PRP Hair & Skin', href: '/treatments/prp' },
      { label: 'Exosome Therapy', href: '/treatments/exosomes' },
      { label: 'Vitamin Injections (Biotin & B12)', href: '/treatments/vitamin-injections' },
    ],
  },
  {
    label: 'Wellness',
    items: [
      { label: 'Weight Loss Injections', href: '/treatments/weight-loss' },
      { label: 'Lymphatic Drainage Massage', href: '/treatments/lymphatic-drainage' },
      { label: 'Vitamin Injections', href: '/treatments/vitamin-injections' },
    ],
  },
  {
    label: 'Specialist Treatments',
    items: [
      { label: 'Deep Vein Removal', href: '/treatments/vein-removal' },
      { label: 'Carboxytherapy', href: '/treatments/carboxytherapy' },
    ],
  },
];

const navLinks = [
  { label: 'TREATMENTS', href: '/treatments', hasDropdown: true },
  { label: 'ABOUT US', href: '/about' },
  { label: 'TEAM', href: '/doctors' },
  { label: 'PRICING', href: '/pricing' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
];

function LogoWhite({ height = 52 }: { height?: number }) {
  return (
    <img
      src="/images/logo-white.png"
      alt="Reform Aesthetics and Dental"
      style={{ height, width: 'auto', display: 'block' }}
      draggable={false}
    />
  );
}

function LogoDark({ height = 44 }: { height?: number }) {
  return (
    <img
      src="/images/logo-white.png"
      alt="Reform Aesthetics and Dental"
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
      <nav className="w-full bg-white border-b border-gray-200 hidden lg:block shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <ul className="flex items-center justify-center gap-10 h-[46px]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.label}
                    className="relative h-full flex items-center"
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

                    {/* ── Compact Dropdown — positioned under TREATMENTS li ── */}
                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 z-50 flex shadow-xl border border-gray-200 rounded-b-xl overflow-hidden"
                        style={{ minWidth: 660 }}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                      >
                        {/* Left: Categories — cream bg */}
                        <div className="bg-[#F5F2EE] w-[260px] flex-shrink-0 border-r border-gray-200 py-2">
                          {treatmentCategories.map((cat, idx) => (
                            <div
                              key={cat.label}
                              onMouseEnter={() => setActiveCategory(idx)}
                              className={`flex items-center justify-between px-5 py-3.5 cursor-pointer transition-colors ${
                                activeCategory === idx
                                  ? 'bg-white text-gray-900'
                                  : 'text-gray-600 hover:bg-white/60 hover:text-gray-900'
                              }`}
                            >
                              <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase">
                                {cat.label}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-50 flex-shrink-0" />
                            </div>
                          ))}
                        </div>

                        {/* Right: Subcategory items — white bg */}
                        <div className="bg-white flex-1 py-3 px-2">
                          {treatmentCategories[activeCategory].items.map((item) => (
                            <Link
                              key={item.href + item.label}
                              to={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-4 py-3 text-[11px] font-sans font-medium tracking-[0.12em] uppercase text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-50 last:border-b-0"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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
    </div>
  );
}
