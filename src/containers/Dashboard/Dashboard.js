import React from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from './Sidebar';
import Contents from './Contents';

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={7}>
        <Contents />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
