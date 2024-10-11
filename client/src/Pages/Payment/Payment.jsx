import React, { useState } from 'react';
import './Payment.css';
import head from '../head.png'

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [pin, setPin] = useState(''); 
  const handleCardNumberChange = (event) => {
    const formattedCardNumber = event.target.value
      .replace(/\D/g, '') 
      .match(/(\d{1,4})(\s*)/g) 
      ?.join(' ') 
      .slice(0, 19); 
    setCardNumber(formattedCardNumber || '');
  };
  const handlePinChange = (event) => {
    const newPin = event.target.value.replace(/\D/g, '').slice(0, 6); 
    setPin(newPin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isPaymentProcessed = await simulatePayment(cardNumber);

    if (isPaymentProcessed) {
      setIsPaymentSuccessful(true);
    } else {
      console.error('Payment failed.');
    }
  };

  const simulatePayment = (cardNumber) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000); 
    });
  };

  return (
    <div className='pay'>
      <img className='im' src={head} alt="im" />
    <div className="container">
      <form action="#" className="payment-form" onSubmit={handleSubmit}>
          <h1 className="titl">Payment</h1>
        <div className="col">
          <div className="item">
            <p className='name'>Billing Address</p>
            <div className="inputBox">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                placeholder="Enter card holder name"
                required
              />
            </div><br />
            <div className="inputBox">
              <label htmlFor="mail">Email :</label>
              <input
                type="text"
                id="mail"
                placeholder="Enter email address"
                required
              />
            </div><br />
            <div className="inputBox">
              <label htmlFor="address">Address :</label>
              <input
                type="text"
                id="address"
                placeholder="Enter house no, name"
                required
              />
            </div><br />

              <div className="inputBox">
                <label htmlFor="city">City :</label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                required
              />
            </div><br />
            <div className="inputBox">
                <label htmlFor="dist">District :</label>
              <input
                type="text"
                id="District"
                placeholder="Enter your district"
                required
              />
            </div><br />
              <div className="inputBox">
                <label htmlFor="state">State :</label>
              <input
                type="text"
                id="state"
                placeholder="Enter state"
                required
              />
            </div><br />
            
            <div className="inputBox">
              <label htmlFor="pin">Pin Code:</label>
              <input
                type="number"
                id="pin"
                maxLength="4"
                placeholder="Enter Address Pin Code"
                value={pin}
                onChange={handlePinChange}
                required
              />
            </div><br /><br />
          </div>
          <div className="item">
            <p className='name'>Paymnt Details</p>
            <div className="inputBox">
              <label htmlFor="cardName">Card Accepted :</label>
              <img src="cards.png" alt="credit/debit card image" />
            </div><br />
            <div className="inputBox">
              <label htmlFor="totalPrice">Total Price :</label>
              <input
                type="number"
                id="totalPrice"
                placeholder="Enter total price"
                required
              />
            </div><br />
            <div className="inputBox">
              <label htmlFor="cardName">Name On Card :</label>
              <input
                type="text"
                id="cardName"
                placeholder="Enter card name"
                required
              />
            </div><br />
            <div className="inputBox">
              <label htmlFor="cardNum">Credit Card Number :</label>
              <input
                type="text"
                id="cardNum"
                placeholder="1111-2222-3333-4444"
                maxLength="19"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
              />
            </div><br />
            <div className="flex">
              <div className="inputBox">
                <label htmlFor="">Exp Month :</label>
                <select name="" id="">
                  <option value="">Choose month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March ">March </option>
                  <option value="April ">April </option>
                  <option value="May ">May  </option>
                  <option value="June ">June </option>
                  <option value="July ">July </option>
                  <option value="August ">August </option>
                  <option value="September ">September </option>
                  <option value="October ">October </option>
                  <option value="November  ">November  </option>
                  <option value="December ">December </option>
                </select>
              </div><br />
              <div className="inputBox">
                <label htmlFor="">Exp Year :</label>
                <select name="" id="">
                  <option value="">Choose Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div><br />
              <div className="inputBox">
                <label htmlFor="cvv">CVV :</label>
                <input type="number" id="cvv" placeholder="1234" required />
              </div><br />
            </div>
          </div>
        </div>
        {isPaymentSuccessful ? (
          <div className='sub'>
          <p className="success-message">Payment successful!</p>
          <button type="button" onClick={() => window.location.href = "/home"}>
            Home page
          </button>
        </div>
        ) : (
          <input type="submit" value="Proceed to Checkout" className="submit_btn" />
        )}
      </form>
    </div>
    </div>
  );
}

export default Payment;
