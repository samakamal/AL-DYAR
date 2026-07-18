import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

 return (
  <div className="p-6">
    {/* Search Input */}
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-6 w-full rounded-lg border p-3"
    />

    {/* Products Grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products
  .filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  .map((product) => (
    <ProductCard
      key={product.id}
      productURL={`/products/${product.id}`}
      prodImage={product.image}
      prodImageAlt={product.title}
      title={product.title}
      price={product.price}
      description={product.description}
      category={product.category}
      isNew={product.id <= 4}
      onFav={(e) => {
        e.preventDefault();
        alert(`${product.title} added to wishlist!`);
      }}
    />
  ))}

    </div>
  </div>
);}

function ProductCard({
  productURL,
  onFav,
  prodImage,
  prodImageAlt,
  title,
  price,
  description,
  category,
  isNew,
}) {
  return (
    <Link
      to={productURL}
      className="group relative block h-fit overflow-hidden"
    >
      <button
        type="button"
        onClick={onFav}
        className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-900 transition hover:text-red-500"
      >
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <div className="flex h-64 w-full items-center justify-center transition duration-500 group-hover:scale-105">
        <img
          src={prodImage}
          alt={prodImageAlt}
          className="max-h-60 object-contain"
        />
      </div>

      <div className="border border-gray-200 bg-white p-6">
        {isNew && (
          <span className="rounded bg-yellow-400 px-3 py-1 text-xs font-medium">
            New
          </span>
        )}

        <h3 className="mt-4 line-clamp-2 text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500 capitalize">
          {category}
        </p>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {description}
        </p>

        <p className="mt-4 text-xl font-bold text-green-600">
          ${price}
        </p>

        <button
          type="button"
          className="mt-4 w-full rounded bg-yellow-400 p-3 font-medium transition hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

function CategoryItem({ name, img }) {
  return (
    <div className="flex w-16 flex-col items-center">
      <div className="rounded-full bg-gray-300 p-4">
        <img src={img} alt={name} />
      </div>

      <h3 className="text-center">{name}</h3>
    </div>
  );
}

export default Products;