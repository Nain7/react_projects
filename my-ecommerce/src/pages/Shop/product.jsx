import React, { useContext } from 'react';
import {ShopContext} from "../../context/shop-context";



const ProductItem = (props) => {
  const { id, ProductName, Price, ProductImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const CartItemAmount = cartItems[id]
  return (
    <div>
      
      <img src={ProductImage} alt={ProductName} style={{ width: '200px', height: '200px' }} /><h3>{ProductName}</h3>
      <p>Price: ${Price}</p>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>Add to Cart {CartItemAmount > 0 && <> ({CartItemAmount})</>}</button>
    </div>
  );
};

export default ProductItem;
