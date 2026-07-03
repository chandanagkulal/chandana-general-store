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
    <section id="about" className="bg-white py-20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
            About Chandana General Store
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Your trusted local grocery store
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Serving Thenkanidiyoor with fresh groceries, daily essentials and
            friendly neighborhood service.
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[34px] bg-[#fff7ed] shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[320px] sm:h-[420px] lg:h-auto">
              <img
                src={image}
                alt="Chandana General Store"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-4 shadow-lg">
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
            <div className="p-7 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
                Fresh products, fair prices and friendly service.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-700">
                Chandana General Store is a family-run neighborhood store that
                provides fresh groceries, packaged foods, household items and
                everyday essentials in one convenient place.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700">
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
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                  <FaLeaf className="mx-auto mb-2 text-xl text-green-500" />
                  <h4 className="text-sm font-bold text-slate-900">Fresh</h4>
                  <p className="text-xs text-slate-500">Groceries</p>
                </div>

                <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                  <FaTags className="mx-auto mb-2 text-xl text-orange-500" />
                  <h4 className="text-sm font-bold text-slate-900">Fair</h4>
                  <p className="text-xs text-slate-500">Prices</p>
                </div>

                <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
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