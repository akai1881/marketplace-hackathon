import React, { useReducer } from 'react';

export const productsContext = React.createContext();

let INIT_STATE = {
    products: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCT_LIST":
            return { ...state, products: action.payload }
    }
}

const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function getProductList() {
        let { data } = await axios(`http://localhost:8000/products`)
        dispatch({
            type: "GET_PRODUCT_LIST",
            payload: data
        })
    }

    return (
        <productsContext.Provider value={{
            products: state.products,
            getProductList
        }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;