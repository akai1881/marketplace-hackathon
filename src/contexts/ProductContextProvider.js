import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { calcSubPrice, calcTotalPrice } from '../helpers/calcPrice';

export const productsContext = React.createContext();

let INIT_STATE = {
  products: [],
  productsDetail: null,
  editToProduct: null,
  productsCountInCart: JSON.parse(localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart')).products.length
    : 0,
  product: null,
  cartData: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_LIST':
      return { ...state, products: action.payload };
    case 'GET_PRODUCT_DETAILS':
      return { ...state, productsDetail: action.payload };
    case 'EDIT_PRODUCT':
      return { ...state, editToProduct: action.payload };
    case 'COUNT_PRODUCTS_IN_CARD':
      return { ...state, productsCountInCart: action.payload };
    case 'GET_CART':
      return {
        ...state,
        cartData: action.payload,
      };
    case 'SEARCH_POST':
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  async function getProductList() {
    const { data } = await axios(
      `http://localhost:8000/products${window.location.search.replace(
        /%3D/g,
        ''
      )}`
    );
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
    try {
      await axios.delete(`http://localhost:8000/products/${id}`);
      history.push('/');
      getProductList();
    } catch {
      console.log('error');
    }
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

  function addProductToCart(item) {
    let cart = getAllCart();
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      product: item,
      count: 1,
      size: 'S',
      subPrice: 0,
    };

    newProduct.subPrice = calcSubPrice(newProduct);

    let obj = cart.products.find((elem) => elem.product.id === item.id);
    if (obj) {
      cart.products = cart.products.filter(
        (elem) => elem.product.id !== item.id
      );
    } else {
      cart.products.push(newProduct);
    }
    cart.totalPrice = calcTotalPrice(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    getCart();
  }

  function checkItemInCart(id) {
    let cart = getAllCart();
    if (!cart) return false;
    let newCart = cart.products.filter((item) => item.product.id === id);
    return newCart.length ? true : false;
  }

  function countProductsInCart() {
    let cart = getAllCart();
    if (!cart) return;
    dispatch({
      type: 'COUNT_PRODUCTS_IN_CARD',
      payload: cart.products.length,
    });
  }

  function getCart() {
    let cart = getAllCart();
    countProductsInCart();
    dispatch({
      type: 'GET_CART',
      payload: cart,
    });
  }

  function changeCountInCart(id, count) {
    let cart = getAllCart();
    switch (count) {
      case 'PLUS':
        handleIncr();
        break;
      case 'MINUS':
        handleDecr();
        break;

      default:
        handleInp();
    }

    function handleIncr() {
      cart.products = cart.products.map((item) => {
        if (item.product.id === id) {
          item.count++;
          item.subPrice = calcSubPrice(item);
        }
        return item;
      });
    }

    function handleDecr() {
      cart.products = cart.products.map((item) => {
        if (item.product.id === id && item.count > 1) {
          item.count--;
          item.subPrice = calcSubPrice(item);
        }
        return item;
      });
    }

    function handleInp() {
      cart.products = cart.products.map((item) => {
        if (item.product.id === id) {
          item.count = count;
          item.subPrice = calcSubPrice(item);
        }
        return item;
      });
    }

    cart.totalPrice = calcTotalPrice(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    getCart();
  }

  function chooseSize(id, size) {
    let cart = getAllCart();
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.size = size;
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    getCart();
  }

  function getAllCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  async function handleSearch(val) {
    try {
      let { data } = await axios(`http://localhost:8000/products?q=${val}`);
      dispatch({
        type: 'SEARCH_POST',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        productsDetail: state.productsDetail,
        editToProduct: state.editToProduct,
        productsCountInCart: state.productsCountInCart,
        addProduct,
        deleteProduct,
        getProductDetails,
        getProductList,
        addProductToCart,
        changeCountInCart,
        checkItemInCart,
        countProductsInCart,
        handleSearch,
        saveProduct,
        editProduct,
        getCart,
        sidebar,
        showSidebar,
        chooseSize,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
