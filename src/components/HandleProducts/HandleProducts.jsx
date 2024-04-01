import { useContext } from "react";
import { CrudProductCard } from "../CrudProductCard";
import { DefaultTemplate } from "../DefaultTemplate";
import { CrudProductContext } from "../../providers/HandleProductContext";
import { NewProductModal } from "../NewProductModal/NewProductModal";
import { EditProductModal } from "../EditProductModal/EditProductModal";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const HandleProducts = () => {
  const { createNewProductModal, setCreateNewProductModal, editingProduct } =
    useContext(CrudProductContext);

  return (
    <>
      <DefaultTemplate>
        <section className={styles.section}>
          <div className={styles.container}>
            <div>
              <div className={styles.subTitle}>
                <Link to="/admin" className="title five">
                  INÍCIO
                </Link>
                <Link to="/handleproducts" className="title five">
                  PRODUTOS
                </Link>
              </div>
              <div>
                <h1 className="title one">Produtos</h1>
                <span className="another__paragraph">
                  Gerencie os produtos do catálogo
                </span>
              </div>
            </div>
            <div className={styles.button}>
              <button
                className="btn__black"
                onClick={() => setCreateNewProductModal(true)}
              >
                <AiOutlinePlusCircle size={25} />
                Novo produto
              </button>
            </div>
          </div>
          {createNewProductModal ? (
            <div>
              {" "}
              <NewProductModal />{" "}
            </div>
          ) : null}
          {editingProduct ? <EditProductModal /> : null}
          <CrudProductCard />
        </section>
      </DefaultTemplate>
    </>
  );
};
