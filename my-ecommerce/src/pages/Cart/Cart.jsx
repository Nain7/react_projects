import React, { useContext } from "react";
import PRODUCTS from "../../Products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "../Cart/Cart-item";
import "./Cart.css";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()
  return (
    <div className="Cart"> {/* Apply the Cart class */}
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
          return null; // Optional: Skip rendering if quantity is 0
        })}
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">

        <p> Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout </button>
      </div>
      ) : (
        <h1> Your Cart is Empty</h1>
    )}
    </div>
  );
};

export default Cart;
