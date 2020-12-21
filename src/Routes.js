import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Dashboard/Header/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
