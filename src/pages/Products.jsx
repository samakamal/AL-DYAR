
import { Link } from "react-router-dom";
import { products } from "../data/products";

function Products() {
  return (
    <main className="overflow-hidden bg-white">

      {/* PAGE HEADER */}
      <section className="bg-green-950 px-6 py-20 text-center text-white">

        <p className="font-bold uppercase tracking-widest text-green-300">
          AL-DYAR Product Collection
        </p>

        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
          Our Products
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
          Explore our range of plastic materials and industrial
          solutions designed for different applications.
        </p>

      </section>

      {/* PRODUCT CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-950">
            Explore Our Collection
          </h2>

          <p className="mt-3 text-gray-500">
            Select a product to discover more information.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* CARD INFORMATION */}
              <div className="flex flex-1 flex-col p-6">

                <h2 className="text-xl font-bold text-green-950">
                  {product.shortName}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {product.details}
                </p>

                {/* ONLY THIS LINK IS CLICKABLE */}
                <Link
                  to={`/products/${product.id}`}
                  className="mt-5 inline-flex w-fit items-center gap-2 font-bold text-green-800 transition hover:text-green-950"
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
      <section className="bg-green-50 px-6 py-16 text-center">

        <h2 className="text-3xl font-bold text-green-950">
          Need More Information?
        </h2>

        <p className="mt-4 text-gray-600">
          Our team is ready to answer your product questions.
        </p>

        <Link
          to="/contactus"
          className="mt-7 inline-flex items-center rounded-full bg-green-800 px-8 py-4 font-bold text-white transition hover:bg-green-950"
        >
          Contact Our Team →
        </Link>

      </section>

    </main>
  );
}

export default Products;
