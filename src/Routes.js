import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './containers/Dashboard/Footer/Footer';
import ProductDetails from './containers/Product/ProductDetails';
import ProductList from './containers/Product/ProductList';
import Header from './containers/Dashboard/Header/Header';
import { AuthContextProvider } from './contexts/AuthContextProvider';
import EditProduct from './containers/Product/EditProduct';
import AddProduct from './containers/Product/AddProduct';

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/details/:id" component={ProductDetails} />
          <Route exact path="/editProduct" component={EditProduct} />
          <Route exact path="/addProduct" component={AddProduct} />
        </Switch>
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
