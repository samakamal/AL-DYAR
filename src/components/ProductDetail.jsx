import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  function starBuilder(rate) {
    const stars = [];
    const fullStars = Math.floor(rate);
    const emptyStars = 5 - fullStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`full-${i}`}
          className="text-yellow-400"
          size={20}
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <CiStar
          key={`empty-${i}`}
          className="text-yellow-400"
          size={20}
        />
      );
    }

    return stars;
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-2xl font-bold text-blue-600">
          Loading Product...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600">
          {error}
        </h2>
      </div>
    );
  }

  // Decide where the Back button should go
  let backLink = "/products";
  let backText = "← Back to Products";

  if (product.category === "men's clothing") {
    backLink = "/Mensclothing";
    backText = "← Back to Men's Clothing";
  } else if (product.category === "women's clothing") {
    backLink = "/Womensclothing";
    backText = "← Back to Women's Clothing";
  } else if (product.category === "jewelery") {
    backLink = "/jewelry";
    backText = "← Back to Jewelry";
  } else if (product.category === "electronics") {
    backLink = "/Electronics";
    backText = "← Back to Electronics";
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">

        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-80 object-contain transition duration-300 hover:scale-105"
          />
        </div>

        <div>
          <h1 className="mb-4 text-3xl font-bold">
            {product.title}
          </h1>

          <div className="mb-5 flex items-center gap-2">
            {starBuilder(product.rating.rate)}
            <span className="text-gray-600">
              {product.rating.rate} ({product.rating.count} Reviews)
            </span>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-pink-600">
              ${product.price}
            </span>

            <del className="text-gray-400">
              ${(product.price * 1.1).toFixed(2)}
            </del>

            <span className="rounded bg-red-100 px-2 py-1 text-sm font-bold text-red-600">
              10% OFF
            </span>
          </div>

          <h3 className="mb-2 text-xl font-semibold">
            Description
          </h3>

          <p className="leading-7 text-gray-600">
            {product.description}
          </p>

          <p className="mt-5 text-gray-600">
            <span className="font-semibold">Category:</span>{" "}
            {product.category}
          </p>

          <button className="mt-8 rounded-lg bg-pink-600 px-8 py-3 text-white transition hover:bg-pink-700">
            Add To Cart
          </button>

          <div className="mt-6">
            <Link
              to={backLink}
              className="font-medium text-pink-600 hover:underline"
            >
              {backText}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;