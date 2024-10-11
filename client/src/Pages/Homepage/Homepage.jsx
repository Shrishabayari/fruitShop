import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Homepage.css';
import head from './/head.png'
import apple from './/apple.jpeg'
import orange from './/orange.jpeg'
import grape from './/grape.jpeg'
import banana from './/banana.jpeg'
import blue from './/blue.jpeg'
import kivi from './/kivi.jpeg'
import Almonds  from './/Almonds.jpeg'
import kaju from './/kaju.jpeg'
import Walnuts from './/Walnuts.jpeg'
import Pistachios from './/Pistachios.jpeg'
import Dates from './/Dates.jpeg'
import Raisins from './/Raisins.jpeg'
import hi from './/hi.jpeg'

const Homepage = () => {

  return (
      
    <div>
      <div className='head'>
        <img src={head} alt="im" />
        <div className='navbar'><Navbar/></div>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Enter your search product" />
          <button type="button" className="search-button">Search</button>
        </div>
        <div className='log'><a href="/login">Log-Out</a></div>
      </div>
      <div className='body'>
        <div className="header"><h1>Explore dream Items</h1></div>
        <img className='imgs' src={hi} alt="i" />
        <div className='vari'>
        <p className='session-heading'>Fruits</p>
          <section id='section' className='section1'>
            <div className='title'>
              <h4>Apple</h4>
                <img src={apple} alt="i" />
              <p>Price: 150/kg</p>
              <button onClick={() => handleAddToCart({ name: 'Apple', price: 150 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Orange</h4>
              <img src={orange} alt="image" />
              <p>Price: 120/kg</p>
              <button onClick={() => handleAddToCart({ name: 'Orange', price: 120 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Grapes</h4>
              <img src={grape} alt="image" />
              <p>Price: 100/kg</p>
              <button onClick={() => handleAddToCart({ name: 'Grapes', price: 100 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Banana</h4>
              <img src={banana} alt="image" />
              <p>Price: 120/kg</p>
              <button onClick={() => handleAddToCart({ name: 'Banana', price: 120 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Blueberry</h4>
              <img src={blue} alt="image" />
              <p>Price: 140/kg</p>
              <button onClick={() => handleAddToCart({ name: 'Blueberry', price: 140 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Kivi</h4>
              <img src={kivi} alt="image" />
              <p>Price: 135/kg</p>
              <button onClick={() => handleAddToCart({ name: 'Kivi', price: 135 })}>Add to wishlist</button>
            </div>
          </section><hr />
        </div>
        <div className='vari'>
          <p className='session-heading'>Dry-fruits</p>
          <section id='section' className='section1'>
            <div className='title'>
              <h4>Almonds</h4>
                <img src={Almonds} alt="i" />
              <p>Price: 190/250g</p>
              <button onClick={() => handleAddToCart({ name: 'Almonds', price: 190 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Cashews </h4>
              <img src={kaju} alt="image" />
              <p>Price: 220/250g</p>
              <button onClick={() => handleAddToCart({ name: 'Cashews', price: 220 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Walnuts </h4>
                <img src={Walnuts } alt="i" />
              <p>Price: 350/250g</p>
              <button onClick={() => handleAddToCart({ name: 'Walnuts', price: 350 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Pistachios  </h4>
              <img src={Pistachios } alt="image" />
              <p>Price: 310/250g</p>
              <button onClick={() => handleAddToCart({ name: 'Pistachios', price: 310 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Dates </h4>
                <img src={Dates } alt="i" />
              <p>Price: 130/250g</p>
              <button onClick={() => handleAddToCart({ name: 'Dates', price: 130 })}>Add to wishlist</button>
            </div>
            <div className='title'>
              <h4>Raisins   </h4>
              <img src={Raisins  } alt="image" />
              <p>Price: 100/250g</p>
              <button onClick={() => handleAddToCart({ name: 'Raisins', price: 100 })}>Add to wishlist</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Homepage
