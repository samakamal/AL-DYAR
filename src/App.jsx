import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Jewelry from "./components/Jewelry";
import Womensclothing from "./components/Womensclothing";
import Mensclothing from "./components/Mensclothing";
import Electronics from "./components/Electronics";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            search={search}
            setSearch={setSearch}
          />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="products"
          element={<Products search={search} />}
        />
       <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="jewelry" element={<Jewelry />} />
        <Route path="Womensclothing" element={<Womensclothing />} />
        <Route path="Mensclothing" element={<Mensclothing />} />
        <Route path="Electronics" element={<Electronics />} />
      </Route>
    </Routes>
  );
}

export default App;
