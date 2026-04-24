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
      { label: 'Medical-Grade Skincare', href: '/treatments/medical-grade-skincare' },
      { label: 'Carboxytherapy', href: '/treatments/carboxytherapy' },
    ],
  },
  {
    label: 'Face & Neck Rejuvenation',
    items: [
      { label: 'Chemical Skin Peels', href: '/treatments/skin-peels' },
      { label: 'Skin Boosters (NCTF & Profhilo)', href: '/treatments/skin-boosters' },
      { label: 'Medical Microneedling', href: '/treatments/medical-microneedling' },
      { label: 'Exosomes (Stem Cells) Treatment', href: '/treatments/exosomes' },
      { label: 'Polynucleotides', href: '/treatments/polynucleotides' },
      { label: 'PRP (Platelet-Rich Plasma)', href: '/treatments/prp' },
    ],
  },
  {
    label: 'Injectables',
    items: [
      { label: 'Anti-Wrinkle Treatments', href: '/treatments/anti-wrinkle' },
      { label: 'Hyperhidrosis Treatment', href: '/treatments/hyperhidrosis' },
      { label: 'Jaw Reduction (Bruxism) Treatment', href: '/treatments/bruxism-tmj' },
      { label: 'Gummy Smile Treatment', href: '/treatments/gummy-smile' },
    ],
  },
  {
    label: 'Fillers',
    items: [
      { label: 'Lip Fillers', href: '/treatments/lip-fillers' },
      { label: 'Cheek Fillers', href: '/treatments/chin-face-filler' },
      { label: 'Dermal Fillers', href: '/treatments/dermal-fillers' },
      { label: 'Tear Trough Filler', href: '/treatments/under-eye-filler' },
      { label: 'Non-Surgical Rhinoplasty', href: '/treatments/nose-filler' },
      { label: 'Ellansé Collagen-Stimulating Filler', href: '/treatments/collagen-stimulating' },
      { label: 'Filler Dissolving', href: '/treatments/filler-dissolving' },
    ],
  },
  {
    label: 'Advanced Aesthetic Treatments',
    items: [
      { label: 'PDO Thread Lift', href: '/treatments/thread-lifts' },
      { label: 'Liquid Face Lift', href: '/treatments/liquid-facelift' },
      { label: 'PRP (Vampire Facial)', href: '/treatments/prp' },
      { label: 'Hand Rejuvenation', href: '/treatments/neck-rejuvenation' },
    ],
  },
  {
    label: 'Hair Loss Treatments',
    items: [
      { label: 'PRP Hair Rejuvenation', href: '/treatments/prp-hair' },
      { label: 'PRF Hair Rejuvenation', href: '/treatments/hair-loss' },
    ],
  },
  {
    label: 'Wellness',
    items: [
      { label: 'B12 & Biotin Injections', href: '/treatments/vitamin-injections' },
      { label: 'Weight Loss Injections', href: '/treatments/weight-loss' },
      { label: 'Lymphatic Drainage Massage', href: '/treatments/lymphatic-drainage' },
    ],
  },
  {
    label: 'Specialist Treatments',
    items: [
      { label: 'Deep Vein Removal', href: '/treatments/vein-removal' },
    ],
  },
];

