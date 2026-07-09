import { useState } from "react";
import {
  FaBars,
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
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="relative mx-auto w-full px-4 py-3 sm:px-6 sm:py-4 lg:w-[90%] lg:max-w-none lg:px-0">
          <div className="flex items-center justify-between gap-3">
            <a
              href="#home"
              className="flex min-w-0 items-center gap-3"
              onClick={closeMenu}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 shadow-sm sm:h-12 sm:w-12 sm:rounded-3xl">
                <FaShoppingBasket className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-extrabold tracking-[0.12em] text-slate-900 leading-tight sm:text-base sm:tracking-[0.18em]">
                  CHANDANA
                </p>
                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500 leading-none sm:text-[10px] sm:tracking-[0.26em]">
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition hover:bg-orange-100 sm:hidden"
                aria-label="Call Chandana General Store"
              >
                <FaPhoneAlt className="h-4 w-4" />
              </a>
              <a
                href="tel:+917204192287"
                className="hidden items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-700 sm:inline-flex"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Call Now
              </a>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#214628] text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#18351e] lg:hidden"
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
              className="absolute left-3 right-3 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/15 lg:hidden"
            >
              <div className="grid divide-y divide-slate-100">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className="px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-orange-50 hover:text-orange-700"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3">
                <a
                  href="tel:+917204192287"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
                >
                  <FaPhoneAlt className="h-4 w-4" />
                  Call
                </a>
                <a
                  href="https://wa.me/919380864434"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
