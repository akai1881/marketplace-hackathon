import React from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from './Sidebar';
import Contents from './Contents';
import Wrapper from './Wrapper';

const Dashboard = () => {
  return (
    <Wrapper>
      <Grid container spacing={4} id="product-container">
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Contents />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Dashboard;
