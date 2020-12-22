import React, { useReducer } from 'react';
import axios from 'axios';

export const productsContext = React.createContext();

let INIT_STATE = {
  products: [],
  productsDetail: null,
  editToProduct: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_LIST':
      return { ...state, products: action.payload };
    case 'GET_PRODUCT_DETAILS':
      return { ...state, productsDetail: action.payload };
    case 'EDIT_PRODUCT':
      return { ...state, editToProduct: action.payload };
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProductList() {
    let { data } = await axios(`http://localhost:8000/products`);
    dispatch({
      type: 'GET_PRODUCT_LIST',
      payload: data,
    });
  }

  async function getProductDetails(id) {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: 'GET_PRODUCT_DETAILS',
      payload: data,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`http://localhost:8000/products/${id}`);
    getProductList();
  }

  async function editProduct(id) {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: 'EDIT_PRODUCT',
      payload: data,
    });
  }

  async function saveProduct(newContact) {
    try {
      await axios.patch(
        `http://localhost:8000/products/${newContact.id}`,
        newContact
      );
    } catch (error) {
      console.log('error');
    }
    getProductList();
  }

  async function addProduct(newContact) {
    await axios.post(`http://localhost:8000/products`, newContact);
    getProductList();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        productsDetail: state.productsDetail,
        editToProduct: state.editToProduct,
        addProduct,
        deleteProduct,
        getProductDetails,
        getProductList,
        saveProduct,
        editProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
