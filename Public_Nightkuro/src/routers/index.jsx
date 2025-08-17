import { Route, Routes } from "react-router";
import ProductPage from "../pages/ProductPage";
import DetailProduct from "../pages/DetailProductPage";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<DetailProduct />} />
    </Routes>
  );
};

export default Router;
