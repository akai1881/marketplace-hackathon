import React from 'react';
import PaymentForm from './containers/OrderForm/OrderForm';
import ProductsContextProvider from './contexts/ProductContextProvider';
import Routes from './Routes';
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
};

export default App;
