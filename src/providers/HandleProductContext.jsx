import { createContext, useEffect, useState } from "react";
import { api } from "../api/axios";
import { toast } from "react-toastify";

export const CrudProductContext = createContext({});

export const CrudProductProvider = ({ children }) => {
  const [crudProductList, setCrudProductList] = useState([]);
  const [createNewProductModal, setCreateNewProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  useEffect(() => {
    const getProductsRequest = async () => {
      try {
        const { data } = await api.get("/products");
        setCrudProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsRequest();
  }, []);

  const createProductRequest = async (FormData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/products", FormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCrudProductList([...crudProductList, data]);
      toast.success("O produto foi adicionado com sucesso!");
      setCreateNewProductModal(false);
    } catch {
      toast.error("Não foi possível adicionar o produto");
    }
  };

  const deleteProductRequest = async (deletingId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/products/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newCrudProductList = crudProductList.filter((product) => {
        return product.id !== deletingId;
      });
      setCrudProductList(newCrudProductList);
      toast.success("Produto excluído com sucesso!");
    } catch {
      toast.error("Não foi possível deletar o produto!");
    }
  };

  const updateProductRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(
        `/products/${editingProduct.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newCrudProductList = crudProductList.map((product) => {
        if (product.id === editingProduct.id) {
          return data;
        } else {
          return product;
        }
      });
      setCrudProductList(newCrudProductList);
      toast.success("O produto foi atualizado com sucesso!");
      setEditingProduct(null);
    } catch {
      toast.error("Não foi possível editar o produto");
    }
  };

  return (
    <CrudProductContext.Provider
      value={{
        createProductRequest,
        crudProductList,
        deleteProductRequest,
        createNewProductModal,
        setCreateNewProductModal,
        editingProduct,
        setEditingProduct,
        updateProductRequest,
        deletingProduct,
        setDeletingProduct,
      }}
    >
      {children}
    </CrudProductContext.Provider>
  );
};
