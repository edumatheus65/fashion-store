import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";
import { CartItemCard } from "../CartItemCard/CartItemCard";

export const CartModal = () => {
  const { setIsVisible, cartList, removeCartProduct, total } =
    useContext(ProductsContext);

  return (
    <div role="dialog" className={styles.dialog}>
      <div className={styles.modalBox}>
        <div className={`${styles.titleBox}`}>
          <p className={`${styles.titleRelative} title`}>CARRINHO</p>
          <button
            aria-label="close"
            title="Fechar"
            onClick={() => setIsVisible(false)}
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styles.cartItems}>
          {cartList === 0 ? (
            <div className={styles.noItem}>
              <p className={`title`}>Nenhum item no carrinho</p>
            </div>
          ) : (
            <ul className={styles.cartList}>
              {cartList.map((product) => (
                <CartItemCard
                  key={crypto.randomUUID()}
                  removeCartProduct={removeCartProduct}
                  product={product}
                />
              ))}
            </ul>
          )}
        </div>
        <div className={styles.totalBox}>
          <div className={styles.totalTitle}>
            <span className="paragraphs">Total</span>
            <span className="paragraphs sm-price">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
