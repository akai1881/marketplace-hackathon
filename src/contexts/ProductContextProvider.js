import React, { useReducer } from 'react';
import axios from 'axios';

export const productsContext = React.createContext();

let INIT_STATE = {
  products: [],
  productsDetail: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_LIST':
      return { ...state, products: action.payload };
    case 'GET_PRODUCT_DETAILS':
      return { ...state, productsDetail: action.payload };

    default:
      return state;
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

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        productsDetail: state.productsDetail,
        getProductDetails,
        getProductList,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
