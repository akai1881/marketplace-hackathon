import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Dashboard/Header/Header';
import { AuthContextProvider } from './contexts/AuthContextProvider';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default Routes;
