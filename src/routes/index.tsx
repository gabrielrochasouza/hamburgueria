import { Routes as Router, Route } from "react-router-dom";
import Checkout from "../pages/checkout";
import Login from "../pages/login";
import ProductDescription from "../pages/product-description";
import Profile from "../pages/profile";
import Register from "../pages/register";
import Shop from "../pages/shop";


export function Routes() {
  return (
    <Router>
      <Route path="/"  element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductDescription />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/checkout" element={<Checkout/> }/>
      
    </Router>
  );
}
