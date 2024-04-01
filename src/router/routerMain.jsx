import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { RegisterPage } from "../components/RegisterPage/RegisterPage";
import { LoginPage } from "../components/LoginPage/LoginPage";
import { ProductPageOne } from "../components/ProductPage/ProductPageOne";
import { AdminPage } from "../components/AdminPage/AdminPage";
import { HandleProducts } from "../components/HandleProducts/HandleProducts";
import { ProductsPage } from "../pages/ProductsPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { ProductPageTwo } from "../components/ProductPage/ProductPageTwo";
import { ProductPageThree } from "../components/ProductPage/ProductPageThree";
import { ProductPageFour } from "../components/ProductPage/ProductPageFour";
  
export const RounterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/1" element={<ProductPageOne></ProductPageOne>}/>
            <Route path="/product/2" element={<ProductPageTwo/>}/>
            <Route path="/product/3" element={<ProductPageThree/>}/>
            <Route path="/product/4" element={<ProductPageFour/>}/>
      <Route element={<PrivateRoutes />}>
        <Route path="/handleproducts" element={<HandleProducts />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
      <Route  element={<PublicRoutes />}>
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="/login" element={<LoginPage></LoginPage>} /> 
      </Route>
    </Routes>
  );
};