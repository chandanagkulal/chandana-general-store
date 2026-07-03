import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa";

function Location() {
  return (
    <section id="location" className="bg-slate-50 py-14 scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:tracking-[0.25em]">
            Location
          </span>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-6 sm:text-4xl">
            Visit Chandana General Store
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Visit us in Thenkanidiyoor, Udupi for fresh groceries, household
            essentials, and friendly local service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.2fr]">
          {/* Store Info */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Store Information
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Chandana General Store serves Thenkanidiyoor and nearby areas with
              groceries, snacks, household essentials, and daily-use products.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex gap-4 rounded-2xl bg-slate-50 p-4 sm:p-5">
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

              <div className="flex gap-4 rounded-2xl bg-slate-50 p-4 sm:p-5">
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

              <div className="flex gap-4 rounded-2xl bg-slate-50 p-4 sm:p-5">
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
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm sm:rounded-3xl">
            <iframe
              title="store-location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.2036721081514!2d74.71086311130635!3d13.370329000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbd006f30cea9%3A0x73ed94d546ada3be!2sChandana%20General%20Stores!5e0!3m2!1sen!2sin!4v1700000000000"
              className="h-[320px] w-full border-0 sm:h-[520px]"
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
