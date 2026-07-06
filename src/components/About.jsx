import { FaCheckCircle, FaStore, FaLeaf, FaTags } from "react-icons/fa";

function About() {
  const image =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80";

  const items = [
    "Fresh vegetables and fruits",
    "Dairy and bakery products",
    "Rice, grains and pulses",
    "Snacks and beverages",
    "Household essentials",
    "Personal care items",
  ];

  return (
    <section id="about" className="bg-white py-14 scroll-mt-20 sm:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:max-w-none lg:px-0">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:text-sm sm:tracking-[0.25em]">
            About Chandana General Store
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-4xl">
            Your trusted local grocery store
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Serving Thenkanidiyoor with fresh groceries, daily essentials and
            friendly neighborhood service.
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-[#fff7ed] shadow-lg shadow-orange-950/5 sm:rounded-[34px] sm:shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[240px] sm:h-[420px] lg:h-auto">
              <img
                src={image}
                alt="Chandana General Store"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 p-3 shadow-lg sm:bottom-6 sm:left-6 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <FaStore />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Local Store</h4>
                    <p className="text-sm text-slate-500">
                      Fresh daily needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-10 lg:p-12">
              <h3 className="text-xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
                Fresh products, fair prices and friendly service.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700 sm:mt-5 sm:text-base sm:leading-8">
                Chandana General Store is a family-run neighborhood store that
                provides fresh groceries, packaged foods, household items and
                everyday essentials in one convenient place.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                We focus on quality products, honest pricing and a comfortable
                shopping experience for every customer.
              </p>

              {/* Items */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="shrink-0 text-orange-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Small stats */}
              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-2xl bg-white p-3 text-center shadow-sm sm:p-4">
                  <FaLeaf className="mx-auto mb-2 text-xl text-green-500" />
                  <h4 className="text-sm font-bold text-slate-900">Fresh</h4>
                  <p className="text-xs text-slate-500">Groceries</p>
                </div>

                <div className="rounded-2xl bg-white p-3 text-center shadow-sm sm:p-4">
                  <FaTags className="mx-auto mb-2 text-xl text-orange-500" />
                  <h4 className="text-sm font-bold text-slate-900">Fair</h4>
                  <p className="text-xs text-slate-500">Prices</p>
                </div>

                <div className="rounded-2xl bg-white p-3 text-center shadow-sm sm:p-4">
                  <FaStore className="mx-auto mb-2 text-xl text-blue-500" />
                  <h4 className="text-sm font-bold text-slate-900">Daily</h4>
                  <p className="text-xs text-slate-500">Essentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
