import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './store';

const Products = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' }
  ];

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
