import React from "react";

function Home() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between px-8 py-16 md:flex-row">
      {/* Left Side */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Browse through our diverse range of fashion products designed to fit
          every personality and style.
        </p>

        <button className="mt-8 rounded-full bg-black px-8 py-3 text-white hover:bg-gray-800">
          Shop Now
        </button>

        <div className="mt-10 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold">200+</h2>
              <p>Brands</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">2,000+</h2>
              <p>Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">30,000+</h2>
              <p>Customers</p>
            </div>
          </div>
      </div>

      {/* Right Side */}
      <div className="mt-10 md:mt-0">
        <img
        src="/public/images/hero.jpg.webp"
        alt="no image"
        />
      </div>
    </section>
  );
}

export default Home;

