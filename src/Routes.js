import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './containers/Dashboard/Footer/Footer';
import ProductDetails from './containers/Product/ProductDetails';
import Header from './containers/Dashboard/Header/Header';
import { AuthContextProvider } from './contexts/AuthContextProvider';
import EditProduct from './containers/Product/EditProduct';
import AddProduct from './containers/Product/AddProduct';
import Dashboard from './containers/Dashboard/Dashboard';
import ProductsContextProvider from './contexts/ProductContextProvider';
import Category from './containers/Category/Category';
import Cart from './containers/Cart/Cart';
import PaymentForm from './containers/OrderForm/OrderForm';
import ToastProvider from 'react-toast-notifications';

const Routes = () => {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <AuthContextProvider>
          <Header />
          <Cart />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/product" component={Category} />
            <Route exact path="/details/:id" component={ProductDetails} />
            <Route exact path="/editProduct" component={EditProduct} />
            <Route exact path="/addProduct" component={AddProduct} />
            <Route exact path="/payment" component={PaymentForm} />
          </Switch>
          <Footer />
        </AuthContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
