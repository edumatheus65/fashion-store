import Gear from "../../assets/Gear.svg";
import styles from "./style.module.scss";

export const LoadingGear = () => {
  return (
    <div className={styles.loadingBox}>
      <img src={Gear} alt="Carregando..."></img>
    </div>
  );
};
