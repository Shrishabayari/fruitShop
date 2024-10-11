import React from 'react'
import './Aboutpage.css'
import head from '../head.png'
export default function Aboutpage() {
  return (
    <div className='about-page'>
      <img src={head} alt="im" />
      <div className='about'><br />
        <h1>ABOUT FRUITS STORE</h1>

          <h3>Namma Fruits is an Exclusive Fruit Store Online!!</h3><br />

          <h4>We Sell Seasonal, Authentic & Exotic Fruits from Local to Imported.</h4><br />
          

          <p>Our Goal is to Deliver High Quality and Rich Flavor Fruits Online. 
          Every Fruit has its own Taste and Wonderful Nutritional Value and We Promise to Deliver the Chemical-Free, On-time rightly harvested and Handpicked Fruits from Farm to your Home.</p>
      </div>
    </div>
  )
}
