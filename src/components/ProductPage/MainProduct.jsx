import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import { MdArrowForwardIos, MdAddShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";
import { HeaderHomePage } from "../HeaderHomePage/HeaderHomePage";
export const MainProduct = ({ product }) => {
  const { addCartProduct } = useContext(ProductsContext);

  return (
    <>
      <div className={`container `}>
        <div className={styles.titleHomeBox}>
          <h3 className="title">
            Home <MdArrowForwardIos size={16} /> {product.name}
          </h3>
        </div>
        <main>
          <div className={`${styles.bannerBox} ${styles.mainProduct}`}>
            <div className={styles.mainImg}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.mainText}>
              <h3 className="title">{product.name}</h3>
              <h4 className="paragraphs sm-price">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h4>
              <p className="paragraphs">{product.description}</p>
              <button
                className="btn__black"
                onClick={() => addCartProduct(product)}
              >
                <MdAddShoppingCart size={28} /> ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
