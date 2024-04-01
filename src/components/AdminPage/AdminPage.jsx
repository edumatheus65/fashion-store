import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { Header } from "../Header";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./style.module.scss";

export const AdminPage = () => {
  const { userLogout } = useContext(UserContext);
  const getNameFromLS = localStorage.getItem("Name");

  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.adminComponents}>
          <div className={styles.flexbox}>
            <div className={styles.links}>
              <Link className="title five" to="/admin">
                INÍCIO
              </Link>
              <Link className="title five" to="/handleproducts">
                PRODUTOS
              </Link>
            </div>
            <div>
              <button className="btn__black login" onClick={() => userLogout()}>
                Fazer Logout
                <BiLogOutCircle size={23} />
              </button>
            </div>
          </div>
          <div className={styles.tests}>
            <h2 className="title two">PAINEL DO ADMINISTRADOR</h2>
            <p className="another__paragraph">
              Seja bem vindo, {getNameFromLS}
            </p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="container">
          <p className="footerText">
            Todos os direitos reservados - Kenzie Academy Brasil
          </p>
        </div>
      </footer>
    </>
  );
};
