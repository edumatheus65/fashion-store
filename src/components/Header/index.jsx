import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.flexbox}>
          <Link to="/">
          <img src={Logo} alt="Logo Fashion Store" />
          </Link>
        </div>
      </div>
    </header>
  );
};
