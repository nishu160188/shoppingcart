import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './store';

const ShoppingCart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
