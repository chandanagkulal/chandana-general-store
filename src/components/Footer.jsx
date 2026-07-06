import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShoppingBasket,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const mapUrl =
    "https://www.google.com/maps/place/Chandana+General+Stores/@13.370329,74.713438,17z/data=!4m6!3m5!1s0x3bbcbd006f30cea9:0x73ed94d546ada3be!8m2!3d13.370329!4d74.713438!16s%2Fg%2F11z87x1__z";
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-orange-100 bg-[#fff6ed] text-slate-800">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:w-[90%] lg:max-w-none lg:px-0 lg:py-12">
        <div className="grid gap-8 border-b border-orange-100 pb-8 lg:grid-cols-[1.25fr_0.65fr_1.15fr] lg:items-start">
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

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
              Links
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 text-sm lg:grid-cols-1">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-slate-600 transition hover:text-orange-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 font-semibold transition hover:text-orange-600"
              >
                <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-orange-600" />
                <span>9PC7+968, Thenkanidiyoor, Udupi, Karnataka 576106</span>
              </a>

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
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-[11px] font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-5 sm:whitespace-nowrap">
            &copy; 2026 Chandana General Store &middot; Built for local shoppers
          </p>
          <p>Open daily for fresh essentials</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
