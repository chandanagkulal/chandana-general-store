import { useState } from "react";
import {
  FaBars,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShoppingBasket,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full z-50">
      <div className="bg-[#214628] text-white text-[12px] sm:text-sm">
        <div className="mx-auto max-w-7xl flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start text-white/90">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] sm:text-sm">
              <FaPhoneAlt className="h-4 w-4 text-orange-300" />
              <a href="tel:+917204192287" className="hover:text-orange-300">
                +91 72041 92287
              </a>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] sm:text-sm">
              <FaWhatsapp className="h-4 w-4 text-emerald-300" />
              <a
                href="https://wa.me/919380864434"
                className="hover:text-orange-300"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-end text-white/90">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] sm:text-sm">
              <FaMapMarkerAlt className="h-4 w-4 text-orange-300" />
              Thenkanidiyoor, Udupi
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] sm:text-sm">
              <FaClock className="h-4 w-4 text-orange-300" />
              7:00 AM - 1:30 PM | 3:30 PM - 9:30 PM
            </span>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <a
              href="#home"
              className="flex min-w-0 items-center gap-3"
              onClick={closeMenu}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-orange-50 text-orange-600 shadow-sm">
                <FaShoppingBasket className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-extrabold tracking-[0.18em] text-slate-900 leading-tight">
                  CHANDANA
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500 leading-none mt-0.5">
                  General Store
                </p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    link.href === "#home"
                      ? "text-orange-600 border-b-2 border-orange-500 pb-1"
                      : "transition hover:text-orange-600"
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href="tel:+917204192287"
                className="hidden items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-700 sm:inline-flex"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Call Now
              </a>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-orange-200 hover:text-orange-600 lg:hidden"
                aria-label={
                  isMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((current) => !current)}
              >
                {isMenuOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav
              id="mobile-navigation"
              className="mt-4 grid gap-2 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+917204192287"
                onClick={closeMenu}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 sm:hidden"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Call Now
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
