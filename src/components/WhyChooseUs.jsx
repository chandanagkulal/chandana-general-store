import {
  FaLeaf,
  FaDollarSign,
  FaSmile,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaShoppingBag,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaLeaf,
    title: "Fresh Stock",
    desc: "Fresh groceries and daily-use items are restocked regularly.",
  },
  {
    icon: FaDollarSign,
    title: "Fair Prices",
    desc: "Good quality products at reasonable prices for every family.",
  },
  {
    icon: FaSmile,
    title: "Friendly Service",
    desc: "Helpful support and polite service whenever you visit us.",
  },
  {
    icon: FaCheckCircle,
    title: "Quality Products",
    desc: "Trusted brands and carefully selected essentials.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Easy Location",
    desc: "Conveniently located for quick everyday shopping.",
  },
  {
    icon: FaShoppingBag,
    title: "Daily Essentials",
    desc: "Groceries, snacks, dairy, and household items in one place.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-20 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            The Local Store You Can Count On
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Fresh products, fair prices, trusted quality, and friendly service
            for your everyday shopping needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-100 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;