import { useContext } from "react";
import { MdOutlineModeEdit } from "react-icons//md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CrudProductContext } from "../../../providers/HandleProductContext";
import styles from "./styles.module.scss";

export const CrudProductList = ({ product }) => {
  const { deleteProductRequest, setEditingProduct } =
    useContext(CrudProductContext);

  return (
    <li className={styles.list}>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2 className="title four">{product.name}</h2>
          <span className={styles.price}>R$ {product.price},00</span>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => setEditingProduct(product)}>
            <MdOutlineModeEdit size={22} />
          </button>
          <button onClick={() => deleteProductRequest(product.id)}>
            <RiDeleteBin5Line size={22} />
          </button>
        </div>
      </div>
    </li>
  );
};
