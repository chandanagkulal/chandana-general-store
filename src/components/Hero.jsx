import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaStore } from "react-icons/fa";

function Hero() {
  const bgImage =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80";

  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
            <FaStore />
            Local Family-Owned Store
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Chandana General Store
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Fresh groceries, fruits, vegetables, dairy products, snacks,
            beverages, household essentials, and everyday needs available here.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+917204192287"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/919380864434"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

            <a
              href="#location"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
            >
              <FaMapMarkerAlt />
              Get Directions
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-md">
              <h3 className="font-bold">Fresh Stock</h3>
              <p className="mt-1 text-sm text-white/80">Daily essentials</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-md">
              <h3 className="font-bold">Fair Prices</h3>
              <p className="mt-1 text-sm text-white/80">Affordable products</p>
            </div>

            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-md">
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