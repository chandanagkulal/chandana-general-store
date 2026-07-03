    import { productCategories } from "../data/products";

    function Products() {
      return (
        <section id="products" className="bg-white py-20 scroll-mt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
          <div className="mx-auto mb-14 max-w-xl text-center">
      <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
        Fresh Picks
      </span>

      <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
        Browse Our Categories
      </h2>

      <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-orange-500"></div>
    </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {productCategories.map((product) => (
                <div
                  key={product.title}
                  className="group overflow-hidden rounded-[26px] bg-white shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-orange-200"
                >
                  <div className="relative aspect-square overflow-hidden bg-orange-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" /> 
                  </div>

                  <div className="flex min-h-[60px] items-center justify-center px-3 py-4 text-center">
                    <h3 className="text-sm font-extrabold leading-tight text-slate-800 transition group-hover:text-orange-600">
                      {product.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default Products;