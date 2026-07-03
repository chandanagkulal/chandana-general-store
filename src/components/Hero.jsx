import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaStore } from "react-icons/fa";

function Hero() {
  const bgImage =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80";

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-65px)] overflow-hidden sm:min-h-[90vh]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/45 sm:to-black/20" />

      <div className="relative mx-auto flex min-h-[calc(100vh-65px)] max-w-7xl items-center px-4 py-12 sm:min-h-[90vh] sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
            <FaStore />
            Local Family-Owned Store
          </div>

          <h1 className="max-w-[12ch] text-[2.65rem] font-extrabold leading-[1.05] tracking-normal sm:max-w-none sm:text-6xl lg:text-7xl">
            Chandana General Store
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:mt-6 sm:text-xl sm:leading-relaxed">
            Fresh groceries, fruits, vegetables, dairy products, snacks,
            beverages, household essentials, and everyday needs available here.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href="tel:+917204192287"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-orange-500 px-2 py-3 text-xs font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-orange-600 sm:gap-2 sm:px-6 sm:text-sm"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/919380864434"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-green-500 px-2 py-3 text-xs font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-green-600 sm:gap-2 sm:px-6 sm:text-sm"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="#location"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/30 bg-black/25 px-2 py-3 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:gap-2 sm:bg-white/15 sm:px-6 sm:text-sm"
            >
              <FaMapMarkerAlt />
              Directions
            </a>
          </div>

          <div className="mt-10 hidden max-w-2xl gap-4 sm:grid sm:grid-cols-3">
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-md sm:p-4">
              <h3 className="font-bold">Fresh Stock</h3>
              <p className="mt-1 text-sm text-white/80">Daily essentials</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-md sm:p-4">
              <h3 className="font-bold">Fair Prices</h3>
              <p className="mt-1 text-sm text-white/80">Affordable products</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-md sm:p-4">
              <h3 className="font-bold">Easy Location</h3>
              <p className="mt-1 text-sm text-white/80">Thenkanidiyoor, Udupi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
