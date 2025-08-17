import { Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import ProtactionLayout from "../layouts/ProtactionLayout.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import AddProductPage from "../pages/AddProductPage.jsx";
import EditProductPage from "../pages/EditProductPage.jsx";
import AddUserPage from "../pages/AddUserPagej";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtactionLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/addProduct" element={<AddProductPage />} />
        <Route path="/product/editProduct/:id" element={<EditProductPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/addUser" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
