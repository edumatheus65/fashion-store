import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const cart = JSON.parse(localStorage.getItem("@cartListItems"));
  const [cartList, setCartList] = useState(cart ? cart : []);
  const [isVisibleSingleProduct, setIsVisibleSingleProduct] = useState(false);

  const addCartProduct = (newCartProduct) => {
    const filterProducts = cartList.filter(
      (product) => product.id === newCartProduct.id
    );
    if (filterProducts.length == 0) {
      setCartList([...cartList, newCartProduct]);
      toast.success("Item adicionado ao carrinho");
      console.log(cartList);
    } else {
      toast.error("Item já adicionado ao carrinho");
    }
  };

  const removeCartProduct = (removeId) => {
    const newProductList = cartList.filter(
      (product) => product.id !== removeId
    );
    setCartList(newProductList);
  };

  const total = cartList.reduce((prevValue, product) => {
    return prevValue + Number(product.price);
  }, 0);

  const totalProducts = cartList.reduce(() => {
    return cartList.length;
  }, 0);

  return (
    <ProductsContext.Provider
      value={{
        isVisible,
        setIsVisible,
        products,
        setProducts,
        addCartProduct,
        cartList,
        setCartList,
        removeCartProduct,
        total,
        totalProducts,
        isVisibleSingleProduct,
        setIsVisibleSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
