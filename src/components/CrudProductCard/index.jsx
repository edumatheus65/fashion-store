import { useContext } from "react";
import { CrudProductContext } from "../../providers/HandleProductContext";
import { CrudProductList } from "./CrudProductList";
import styles from "./styles.module.scss";

export const CrudProductCard = () => {
  const { crudProductList } = useContext(CrudProductContext);

  return (
    <ul className={styles.list}>
      {crudProductList.map((product) => (
        <CrudProductList key={product.id} product={product} />
      ))}
    </ul>
  );
};
