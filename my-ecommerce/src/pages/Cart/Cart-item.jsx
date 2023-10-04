import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { id, ProductName, Price, ProductImage } = props.data;
    const { cartItems, addToCart, removefromCart, updateCartItemCount } = useContext(ShopContext);
    return (
    <div className="cartItem">
     <img src={ProductImage} alt={ProductName} style={{ width: '200px', height: '200px' }} /><h3>{ProductName}</h3>
      <p>Price: ${Price}</p>
      <div className='countHandler'>
        <button onClick={() => removefromCart(id)}> - </button>
        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
        <button onClick={() =>addToCart(id)}> + </button>
      </div>
     
    </div>
  )
}


