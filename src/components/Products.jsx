import { useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import { productCategories } from "../data/products";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => setSelectedProduct(null);

  const enquiryLink = selectedProduct
    ? `https://wa.me/919380864434?text=${encodeURIComponent(
        `Hi Chandana General Store, I want to know about ${selectedProduct.title}.`,
      )}`
    : "";

  return (
    <section id="products" className="bg-white py-14 scroll-mt-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center sm:mb-14">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:tracking-[0.25em]">
            Fresh Picks
          </span>

          <h2 className="mt-5 text-2xl font-black text-slate-900 sm:text-4xl">
            Browse Our Categories
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Tap a category to see common items available in store.
          </p>

          <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-orange-500"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6">
          {productCategories.map((product) => (
            <button
              key={product.title}
              type="button"
              onClick={() => setSelectedProduct(product)}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-100 sm:rounded-[26px]"
            >
              <div className="relative aspect-square overflow-hidden bg-orange-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-orange-600 opacity-0 shadow-sm transition group-hover:opacity-100">
                  View items
                </span>
              </div>

              <div className="flex min-h-[54px] items-center justify-center px-2 py-3 text-center sm:min-h-[60px] sm:px-3 sm:py-4">
                <h3 className="text-xs font-extrabold leading-tight text-slate-800 transition group-hover:text-orange-600 sm:text-sm">
                  {product.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[80] flex items-end bg-slate-950/60 px-4 py-4 backdrop-blur-sm sm:items-center sm:justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          onClick={closeModal}
        >
          <div
            className="max-h-[92vh] w-full overflow-y-auto rounded-3xl bg-white shadow-2xl sm:max-w-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-40 bg-orange-50 sm:h-56">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-sm transition hover:bg-white"
                aria-label="Close product details"
              >
                <FaTimes className="h-4 w-4" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 sm:bottom-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
                  Available category
                </p>
                <h3
                  id="product-modal-title"
                  className="mt-1 text-xl font-black text-white sm:text-2xl"
                >
                  {selectedProduct.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-sm leading-7 text-slate-600">
                Common items available in this category include:
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProduct.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-orange-100 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={enquiryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-600"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-orange-200 hover:text-orange-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
