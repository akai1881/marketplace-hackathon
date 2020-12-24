import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Sidebar from './Sidebar';
import Contents from './Contents';
import Wrapper from './Wrapper';

const useStyles = makeStyles({
  sidebar: {
    paddingLeft: '30px',
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid container id="product-container">
        <Grid item xs={false} sm={2} classes={{ item: classes.sidebar }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Contents />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Dashboard;
