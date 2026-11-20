import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ContactUs from "./pages/Contactus";

function App() {
  return (
    <div className="flex min-h-screen flex-col">

      <Navbar />

      <main className="flex-grow">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route path="/contactus" element={<ContactUs />} />

          <Route
            path="*"
            element={
              <div className="flex min-h-[60vh] flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-green-950">
                  404
                </h1>
                <p className="mt-4 text-gray-600">
                  Page not found.
                </p>
              </div>
            }
          />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;




