import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navItems = ['TREATMENTS', 'ABOUT US', 'DOCTORS', 'PRICING', 'GALLERY', 'BLOG', 'CONTACT US']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top Header */}
      <header className="bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left - Menu + Book */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
                MENU
              </button>
              <a
                href="#booking"
                className="border border-black text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                BOOK ONLINE
              </a>
            </div>

            {/* Center - Logo */}
            <div className="text-center">
              <div className="tracking-[0.35em] text-lg font-light">
                R E F <span className="inline-block relative">O<span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" style={{ top: '-2px' }}></span></span> R M
              </div>
              <div className="text-[10px] tracking-[0.2em] text-gray-text mt-0.5">AESTHETICS | DENTAL</div>
              <div className="tracking-[0.3em] text-sm font-light mt-0.5">C L I N I C</div>
            </div>

            {/* Right - View Dental + Phone */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hidden md:flex items-center gap-1 border border-black text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                VIEW DENTAL CLINIC
                <svg className="w-3 h-3 ml-1" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 11L11 1M11 1H4M11 1V8" />
                </svg>
              </a>
              <a
                href="tel:01163800318"
                className="hidden lg:flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Phone size={14} />
                0116 3800318
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 h-12 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm tracking-wide whitespace-nowrap hover:text-beige transition-colors flex items-center gap-1"
              >
                {item}
                {item === 'TREATMENTS' && (
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
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
        <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center gap-6 md:hidden">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white">
            <X size={28} />
          </button>
          {navItems.map((item) => (
            <a key={item} href="#" className="text-white text-xl tracking-wide" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
