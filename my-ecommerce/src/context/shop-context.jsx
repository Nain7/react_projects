import React, { createContext, useState } from 'react';
import PRODUCTS from '../Products';

export const ShopContext = createContext(null);

 const getDefaultCart = () => {
    let Cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        Cart[i] = 0;
    }
    return Cart;
 }

 export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
   
   const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems){
      if (cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product) =>  product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.Price
      }
    }
    return totalAmount;
   }
   
    const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
   };
   const removefromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
   };

   const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount}))
   }

   const contextValue = {cartItems, addToCart, removefromCart, updateCartItemCount, getTotalCartAmount}
  console.log(cartItems);
    return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}