const navLinks = [
  { label: 'Treatments', href: '/treatments', hasDropdown: true },
  { label: 'About Us', href: '/about' },
  { label: 'Team', href: '/doctors' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
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

      {/* ── Mobile-only dental banner ── */}
      <a
        href="https://reformdental.get-found.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden flex items-center justify-center gap-2 w-full bg-[#e4ddd6] text-[#3a3a3a] text-[12px] font-sans font-semibold tracking-[0.1em] py-2.5 px-4 hover:bg-[#dbd3cb] active:bg-[#d3c9bf] transition-colors"
      >
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 text-[#3a3a3a]" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'scaleY(-1)' }}>
          <g transform="translate(51.9517,421.4062)"><path d="m 0,0 c -14.986,-18.532 -24.182,-41.91 -24.747,-67.232 -0.948,-42.432 15.863,-93.121 35.477,-143.886" /></g>
          <g transform="translate(368.4976,454.0469)"><path d="M 0,0 C -12.032,5.141 -25.134,8.201 -38.85,8.718 -60.88,9.547 -81.54,3.934 -99.113,-6.39 c -25.08,-13.715 -50.16,-13.715 -75.24,0 -17.574,10.324 -38.233,15.937 -60.264,15.108 -17.716,-0.667 -34.406,-5.578 -49.093,-13.735" /></g>
          <g transform="translate(436.3242,354.1738)"><path d="M 0,0 C -0.484,21.684 -7.297,41.94 -18.653,58.951" /></g>
          <g transform="translate(94.8945,128.3672)"><path d="m 0,0 c 11.098,-29.495 20.205,-57.36 23.936,-81.744 3.766,-24.61 11.061,-39.123 30.26,-39.123 12.932,0 23.981,15.596 32.266,40.319 6.4,19.098 16.559,56.764 22.089,75.682 9.642,32.984 46.995,32.983 56.637,0 5.53,-18.918 15.689,-56.584 22.089,-75.682 8.285,-24.723 19.334,-40.319 32.266,-40.319 19.199,0 26.495,14.513 30.261,39.123 12.343,80.663 83.503,199.416 91.021,289.274" /></g>
          <g transform="translate(139.3838,421.4053)"><path d="M 0,0 C -39.368,0 -71.223,-31.796 -71.223,-71.091" /></g>
          <g transform="translate(386.4653,504.5)"><path d="M 0,0 19.477,-54.691 55.089,-74.133 19.477,-93.573 0,-148.265 l -19.477,54.692 -35.612,19.44 35.612,19.442 z" /></g>
          <g transform="translate(475.959,328.2959)"><path d="M 0,0 -13.16,-36.951 -26.319,0 -50.379,13.135 -26.319,26.27 -13.16,63.222 0,26.27 24.061,13.135" /></g>
          <g transform="translate(73.4019,240.3838)"><path d="M 0,0 21.716,-60.979 61.421,-82.653 21.716,-104.329 0,-165.308 l -21.716,60.979 -39.705,21.676 39.705,21.674 z" /></g>
        </svg>
        Visit Our Dental Site
        <ArrowUpRight className="w-3 h-3 opacity-70 flex-shrink-0" />
      </a>

      {/* ── Black top bar ── */}
      <header className="w-full bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">

            {/* Left — MENU only on mobile, MENU + BOOK ONLINE on desktop */}
            <div className="flex items-center gap-3">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-[12px] font-sans font-semibold tracking-[0.08em] hover:bg-white/10 transition-colors">
                    <Menu className="w-3.5 h-3.5" />
                    Menu
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[min(300px,85vw)] bg-white p-0">
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
                              className={`text-[12px] font-sans font-semibold tracking-[0.1em] transition-colors ${
                                location.pathname === link.href
                                  ? 'text-black'
                                  : 'text-[#363636] hover:text-black'
                              }`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-6 border-t space-y-3">
                      <a
                        href="https://pearlportal.net/Portal/rad/OnlineBooking"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 py-3 rounded-full bg-[#c5b1a1] text-white text-[12px] font-sans font-semibold tracking-[0.08em] hover:bg-[#b09d8d] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Book Online
                        <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                      </a>
                      <a
                        href="https://reformdental.get-found.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 py-3 rounded-full bg-white text-black text-[12px] font-sans font-semibold tracking-[0.08em] hover:bg-[#efeae7] transition-colors"
                      >
                        View Dental Clinic
                        <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                      </a>
                      <a href="tel:01163800318" className="flex items-center gap-2 text-sm font-sans text-[#363636] px-1">
                        <Phone className="w-4 h-4" />
                        0116 3800318
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* BOOK ONLINE — hidden on mobile (shown in right group instead), visible on md+ */}
              <a
                href="https://pearlportal.net/Portal/rad/OnlineBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-[12px] font-sans font-semibold tracking-[0.08em] uppercase hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Book Online
              </a>
            </div>

            {/* Centre: Logo — absolutely centred so it never shifts */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center select-none pointer-events-auto"
            >
              <LogoWhite height={54} />
            </Link>

            {/* Right */}
            <div className="flex items-center gap-2">
              {/* BOOK ONLINE on mobile only — right side so logo stays centred */}
              <a
                href="https://pearlportal.net/Portal/rad/OnlineBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden px-4 py-2 rounded-full bg-white text-black text-[12px] font-sans font-semibold tracking-[0.08em] uppercase hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Book
              </a>
              <a
                href="https://reformdental.get-found.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full bg-white text-black text-[12px] font-sans font-semibold tracking-[0.06em] hover:bg-[#efeae7] transition-colors whitespace-nowrap"
              >
                <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 flex-shrink-0" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'scaleY(-1)' }}>
                  <g transform="translate(51.9517,421.4062)"><path d="m 0,0 c -14.986,-18.532 -24.182,-41.91 -24.747,-67.232 -0.948,-42.432 15.863,-93.121 35.477,-143.886" /></g>
                  <g transform="translate(368.4976,454.0469)"><path d="M 0,0 C -12.032,5.141 -25.134,8.201 -38.85,8.718 -60.88,9.547 -81.54,3.934 -99.113,-6.39 c -25.08,-13.715 -50.16,-13.715 -75.24,0 -17.574,10.324 -38.233,15.937 -60.264,15.108 -17.716,-0.667 -34.406,-5.578 -49.093,-13.735" /></g>
                  <g transform="translate(436.3242,354.1738)"><path d="M 0,0 C -0.484,21.684 -7.297,41.94 -18.653,58.951" /></g>
                  <g transform="translate(94.8945,128.3672)"><path d="m 0,0 c 11.098,-29.495 20.205,-57.36 23.936,-81.744 3.766,-24.61 11.061,-39.123 30.26,-39.123 12.932,0 23.981,15.596 32.266,40.319 6.4,19.098 16.559,56.764 22.089,75.682 9.642,32.984 46.995,32.983 56.637,0 5.53,-18.918 15.689,-56.584 22.089,-75.682 8.285,-24.723 19.334,-40.319 32.266,-40.319 19.199,0 26.495,14.513 30.261,39.123 12.343,80.663 83.503,199.416 91.021,289.274" /></g>
                  <g transform="translate(139.3838,421.4053)"><path d="M 0,0 C -39.368,0 -71.223,-31.796 -71.223,-71.091" /></g>
                  <g transform="translate(386.4653,504.5)"><path d="M 0,0 19.477,-54.691 55.089,-74.133 19.477,-93.573 0,-148.265 l -19.477,54.692 -35.612,19.44 35.612,19.442 z" /></g>
                  <g transform="translate(475.959,328.2959)"><path d="M 0,0 -13.16,-36.951 -26.319,0 -50.379,13.135 -26.319,26.27 -13.16,63.222 0,26.27 24.061,13.135" /></g>
                  <g transform="translate(73.4019,240.3838)"><path d="M 0,0 21.716,-60.979 61.421,-82.653 21.716,-104.329 0,-165.308 l -21.716,60.979 -39.705,21.676 39.705,21.674 z" /></g>
                </svg>
                View Dental Clinic
                <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
              </a>
              <a
                href="tel:01163800318"
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-[12px] font-sans font-semibold tracking-[0.06em] hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                0116 3800318
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── White nav bar ── */}
      <nav className="w-full bg-[#efeae7] border-b border-[#d9d0c7] hidden lg:block">
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
                      className={`flex items-center gap-1 text-[12px] font-sans font-semibold tracking-[0.12em] uppercase transition-colors ${
                        isActive ? 'text-black' : 'text-[#363636] hover:text-black'
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
                        style={{ minWidth: 'min(660px, 92vw)' }}
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
                                  ? 'bg-white text-black'
                                  : 'text-[#363636] hover:bg-white/60 hover:text-black'
                              }`}
                            >
                              <span className="text-[12px] font-sans font-semibold tracking-[0.14em] uppercase">
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
                              className="block px-4 py-3 text-[12px] font-sans font-medium tracking-[0.12em] uppercase text-[#363636] hover:text-black hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-50 last:border-b-0"
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
                    className={`flex items-center gap-1 text-[12px] font-sans font-semibold tracking-[0.12em] uppercase transition-colors ${
                      isActive ? 'text-black' : 'text-[#363636] hover:text-black'
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
