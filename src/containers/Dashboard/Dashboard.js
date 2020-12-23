import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Sidebar from './Sidebar';
import Contents from './Contents';
import Wrapper from './Wrapper';

const useStyles = makeStyles({
  dashboardContainer: {
    padding: '80px 0 100px 0px',
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid
        container
        spacing={2}
        id="product-container"
        classes={{ container: classes.dashboardContainer }}
      >
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
