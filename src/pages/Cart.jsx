import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
// import {cart} from "react-redux"

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const total = cart.reduce ((p,c)=>{
return p+c.price;
  }, 0)

  // console.log(total)
  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((Item) => (
            <CartItem key={Item.id} Item={Item} />
          ))}
        </div>

        <div className="bill-section">
          <h1> 
            Total Amount : <br /> <br />${total} 
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
