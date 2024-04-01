import { MdAddShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { addCartProduct } = useContext(ProductsContext);

  return (
    <li className={styles.productItem}>
      <div className={styles.productBox}>
        <img src={product.image} alt={product.name} />
        <div className={styles.productTitle}>
          <h3 className="title four">{product.name}</h3>
          <p className={styles.price}>
            {parseFloat(product.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
      <div className={styles.cartBox}>
        <button
          onClick={() => addCartProduct(product)}
          className={styles.cartButton}
        >
          <MdAddShoppingCart size={23} />
        </button>
        <Link
          to={`/product/${product.id}`}
          className={`paragraphs ${styles.buttonMore}`}
        >
          SAIBA MAIS{" "}
        </Link>
      </div>
    </li>
  );
};
