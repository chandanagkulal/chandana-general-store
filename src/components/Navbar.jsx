import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaWhatsapp, FaShoppingBasket } from "react-icons/fa";

function Navbar() {
  return (
    <header className="w-full z-50">
      <div className="bg-[#214628] text-white text-[12px] sm:text-sm">
        <div className="mx-auto max-w-7xl flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start text-white/90">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] sm:text-sm">
              <FaPhoneAlt className="h-4 w-4 text-orange-300" />
              <a href="tel:+917204192287" className="hover:text-orange-300">+91 72041 92287</a>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] sm:text-sm">
              <FaWhatsapp className="h-4 w-4 text-emerald-300" />
              <a href="https://wa.me/919380864434" className="hover:text-orange-300" target="_blank" rel="noreferrer">WhatsApp</a>
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
        <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4 max-w-7xl">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-50 text-orange-600 shadow-sm">
              <FaShoppingBasket className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-extrabold tracking-[0.18em] text-slate-900 leading-tight">CHANDANA</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500 leading-none mt-0.5">General Store</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#home" className="text-orange-600 border-b-2 border-orange-500 pb-1">Home</a>
            <a href="#about" className="transition hover:text-orange-600">About</a>
            <a href="#products" className="transition hover:text-orange-600">Products</a>
            <a href="#location" className="transition hover:text-orange-600">Location</a>
            <a href="#contact" className="transition hover:text-orange-600">Contact</a>
          </nav>

          <a
            href="tel:+917204192287"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-700"
          >
            <FaPhoneAlt className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
