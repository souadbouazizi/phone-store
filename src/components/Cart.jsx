// Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  return (
    <div className="cart-container">
      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Cart Total: {getTotalPrice()}$</h3>
            <button onClick={clearCart}>Empty Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
