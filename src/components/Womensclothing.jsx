import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Womensclothing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="mb-10 text-center text-4xl font-bold">
        Women's Clothing
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-72 w-full object-contain p-5 transition duration-300 hover:scale-105"
              />
            </Link>

            <div className="p-5">
              <h2 className="h-14 text-lg font-semibold line-clamp-2">
                {product.title}
              </h2>

              <p className="mt-3 text-xl font-bold text-pink-600">
                ${product.price}
              </p>

              <div className="mt-4 flex justify-between">
                <span className="text-yellow-500">
                  ⭐ {product.rating.rate}
                </span>

                <span className="text-sm text-gray-500">
                  {product.rating.count} Reviews
                </span>
              </div>

              <Link to={`/products/${product.id}`}>
                <button className="mt-5 w-full rounded-lg bg-pink-600 py-3 text-white transition hover:bg-pink-700">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Womensclothing;
