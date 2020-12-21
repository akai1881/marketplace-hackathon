import { Paper } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductContextProvider';

const ProductList = () => {

    const { getProductList, products } = useContext(productsContext)

    useEffect(() => {
        getProductList()
    }, [])

    console.log(products)

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map(item => (
                <Link to={`/details/${item.id}`} >
                    <Paper key={item.id} style={{ width: "250px", height: "250px", margin: "10px" }}>
                        <h1 style={{ color: "black" }}>{item.title}</h1>
                    </Paper>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;