import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../providers/ProductsContext";
import styles from "./styles.module.scss";
import { MdAddShoppingCart } from "react-icons/md";

export const SecondaryProducts = ({ product }) => {
  const { addCartProduct } = useContext(ProductsContext);
  const navigate = useNavigate();
  const naviProducts = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <>
      <li className={styles.productItem}>
        <div className={styles.productBox}>
          <img src={product.image} alt={product.name} />
          <div className={styles.productTitle}>
            <h3 className="title four">{product.name}</h3>
            <h4 className={styles.price}>
              {" "}
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h4>
          </div>
          <div className={styles.cartBox}>
            <button
              className={styles.cartButton}
              onClick={() => addCartProduct(product)}
            >
              <MdAddShoppingCart size={30} />
            </button>
            <button
              className={`paragraphs ${styles.buttonMore}`}
              onClick={naviProducts}
            >
              SAIBA MAIS
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
