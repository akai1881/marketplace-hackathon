import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { formatNumber } from '../../helpers/formatPrice';

const ProductCard = ({ item }) => {
  return (
    <Grid container item md={4} justify="center">
      <div className="product-card-container">
        <Link
          to={`/details/${item.id}`}
          style={{ width: '100%', height: '100%' }}
        >
          <div className="product-card-content">
            <picture className="product-card-image">
              <source srcSet={item.images[0]} type="image/webp" />
              <img scr={item.images[0]} />
            </picture>
            <div className="product-card-content-price">
              <div className="price-current">
                <span>{formatNumber(item.price)} RUB</span>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={`/details/${item.id}`}
          key={item.id}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <div className="product-card-title-container">{item.title}</div>
        </Link>
      </div>
    </Grid>
  );
};

export default ProductCard;
