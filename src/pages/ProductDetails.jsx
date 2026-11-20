
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  // Find the product selected by the visitor
  const product = products.find(
    (item) => item.id === id
  );

  // Product not found
  if (!product) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">

        <h1 className="text-4xl font-extrabold text-green-950">
          Product Not Found
        </h1>

        <p className="mt-4 text-gray-600">
          Sorry, this product does not exist.
        </p>

        <Link
          to="/products"
          className="mt-7 rounded-full bg-green-800 px-8 py-4 font-bold text-white hover:bg-green-950"
        >
          Back to Products
        </Link>

      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-white">

      {/* PRODUCT PAGE HEADER */}
      <section className="bg-green-950 px-6 py-16 text-center text-white sm:py-20">

        <p className="font-bold uppercase tracking-widest text-green-300">
          AL-DYAR Product Collection
        </p>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
          {product.name}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
          Discover our product quality, features, and industrial solutions.
        </p>

      </section>

      {/* BREADCRUMB */}
      <div className="mx-auto max-w-7xl px-6 pt-8">

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">

          <Link
            to="/"
            className="hover:text-green-800"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/products"
            className="hover:text-green-800"
          >
            Products
          </Link>

          <span>/</span>

          <span className="font-semibold text-green-900">
            {product.shortName}
          </span>

        </div>

      </div>

      {/* MAIN PRODUCT INFORMATION */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* PRODUCT IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-green-100 bg-gray-50 shadow-lg">

            <img
              src={product.image}
              alt={product.name}
              className="h-72 w-full object-cover sm:h-96 lg:h-[480px]"
            />

          </div>

          {/* PRODUCT DESCRIPTION */}
          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              About Our Product
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-green-950 sm:text-4xl">
              {product.shortName}
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 border-t border-green-100 pt-7">

              <h3 className="text-xl font-bold text-green-950">
                Product Features
              </h3>

              <ul className="mt-6 space-y-4">

                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                      ✓
                    </span>

                    <span>{feature}</span>

                  </li>
                ))}

              </ul>

            </div>

            <Link
              to="/contactus"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-green-800 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-950"
            >
              Contact Us About This Product
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE AL-DYAR */}
      <section className="bg-green-50 px-6 py-16 sm:py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="font-bold uppercase tracking-widest text-green-700">
            AL-DYAR
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-green-950 sm:text-3xl">
            Quality and Innovation You Can Trust
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            At AL-DYAR, we focus on providing plastic solutions
            that support industrial needs through quality,
            reliability, and innovation.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 font-bold text-green-800 transition hover:text-green-950"
          >
            ← Back to All Products
          </Link>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;
