//type rafc  or rfc
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import head from '../head.png'
import './Registerpage.css';
const  Registerpage=() =>{
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const navigate=useNavigate()
  const RegisterUser=async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:3000/api/v1/user/',{
      email:email,
      password:password,
      name:name
    })
    console.log(response)
    navigate('/login')
  }
  
  return (
    <div>
      <img src={head} alt="im" />
      <div className='register-container'>
        <form action="">
          <h2>Sign-Up</h2><br/>
          <label >Name :</label>
          <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/><br/><br/>

          <label>Email :</label>
          <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/><br/><br/>

          <label>Password :</label>
          <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/><br/><br/>

          <button onClick={RegisterUser} type='submit'>REGISTER</button><br/><br/><br/>

          <div className='login-link'>
            Already having an account?<Link to="/login"><div className='link'>Login</div></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registerpage;