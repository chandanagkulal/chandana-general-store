import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 sm:flex">
      <a
        href="https://wa.me/919380864434"
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-600"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-5 w-5" />
      </a>
      <a
        href="tel:+917204192287"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-xl shadow-orange-600/20 transition hover:bg-orange-700"
        aria-label="Call"
      >
        <FaPhoneAlt className="h-5 w-5" />
      </a>
      <a
        href="#home"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800"
        aria-label="Back to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}

export default FloatingActions;
