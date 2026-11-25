
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { products } from "../data/product";

function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `transition-colors hover:text-green-700 ${
      isActive
        ? "font-bold text-green-800"
        : "text-gray-700"
    }`;

  const closeMobile = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-6">

        {/* LOGO */}
        <Link to="/" onClick={closeMobile} className="flex min-w-0 items-center gap-2">
          <img
            src="/iamges/logoo-128x93 (1).png"
            alt="AL-DYAR Logo"
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
          />

          <div className="min-w-0">
            <h2 className="text-lg font-extrabold tracking-wide text-green-950 sm:text-xl">
              AL-DYAR
            </h2>

            <p className="max-w-[170px] text-[8px] leading-tight text-gray-500 sm:max-w-none sm:text-[9px]">
              Plastic Solutions for a Greener Tomorrow
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-5 font-medium lg:flex xl:gap-9">

          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/profile" className={linkStyle}>
            About Us
          </NavLink>

          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              aria-expanded={productsOpen}
              className="flex items-center gap-2 text-gray-700 transition hover:text-green-700"
            >
              Products
              <span className={`transition ${productsOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4">
                <div className="max-h-80 overflow-y-auto rounded-xl border border-gray-100 bg-white p-2 shadow-xl">

                  <Link
                    to="/products"
                    onClick={() => setProductsOpen(false)}
                    className="block rounded-lg px-4 py-3 font-bold text-green-800 hover:bg-green-50"
                  >
                    All Products →
                  </Link>

                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      onClick={() => setProductsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
                    >
                      {product.shortName}
                    </Link>
                  ))}

                </div>
              </div>
            )}
          </div>

          <NavLink to="/contactus" className={linkStyle}>
            Contact Us
          </NavLink>

        </div>

        {/* DESKTOP ACTION */}
        <div className="hidden lg:flex">
          <Link
            to="/contactus"
            className="rounded-full bg-green-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-950 xl:px-5"
          >
            Get in Touch
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setProductsOpen(false);
          }}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="shrink-0 rounded-lg p-2 text-2xl text-green-900 transition hover:bg-green-50 lg:hidden"
        >
          {mobileOpen ? "×" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden">

          <div className="flex flex-col gap-4 font-medium">

            <NavLink to="/" end onClick={closeMobile} className={linkStyle}>
              Home
            </NavLink>

            <NavLink to="/profile" onClick={closeMobile} className={linkStyle}>
              About Us
            </NavLink>

            {/* MOBILE PRODUCTS */}
            <div>
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
                className="flex w-full items-center justify-between text-left text-gray-700 hover:text-green-700"
              >
                Products
                <span className={`transition ${productsOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {productsOpen && (
                <div className="mt-3 flex flex-col gap-3 border-l-2 border-green-100 pl-4">

                  <Link
                    to="/products"
                    onClick={closeMobile}
                    className="font-bold text-green-800"
                  >
                    All Products →
                  </Link>

                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      onClick={closeMobile}
                      className="text-sm text-gray-500 hover:text-green-800"
                    >
                      {product.shortName}
                    </Link>
                  ))}

                </div>
              )}
            </div>

            <NavLink to="/contactus" onClick={closeMobile} className={linkStyle}>
              Contact Us
            </NavLink>

            <Link
              to="/contactus"
              onClick={closeMobile}
              className="mt-2 rounded-full bg-green-800 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-950"
            >
              Get in Touch
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
