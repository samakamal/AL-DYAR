
import { Link } from "react-router-dom";
import { products } from "../data/product";

function Products() {
  return (
    <main className="overflow-hidden bg-[#061b14]">

      {/* PAGE HEADER */}
      <section className="bg-[#03140f] px-6 py-20 text-center text-white">

        <p className="font-bold uppercase tracking-widest text-green-400">
          AL-DYAR Product Collection
        </p>

        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
          Our Products
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100/80">
          Explore our range of plastic materials and industrial
          solutions designed for different applications.
        </p>

      </section>

      {/* PRODUCT CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">
            Explore Our Collection
          </h2>

          <p className="mt-3 text-gray-400">
            Select a product to discover more information.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-green-900/60 bg-[#0b261c] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-950/40"
            >

              {/* IMAGE */}
              <div className="overflow-hidden bg-[#102d21]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* CARD INFORMATION */}
              <div className="flex flex-1 flex-col p-6">

                <h2 className="text-xl font-bold text-white">
                  {product.shortName}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-300">
                  {product.details}
                </p>

                {/* ONLY THIS LINK IS CLICKABLE */}
                <Link
                  to={`/products/${product.id}`}
                  className="mt-5 inline-flex w-fit items-center gap-2 font-bold text-green-400 transition hover:text-green-300"
                >
                  View Details
                  <span>→</span>
                </Link>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="border-t border-green-900/50 bg-[#03140f] px-6 py-16 text-center">

        <h2 className="text-3xl font-bold text-white">
          Need More Information?
        </h2>

        <p className="mt-4 text-gray-400">
          Our team is ready to answer your product questions.
        </p>

        <Link
          to="/contactus"
          className="mt-7 inline-flex items-center rounded-full bg-green-700 px-8 py-4 font-bold text-white transition hover:bg-green-600"
        >
          Contact Our Team →
        </Link>

      </section>

    </main>
  );
}

export default Products;
