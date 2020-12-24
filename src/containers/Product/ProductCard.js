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
            <div style={{ width: "300px", maxHeight: "340px", padding: "5px 20px 0px 20px", display: "flex", alignItems: "center" }}>
              <img style={{ width: "100%", maxHeight: "340px" }} src={item.images[0]} alt="" />
            </div>
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
