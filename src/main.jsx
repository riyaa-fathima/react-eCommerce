import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Product/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route  path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlink" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={ <Home/>} />
        <Route path="/product-detail" element={ <ProductDetails/>} />
      </Routes>
     
    </BrowserRouter>
  </StrictMode>
);
