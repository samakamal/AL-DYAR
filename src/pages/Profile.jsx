import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HEADER */}
      <section className="bg-green-950 px-4 py-14 text-center text-white sm:px-6 sm:py-20">

        <p className="text-xs font-bold uppercase tracking-widest text-green-300 sm:text-sm">
          Who We Are
        </p>

        <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
          About AL-DYAR
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-100 sm:mt-5 sm:text-base sm:leading-8">
          Plastic solutions with a commitment to quality,
          innovation and a sustainable future.
        </p>

      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-10 lg:gap-12 lg:py-20">

        <div className="min-w-0 bg-white dark:bg-gray-950">

          <p className="text-xs font-bold uppercase tracking-widest text-green-700 sm:text-sm">
            About Our Company
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-green-950 sm:text-3xl md:text-4xl">
            Creating Value Through Quality and Innovation
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
            AL-DYAR is focused on providing plastic products
            and industrial material solutions for different
            applications.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            We believe in the importance of quality, customer
            satisfaction and responsible use of resources.
            Our goal is to build lasting relationships with
            our customers through reliable products and service.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-green-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-950 sm:mt-8 sm:px-8 sm:text-base"
          >
            Explore Our Products →
          </Link>

        </div>

        {/* COMPANY IMAGE */}
        <div className="w-full bg-white dark:bg-gray-950 overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
          <img
            src="/iamges/industrial.jpg.png"
            alt="AL-DYAR industrial production"
            loading="lazy"
            className="h-64 w-full object-cover sm:h-80 md:h-[350px] lg:h-[400px]"
          />
        </div>

      </section>

      {/* MISSION AND VISION */}
      <section className="bg-green-50 px-4 py-14 sm:px-6 sm:py-16 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-9 bg-white dark:bg-gray-950 text-center sm:mb-12">

            <p className="text-xs font-bold uppercase tracking-widest text-green-700 sm:text-sm">
              Our Direction
            </p>

            <h2 className="mt-3 text-2xl font-bold text-green-950 sm:text-3xl">
              Our Mission & Vision
            </h2>

          </div>

          <div className="grid gap-6 bg-white dark:bg-gray-950 sm:gap-8 md:grid-cols-2">

            {/* MISSION */}
            <div className="rounded-2xl  dark:bg-gray-950 bg-white p-6 shadow-sm sm:p-8 md:p-10">

              <div className="text-3xl bg-white dark:bg-gray-950 text-green-700 sm:text-4xl">
                ◎
              </div>

              <h3 className="mt-4 text-xl font-bold text-green-950 sm:mt-5 sm:text-2xl">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                To provide quality plastic products and practical
                industrial solutions while focusing on customer
                needs and responsible material use.
              </p>

            </div>

            {/* VISION */}
            <div className="rounded-2xl  dark:bg-gray-950 bg-white p-6 shadow-sm sm:p-8 md:p-10">

              <div className="text-3xl bg-white dark:bg-gray-950 text-green-700 sm:text-4xl">
                ♻
              </div>

              <h3 className="mt-4 text-xl font-bold text-green-950 sm:mt-5 sm:text-2xl">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                To contribute to a more sustainable future through
                innovation, quality and the continuous development
                of plastic solutions.
              </p>

            </div>

          </div>
        </div>

      </section>

      {/* OUR VALUES */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">

        <div className="text-center bg-white dark:bg-gray-950">

          <p className="text-xs font-bold uppercase tracking-widest text-green-700 sm:text-sm">
            What Matters to Us
          </p>

          <h2 className="mt-3 text-2xl font-bold text-green-950 sm:text-3xl">
            Our Core Values
          </h2>

        </div>

        <div className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2  bg-white dark:bg-gray-950 sm:gap-7 lg:grid-cols-4">

          {[
            ["01", "Quality", "We focus on dependable products and consistent standards."],
            ["02", "Innovation", "We value improvement and practical new ideas."],
            ["03", "Sustainability", "We support responsible use of materials."],
            ["04", "Trust", "We believe in honest and lasting customer relationships."],
          ].map(([number, title, description]) => (

            <div
              key={number}
              className="rounded-2xl border border-green-100 p-6 transition duration-300 hover:border-green-700 hover:shadow-lg sm:p-7"
            >

              <span className="text-3xl font-extrabold text-green-200">
                {number}
              </span>

              <h3 className="mt-4 text-lg font-bold text-green-950 sm:mt-5 sm:text-xl">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base">
                {description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-950 px-4 py-12 text-center text-white sm:px-6 sm:py-16">

        <h2 className="text-2xl font-bold sm:text-3xl">
          Discover What AL-DYAR Can Offer
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-100 sm:text-base sm:leading-8">
          Explore our product range and contact our team
          to discuss your requirements.
        </p>

        <Link
          to="/contactus"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-green-950 transition hover:bg-green-100 sm:mt-8 sm:px-9 sm:text-base"
        >
          Get in Touch →
        </Link>

      </section>

    </main>
  );
}

export default Profile;