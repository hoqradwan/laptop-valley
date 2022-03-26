import React from "react";
import './Cart.css';

const Cart = (props) => {

    const {cart} = props;    
  
  return (
    <div className="cart">
      <h2>Order List</h2>
     <ol>
     {
        cart.map(name => <li>{name}</li>)
        }
     </ol>
    </div>
  );
};

export default Cart;
