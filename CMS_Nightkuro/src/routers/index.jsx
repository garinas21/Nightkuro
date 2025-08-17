import { Route, Routes } from "react-router";
import LoginPage from "../Pages/LoginPage.jsx";
import HomePage from "../Pages/HomePage.jsx";
import ProductPage from "../Pages/ProductPage.jsx";
import ProtactionLayout from "../layouts/ProtactionLayout.jsx";
import CategoryPage from "../Pages/CategoryPage.jsx";
import AddProductPage from "../Pages/AddProductPage.jsx";
import EditProductPage from "../Pages/EditProductPage.jsx";
import AddUserPage from "../Pages/AddUserPage.jsx";

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
