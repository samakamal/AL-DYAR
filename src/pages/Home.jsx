import { products } from "../data/product";
import { Link } from "react-router-dom";
import "../pages/Home.css"


function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">

{/* HERO SECTION */}
<section className="overflow-hidden bg-[#e8f5ed]">
  <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-12 md:py-20">

    {/* HERO TEXT */}
    <div className="text-center md:text-left">
      <p className="hero-label text-xs font-bold uppercase tracking-[0.2em] text-green-800 sm:text-sm">
        AL-DYAR Plastic Solutions
      </p>

      <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight text-green-950 sm:text-4xl md:text-6xl">
        Building a Greener Future Through Recycling
      </h1>

      <p className="hero-description mx-auto mt-5 max-w-xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 md:mx-0">
        Discover our range of plastic products and industrial
        solutions. We are committed to quality, innovation,
        and a more sustainable future.
      </p>

      <div className="hero-buttons mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start md:mt-9">
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

    {/* RECYCLING ANIMATION */}
    <div className="hero-artwork">

      <div className="recycle-scene">

        <div className="scene-glow"></div>

        {/* DECORATIVE CIRCLES */}
        <span className="decor-circle circle-one"></span>
        <span className="decor-circle circle-two"></span>

        {/* TOP LABEL */}
        <div className="scene-label">
          <span className="status-dot"></span>
          SUSTAINABLE PLASTIC SOLUTIONS
        </div>

        {/* RECYCLING CYCLE */}
        <div className="recycle-cycle">

          {/* BOTTLE */}
          <div className="recycle-stage bottle-stage">
            <div className="stage-icon bottle-icon">
              <svg viewBox="0 0 100 150" fill="none">
                <path
                  d="M39 8H61V25L70 37V127C70 135 64 140 56 140H44C36 140 30 135 30 127V37L39 25V8Z"
                  fill="#65B985"
                />
                <path
                  d="M39 8H61V25L70 37V127C70 135 64 140 56 140H44C36 140 30 135 30 127V37L39 25Z"
                  stroke="#176B43"
                  strokeWidth="3"
                />
                <path
                  d="M39 25H61"
                  stroke="#176B43"
                  strokeWidth="3"
                />
                <path
                  d="M30 65H70V103H30Z"
                  fill="#D5F1DD"
                />
                <path
                  d="M39 8H61V19H39Z"
                  fill="#176B43"
                />
                <path
                  d="M44 43V57"
                  stroke="#E8F5ED"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M39 2H61V8H39Z"
                  fill="#176B43"
                />
              </svg>
            </div>
            <span className="stage-caption">USED PLASTIC</span>
          </div>

          {/* ARROW */}
          <div className="cycle-arrow arrow-one">
            <span>→</span>
          </div>

          {/* MACHINE */}
          <div className="recycle-stage machine-stage">
            <div className="stage-icon machine-icon">
              <svg viewBox="0 0 150 130" fill="none">
                <rect
                  x="15"
                  y="35"
                  width="120"
                  height="80"
                  rx="10"
                  fill="#176B43"
                />
                <rect
                  x="25"
                  y="45"
                  width="100"
                  height="60"
                  rx="5"
                  fill="#245D42"
                  stroke="#A4DDB6"
                  strokeWidth="2"
                />
                <rect
                  x="38"
                  y="55"
                  width="73"
                  height="34"
                  rx="4"
                  fill="#C8EAD2"
                />
                <path
                  d="M50 72L62 61L74 80L87 66L99 76"
                  stroke="#176B43"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="118" cy="96" r="4" fill="#9EE2B1"/>
                <rect
                  x="50"
                  y="15"
                  width="50"
                  height="20"
                  rx="5"
                  fill="#4B9667"
                />
                <rect
                  x="10"
                  y="115"
                  width="130"
                  height="8"
                  rx="4"
                  fill="#0D3C29"
                />
                <path
                  d="M30 35V20H120V35"
                  stroke="#176B43"
                  strokeWidth="5"
                />
              </svg>
            </div>
            <span className="stage-caption">PROCESSING</span>
          </div>

          {/* ARROW */}
          <div className="cycle-arrow arrow-two">
            <span>→</span>
          </div>

          {/* RECYCLED PELLETS */}
          <div className="recycle-stage pellets-stage">
            <div className="stage-icon pellets-icon">
              <div className="pellet pellet-one"></div>
              <div className="pellet pellet-two"></div>
              <div className="pellet pellet-three"></div>
              <div className="pellet pellet-four"></div>
              <div className="pellet pellet-five"></div>
              <div className="pellet pellet-six"></div>
              <div className="pellet pellet-seven"></div>
              <div className="pellet pellet-eight"></div>
              <div className="pellet pellet-nine"></div>
            </div>
            <span className="stage-caption">NEW MATERIAL</span>
          </div>

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="scene-footer">
          <div className="footer-icon">♻</div>
          <div>
            <h3>Turning Waste Into Value</h3>
            <p>Creating a more sustainable tomorrow.</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">

          <img
            src="/iamges/industrial.jpg.png"
            alt="Industrial plastic production"
            className="h-60 w-full rounded-2xl object-cover shadow-lg sm:h-80 md:h-[350px]"
/>

          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest dark:text-gray-300 text-green-700 sm:text-sm">
              Welcome to AL-DYAR
            </p>

            <h2 className="mt-4 text-2xl font-bold text-green-950 sm:text-3xl md:text-4xl">
              Quality Products. Sustainable Thinking.
            </h2>

            <p className="mt-5 text-sm leading-7  dark:text-gray-300 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
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
            <p className="text-xs font-bold dark:text-gray-300 uppercase tracking-widest text-green-700 sm:text-sm">
              What We Offer
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-green-950 sm:text-3xl md:text-4xl">
              Our Products
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7  dark:text-gray-300 text-gray-600 sm:text-base">
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

                  <p className="mt-3 text-sm leading-6  dark:text-gray-300 text-gray-500">
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
              to="/product"
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
          <p className="text-xs font-bold uppercase tracking-widest  dark:text-gray-300 text-green-700 sm:text-sm">
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

              <p className="mt-3 text-sm leading-7  dark:text-gray-300 text-gray-600 sm:mt-4 sm:text-base">
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

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7  dark:text-gray-300 text-green-100 sm:mt-5 sm:text-base sm:leading-8">
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