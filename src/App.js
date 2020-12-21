import React from 'react';
import ProductsContextProvider from './contexts/ProductContextProvider';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <ProductsContextProvider>
        <Routes />
      </ProductsContextProvider>
    </div>
  );
};

export default App;
