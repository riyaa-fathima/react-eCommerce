import "./App.css";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Product/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import { Route, Routes } from "react-router-dom";
import Discount from "./components/Discount/Discount.jsx";




function App() {
  return <>
   <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/wishlink" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={ <Home/>} />
        <Route path="/product/:id" element={ <ProductDetails/>} />
        <Route path="/:id" element={ <ProductDetails/>} />
        <Route path="/discount" element={ <Discount/>} />
      </Routes>
  </>;
}

export default App;
