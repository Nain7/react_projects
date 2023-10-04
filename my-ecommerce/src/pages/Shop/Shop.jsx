import React from 'react';
import PRODUCTS from '../../Products';
import ProductItem from './product';
import "./Shop.css";

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>NainTech Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <ProductItem  data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
