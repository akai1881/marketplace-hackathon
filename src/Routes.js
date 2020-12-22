import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './containers/Dashboard/Footer/Footer';
import ProductDetails from './containers/Product/ProductDetails';
import ProductList from './containers/Product/ProductList';
import Header from './containers/Dashboard/Header/Header';
import { AuthContextProvider } from './contexts/AuthContextProvider';
import Dashboard from './containers/Dashboard/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/details/:id" component={ProductDetails} />
        </Switch>
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
