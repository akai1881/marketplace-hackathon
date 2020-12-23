import React from 'react';
import PaymentForm from './containers/OrderForm/OrderForm';
import ProductsContextProvider from './contexts/ProductContextProvider';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
