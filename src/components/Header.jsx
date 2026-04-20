import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navItems = ['TREATMENTS', 'ABOUT US', 'DOCTORS', 'PRICING', 'GALLERY', 'BLOG', 'CONTACT US']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top Header */}
      <header className="bg-beige border-b border-beige-dark/30">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Left - Menu + Book */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-[13px] font-medium hover:bg-gray-800 transition-colors"
              >
                {menuOpen ? <X size={14} /> : <Menu size={14} />}
                MENU
              </button>
              <a
                href="#booking"
                className="hidden sm:inline-flex border border-black text-black px-4 py-2 rounded-full text-[13px] font-medium hover:bg-black hover:text-white transition-colors"
              >
                BOOK ONLINE
              </a>
            </div>

            {/* Center - Logo */}
            <div className="text-center absolute left-1/2 -translate-x-1/2">
              <div className="tracking-[0.3em] text-[15px] font-light text-dark">
                R E F <span className="relative">O</span> R M
              </div>
              <div className="text-[9px] tracking-[0.15em] text-gray-text mt-px">AESTHETICS | DENTAL</div>
              <div className="tracking-[0.25em] text-xs font-light text-dark mt-px">C L I N I C</div>
            </div>

            {/* Right - View Dental + Phone */}
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                className="hidden md:inline-flex items-center gap-1.5 border border-black text-black px-4 py-2 rounded-full text-[13px] font-medium hover:bg-black hover:text-white transition-colors"
              >
                VIEW DENTAL CLINIC
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 11L11 1M11 1H4M11 1V8" />
                </svg>
              </a>
              <a
                href="tel:01163800318"
                className="hidden lg:inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-[13px] font-medium hover:bg-gray-800 transition-colors"
              >
                <Phone size={13} />
                0116 3800318
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-center gap-6 lg:gap-8 h-11 overflow-x-auto scrollbar-none">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] tracking-wide whitespace-nowrap hover:text-beige transition-colors flex items-center gap-1"
              >
                {item}
                {item === 'TREATMENTS' && (
                  <svg className="w-2.5 h-2.5 ml-0.5" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex flex-col items-center justify-center gap-5">
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-white">
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <a key={item} href="#" className="text-white text-lg tracking-wide" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
