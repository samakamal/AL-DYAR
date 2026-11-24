
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-950 text-green-100">

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-4">

        {/* COMPANY */}
        <div>
          <Link
            to="/"
            className="flex w-fit items-center gap-3"
          >
            <img
              src="/images/logoo-128x93.png"
              alt="AL-DYAR Logo"
              className="h-12 w-auto rounded bg-white object-contain sm:h-14"
            />

            <span className="text-xl font-extrabold tracking-widest text-white sm:text-2xl">
              AL-DYAR
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-green-200">
            Plastic products and industrial solutions with
            a commitment to quality and a greener future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/" className="transition-colors hover:text-white focus-visible:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/profile" className="transition-colors hover:text-white focus-visible:text-white">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition-colors hover:text-white focus-visible:text-white">
                Our Products
              </Link>
            </li>

            <li>
              <Link to="/contactus" className="transition-colors hover:text-white focus-visible:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Our Products
          </h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/products/recycle-plastic" className="transition-colors hover:text-white">
                (PP) Recycled Plastic
              </Link>
            </li>

            <li>
              <Link to="/products/plastic-pails" className="transition-colors hover:text-white">
                Plastic Pails
              </Link>
            </li>

            <li>
              <Link to="/products/pe-film" className="transition-colors hover:text-white">
                PE Film
              </Link>
            </li>

            <li>
              <Link to="/products/geomembrane" className="transition-colors hover:text-white">
                Geomembrane
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Contact Information
          </h3>

          <div className="mt-5 space-y-5 text-sm">

            <div>
              <p className="font-bold text-white">Email</p>
              <a
                href="mailto:info@al-dyar.com"
                className="break-all transition-colors hover:text-white"
              >
                info@al-dyar.com
              </a>
            </div>

            <div>
              <p className="font-bold text-white">Phone</p>
              <a
                href="tel:+201001787509"
                className="transition-colors hover:text-white"
              >
                +20 100 1787 509
              </a>
            </div>

            <div>
              <p className="font-bold text-white">Location</p>
              <p className="mt-1 leading-6">
                New Administrative Capital, Cairo, Egypt
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/oHryB9RAirByLQrx6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-green-300 transition-colors hover:text-white"
            >
              View on Google Maps →
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-green-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:flex-row sm:px-8">

          <p className="text-xs leading-6 text-green-300">
            © {new Date().getFullYear()} AL-DYAR. All Rights Reserved.
          </p>

          <p className="text-xs leading-6 text-green-300">
            Committed to recycling today for a cleaner tomorrow. ♻
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;


