import React from 'react';
import { Grid } from '@material-ui/core';
import ProductList from '../Product/ProductList';
import Wrapper from '../Dashboard/Wrapper';

const Category = () => {
  return (
    <Wrapper>
      <Grid container>
        <ProductList />
      </Grid>
    </Wrapper>
  );
};

export default Category;
