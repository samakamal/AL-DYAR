import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Jewelry() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const jewelryProducts = data.filter(
          (product) => product.category === "jewelery"
        );

        setProducts(jewelryProducts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
        >
          <div className="rounded-lg border p-4 shadow-md transition hover:shadow-lg">

            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-48 w-full object-contain"
            />

            <h3 className="mt-4 text-lg font-semibold">
              {product.title}
            </h3>

            <p className="mt-2 text-xl font-bold text-green-600">
              ${product.price}
            </p>

            <p className="mt-1 text-gray-500">
              {product.category}
            </p>

            <p className="mt-2 text-yellow-500">
              ⭐ {product.rating.rate}
              <span className="text-gray-500">
                {" "}({product.rating.count} reviews)
              </span>
            </p>

          </div>
        </Link>
      ))}

    </div>
  );
}

export default Jewelry;