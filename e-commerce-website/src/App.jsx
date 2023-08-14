import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  getProducts,
  calculateTotalCart,
} from "../src/features/products/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import SharedNavbar from "./components/navbar/sharedNavbar";
import Products from "./pages/Products-page/Products";
import DetailsPage from "./pages/Details-page/DetailsPage";
import Checkout from "./pages/Checkout-page/Checkout";
import CheckoutSuccess from "./pages/checkout-success-page/CheckoutSuccess";
import "./App.css";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.store);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(calculateTotalCart());
  }, [cartProducts]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedNavbar />}>
          <Route index element={<Products />} />
          <Route path="details/:productID" element={<DetailsPage />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout-success" element={<CheckoutSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
