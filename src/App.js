import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingCart from './ShoppingCart';
import Products from './Products';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <Products />
        <ShoppingCart />
      </div>
    </Provider>
  );
}

export default App;
