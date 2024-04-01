import styles from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="footerText">
          Todos os direitos reservados - Kenzie Academy Brasil
        </p>
      </div>
    </footer>
  );
};
