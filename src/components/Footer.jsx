import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#fff6ed] text-slate-800 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <svg viewBox="0 0 100 100" className="h-7 w-7 fill-current text-orange-500">
                  <path d="M20,25 H30 L40,65 H80 L90,32 H35" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="45" cy="80" r="8" />
                  <circle cx="75" cy="80" r="8" />
                  <path d="M48,42 C54,35 66,33 66,33 C66,33 64,44 57,50 C52,46 48,42 48,42 Z" fill="#ea580c" />
                </svg>
              </div>
              <div>
                <p className="text-base font-extrabold tracking-[0.15em] text-slate-900 leading-tight">
                  CHANDANA
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600 leading-none mt-0.5">
                  General Store
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              A warm local grocery store for fresh produce, snacks, household essentials and everyday convenience.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#home" className="text-slate-600 hover:text-orange-600 transition">Home</a>
              <a href="#about" className="text-slate-600 hover:text-orange-600 transition">About</a>
              <a href="#products" className="text-slate-600 hover:text-orange-600 transition">Products</a>
              <a href="#location" className="text-slate-600 hover:text-orange-600 transition">Location</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-600 transition">Contact</a>
              <a href="https://wa.me/919380864434" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-orange-600 transition">WhatsApp</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Contact Details
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="h-4.5 w-4.5 text-orange-600 shrink-0 mt-0.5" />
                <span>9PC7+968, Thenkanidiyoor, Udupi, Karnataka 576106</span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="h-4 w-4 text-orange-600 shrink-0" />
                <a href="tel:+917204192287" className="hover:text-orange-600 transition">+91 72041 92287</a>
              </p>
              <p className="flex items-center gap-3">
                <FaWhatsapp className="h-4 w-4 text-emerald-600 shrink-0" />
                <a href="https://wa.me/919380864434" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition">WhatsApp chat</a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Visit Us
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Open daily for fresh groceries, dairy, staples and pantry needs. Friendly local service whenever you visit.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col gap-4 sm:flex-row sm:justify-between items-center text-xs text-slate-500">
          <p>© 2026 Chandana General Store. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built for local shoppers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
