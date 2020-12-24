import React from 'react';
import { Grid } from '@material-ui/core';
import ProductList from '../Product/ProductList';
import Wrapper from '../Dashboard/Wrapper';

const Category = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item md={1} />
        <Grid container item md={10}>
          <ProductList />
        </Grid>
        <Grid item md={1} />
      </Grid>
    </Wrapper>
  );
};

export default Category;
