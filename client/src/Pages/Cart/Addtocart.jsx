import React, { useState } from 'react';
import './Addtocart.css';
import head from '../head.png'
import apple from './apple.jpeg'; 
import orange from './orange.jpeg'; 
import Almonds from './Almonds.jpeg'
import { useNavigate } from 'react-router-dom';
import Cashews from './kaju.jpeg'
export default function Cart() {
  const fruits = [
    { name: 'Apple', price: 150, image: apple  },
    { name: 'Orange', price: 200, image: orange },
    { name: 'Almonds', price: 100, image: Almonds }, 
    { name: 'Cashews', price: 200, image: Cashews },

  ];

  const [cartItems, setCartItems] = useState([]); 
  const generateUniqueId = () => Math.floor(Math.random() * 100000);

  const handleRemoveItem = (item) => {
    const filteredItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(filteredItems);
  };

  const handleAddItem = (fruitName) => {
    const selectedFruit = fruits.find((fruit) => fruit.name === fruitName); 

    const newItem = {
      name: selectedFruit.name,
      price: selectedFruit.price,
      image: selectedFruit.image,
      id: generateUniqueId(),
    };
    const updatedItems = [...cartItems].concat(newItem);
    setCartItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  const navigate = useNavigate(); 

  return (
    <div>
      <img src={head} alt="im" />
      <div className="cart-container">
              {cartItems.length > 0 && (
          <header>
            <h2>Your Cart</h2>
            <p>Total Price: {calculateTotalPrice()}/kg</p>
            {cartItems.length > 0 && (
              <button className="payment-links" onClick={() => navigate('/payment')}>Proceed to Payment</button>
        )}
          </header>
        )}

        <div className="container">
          {cartItems.length > 0 ? (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <h4>{item.name}</h4>
                  <img src={item.image} alt={item.name} />
                  <p>Price: {item.price}/kg</p>
                  <button onClick={() => handleRemoveItem(item)}>
                    Remove from cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="para">Your wishlist. <br /> You can add these to your cart</p>
          )}

          <div className="buttons-container">
            {fruits.map((fruit) => (
              <button key={fruit.name} onClick={() => handleAddItem(fruit.name)} className="add-button">
                Add {fruit.name} to Cart
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
