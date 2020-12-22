import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Paper style={{ height: '200px' }}>
        <Link to={`/details/${item.id}`} key={item.id}>
          <h1 style={{ color: 'black' }}>{item.title}</h1>
        </Link>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
