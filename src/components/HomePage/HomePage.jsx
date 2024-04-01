import FotoBanner from "../../assets/FotoBanner.png";
import styles from "./styles.module.scss";
import { Footer } from "../Footer";
import { useContext, useEffect, useState } from "react";
import { api } from "../../api/axios";
import { ProductsContext } from "../../providers/ProductsContext";
import { HeaderHomePage } from "../HeaderHomePage/HeaderHomePage";
import { ProductCard } from "../ProductPage/ProductCard";

export const HomePage = () => {
  const { products, setProducts, addCartProduct, cartList, setCartList } =
    useContext(ProductsContext);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@cartListItems", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <>
      <HeaderHomePage />
      <div className={`container ${styles.bannerBox}`}>
        <img src={FotoBanner} alt="Foto com 3 mulheres sorrindo" />
        <div className={styles.titleBox}>
          <h1 className={`title seven ${styles.logoTitle}`}>
            KENZIE <br />
            FASHION
            <br />
            STORE
          </h1>
          <button className="btn__black">CONFIRA AS OFERTAS</button>
        </div>
      </div>
      <section className="container">
        <div className={styles.productsSection}>
          <h2 className="title two">PRODUTOS EM DESTAQUE</h2>
          <ul className={styles.productsList}>
            {products.map((product) => (
              <ProductCard
                addCartProduct={addCartProduct}
                key={crypto.randomUUID()}
                product={product}
              />
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};
