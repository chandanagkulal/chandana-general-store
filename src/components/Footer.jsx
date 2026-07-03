import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShoppingBasket,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-orange-100 bg-[#fff6ed] text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-col gap-6 border-b border-orange-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <FaShoppingBasket className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-extrabold tracking-[0.15em] text-slate-950 leading-tight">
                  CHANDANA
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600 leading-none">
                  General Store
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Fresh groceries, snacks, dairy, household essentials, and daily
              needs for local shoppers in Thenkanidiyoor.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:max-w-md sm:justify-end">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-orange-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-4 py-6 text-sm text-slate-600 sm:grid-cols-3">
          <p className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-orange-600" />
            <span>9PC7+968, Thenkanidiyoor, Udupi, Karnataka 576106</span>
          </p>

          <a
            href="tel:+917204192287"
            className="flex items-center gap-3 font-semibold transition hover:text-orange-600"
          >
            <FaPhoneAlt className="h-4 w-4 shrink-0 text-orange-600" />
            +91 72041 92287
          </a>

          <a
            href="https://wa.me/919380864434"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 font-semibold transition hover:text-orange-600"
          >
            <FaWhatsapp className="h-4 w-4 shrink-0 text-emerald-600" />
            WhatsApp chat
          </a>
        </div>

        <p className="border-t border-orange-100 pt-5 text-[11px] font-medium text-slate-500 whitespace-nowrap">
          © 2026 Chandana General Store · Built for local shoppers
        </p>
      </div>
    </footer>
  );
}

export default Footer;
