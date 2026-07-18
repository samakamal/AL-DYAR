import React from "react";

function Home() {
  return (
    <section className="flex items-center justify-between px-16 py-10">
      {/* Left Side */}
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Browse through our diverse range of fashion products designed to fit
          every personality and style.
        </p>

        <button className="mt-8 rounded-full bg-black px-8 py-3 text-white">
          Shop Now
        </button>
      </div>

      {/* Right Side */}
      <div>
        <img
        src="/public/images/hero.jpg.webp"
        alt="no image"
        />
      </div>
    </section>
  );
}

export default Home;

