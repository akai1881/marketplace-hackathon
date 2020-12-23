import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const ProductCard = ({ item }) => {
  return (
    <Grid item md={4}>
      <div className="product-card-container">
        <Link to={`/details/${item.id}`}>
          <div className="product-card-content">
            <div className="product-card-price">
              <h4 style={{ color: "white", margin: "10px 0 10px 0", textAlign: "center" }}> {item.price} </h4>
            </div>
            <img style={{ width: "300px", padding: "5px 20px 0px 20px" }} src={item.images[0]} alt="" />
          </div>
        </Link>
        <Link to={`/details/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
          <div className="product-card-title-container">
            {item.title}
          </div>
        </Link>
      </div>
    </Grid>
  );
};

export default ProductCard;
