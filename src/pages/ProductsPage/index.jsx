import { useContext } from "react";
import { HomePage } from "../../components/HomePage/HomePage";
import { ProductsContext } from "../../providers/ProductsContext";
import { CartModal } from "../../components/CartModal/CartModal";
import { ProductPageFour } from "../../components/ProductPage/ProductPageFour";
import { ProductPageOne } from "../../components/ProductPage/ProductPageOne";
import { ProductPageThree } from "../../components/ProductPage/ProductPageThree";
import { ProductPageTwo } from "../../components/ProductPage/ProductPageTwo";

export const ProductsPage = () => {
  const { isVisible } = useContext(ProductsContext);
  return (
    <>
      <HomePage />
      {isVisible ? <CartModal /> : null}
    
    </>
  );
};
