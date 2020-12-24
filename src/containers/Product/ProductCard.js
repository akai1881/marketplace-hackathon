import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const ProductCard = ({ item }) => {
  const formatNumber = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <Grid container item md={4} justify="center">
      <div className="product-card-container">
        {/* <Link to={`/details/${item.id}`}> */}
        <div className="product-card-content"></div>
        {/* </Link> */}
        <Link
          to={`/details/${item.id}`}
          key={item.id}
          style={{ textDecoration: 'none' }}
        >
          <div className="product-card-title-container">{item.title}</div>
        </Link>
      </div>
    </Grid>
  );
};

export default ProductCard;
