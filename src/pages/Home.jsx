
import { Link } from "react-router-dom";
import { products } from "../data/products";

function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="bg-green-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-12 md:py-24">

          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700 sm:text-sm">
              AL-DYAR Plastic Solutions
            </p>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-green-950 sm:text-4xl md:mt-5 md:text-6xl">
              Building a Greener Future Through Recycling
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0 md:mt-6">
              Discover our range of plastic products and industrial
              solutions. We are committed to quality, innovation,
              and a more sustainable future.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start md:mt-9">
              <Link
                to="/products"
                className="rounded-full bg-green-800 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-green-950 sm:px-8 sm:py-4"
              >
                Explore Products →
              </Link>

              <Link
                to="/profile"
                className="rounded-full border border-green-800 px-7 py-3.5 text-center font-semibold text-green-900 transition hover:bg-green-100 sm:px-8 sm:py-4"
              >
                About Our Company
              </Link>
            </div>
          </div>

          <div className="mt-3 md:mt-0">
            <img
              src="/images/recycling-hero.jpg.png"
              alt="Plastic recycling and industrial production"
              className="h-56 w-full rounded-2xl object-cover shadow-xl sm:h-80 md:h-[480px] md:rounded-3xl"
            />
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">

          <img
            src="public/images/factory.jpg"
            alt="Industrial plastic production"
            className="h-60 w-full rounded-2xl object-cover shadow-lg sm:h-80 md:h-[350px]"
          />

          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-green-700 sm:text-sm">
              Welcome to AL-DYAR
            </p>

            <h2 className="mt-4 text-2xl font-bold text-green-950 sm:text-3xl md:text-4xl">
              Quality Products. Sustainable Thinking.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
              AL-DYAR provides plastic products and industrial
              material solutions. We focus on delivering products
              that meet customer needs while supporting responsible
              resource use.
            </p>

            <Link
              to="/profile"
              className="mt-6 inline-block font-bold text-green-800 hover:text-green-950"
            >
              Discover Our Company →
            </Link>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-green-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-green-700 sm:text-sm">
              What We Offer
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-green-950 sm:text-3xl md:text-4xl">
              Our Products
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Explore our range of plastic materials and industrial solutions.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:mt-12 lg:grid-cols-4">

            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-green-950">
                    {product.shortName}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {product.details}
                  </p>

                  <span className="mt-5 inline-block font-bold text-green-800">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}

          </div>

          <div className="mt-9 text-center sm:mt-12">
            <Link
              to="/products"
              className="inline-block rounded-full bg-green-800 px-8 py-3.5 font-bold text-white transition hover:bg-green-950 sm:px-9 sm:py-4"
            >
              View All Products
            </Link>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">

        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-green-700 sm:text-sm">
            Our Commitment
          </p>

          <h2 className="mt-3 text-2xl font-bold text-green-950 sm:text-3xl">
            Why Choose AL-DYAR?
          </h2>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-8">

          {[
            {
              icon: "✓",
              title: "Quality",
              text: "A focus on quality and products designed for practical applications.",
            },
            {
              icon: "♻",
              title: "Sustainability",
              text: "Supporting responsible material use and recycling practices.",
            },
            {
              icon: "◆",
              title: "Customer Focus",
              text: "Solutions developed around customer requirements and needs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-green-100 p-6 text-center transition hover:shadow-lg sm:p-8"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl font-bold text-green-800 sm:h-16 sm:w-16">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-green-950 sm:mt-6">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-green-950 px-4 py-12 text-center text-white sm:px-6 sm:py-16">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-100 sm:mt-5 sm:text-base sm:leading-8">
          Have a question about our products? Contact our team
          and let us help you find the right solution.
        </p>

        <Link
          to="/contactus"
          className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-green-950 transition hover:bg-green-100 sm:mt-8 sm:px-9 sm:py-4"
        >
          Contact Us →
        </Link>
      </section>

    </main>
  );
}

export default Home;
