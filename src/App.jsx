import "./App.css";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import { Route, Routes } from "react-router-dom";
import Discount from "./components/Discount/Discount.jsx";
import Layout from "./layout/Layout.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import Product from "./pages/Product/Product.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/product" element={<Product />} />
          <Route path="/wishlink" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/discount" element={<Discount />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
