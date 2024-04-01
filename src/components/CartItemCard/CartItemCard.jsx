import { AiOutlineMinus } from "react-icons/ai";
import styles from "./styles.module.scss";

export const CartItemCard = ({ product, removeCartProduct }) => {
  return (
    <>
      <li>
        <div className={styles.productList}>
          <img src={product.image} alt={product.name} />
          <div className={styles.titleBox}>
            <div className={styles.title}>
              <p className="title">{product.name}</p>
              <p className={`${styles.price} paragraphs sm-price`}>
                {Number(product.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div>
              <button onClick={() => removeCartProduct(product.id)}>
                <AiOutlineMinus />
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
