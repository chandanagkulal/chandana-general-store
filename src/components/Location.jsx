import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa";

function Location() {
  return (
    <section id="location" className="bg-slate-50 py-20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
            Location
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Visit Chandana General Store
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Visit us in Thenkanidiyoor, Udupi for fresh groceries, household
            essentials, and friendly local service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.2fr]">
          {/* Store Info */}
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Store Information
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Chandana General Store serves Thenkanidiyoor and nearby areas with
              groceries, snacks, household essentials, and daily-use products.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Address</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    9PC7+968, Thenkanidiyoor, Udupi, Karnataka 576106
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <FaClock />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Store Timing
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Monday - Sunday
                  </p>
                  <p className="mt-2 text-sm font-semibold text-orange-600">
                    7:00 AM - 1:30 PM
                  </p>
                  <p className="text-sm font-semibold text-orange-600">
                    3:30 PM - 9:30 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Call Us</p>
                  <a
                    href="tel:+917204192287"
                    className="mt-1 inline-block text-sm font-semibold text-slate-600 hover:text-orange-600"
                  >
                    +91 72041 92287
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/place/Chandana+General+Stores/@13.370329,74.713438,17z/data=!4m6!3m5!1s0x3bbcbd006f30cea9:0x73ed94d546ada3be!8m2!3d13.370329!4d74.713438!16s%2Fg%2F11z87x1__z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
              >
                <FaMapMarkerAlt className="h-4 w-4" />
                Get Directions
              </a>

              <a
                href="https://wa.me/919380864434"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <iframe
              title="store-location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.2036721081514!2d74.71086311130635!3d13.370329000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbd006f30cea9%3A0x73ed94d546ada3be!2sChandana%20General%20Stores!5e0!3m2!1sen!2sin!4v1700000000000"
              className="h-[520px] w-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;