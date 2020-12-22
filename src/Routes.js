import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './containers/Dashboard/Footer/Footer';
import ProductDetails from './containers/Product/ProductDetails';
import ProductList from './containers/Product/ProductList';
import Header from './containers/Dashboard/Header/Header';
import { AuthContextProvider } from './contexts/AuthContextProvider';

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
      <Switch>
        <Route exact path="/details/:id" component={ProductDetails} />
      </Switch>
      <Footer />
      <ProductList />
    </BrowserRouter>
  );
};

export default Routes;
