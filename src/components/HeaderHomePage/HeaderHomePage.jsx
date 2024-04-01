import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import styles from "./styles.module.scss";
import Logo from "../../assets/Logo.svg";
import { BsCart3 } from "react-icons/bs";
import { PiShoppingCartSimple } from "react-icons/pi";

import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const HeaderHomePage = () => {
  const { setIsVisible, cartList, totalProducts } = useContext(ProductsContext);

  return (
    <header>
      <div className={`container ${styles.flexBox}`}>
        <Link to="/">
          <img src={Logo} alt="Logo Fashion Store" />
        </Link>
        <div className={styles.icons}>
          <Link className={styles.user} to="/login">
            <BiUserCircle size={30} />
          </Link>
          <button
            className={styles.cartButton}
            onClick={() => setIsVisible(true)}
          >
            <PiShoppingCartSimple size={30} />
            {cartList.length > 0 ? (
              <span className={styles.productsNumber}>{totalProducts}</span>
            ) : null}
          </button>
        </div>
      </div>
    </header>
  );
};
