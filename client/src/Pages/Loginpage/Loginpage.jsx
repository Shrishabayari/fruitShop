import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import head from '../head.png'
import './Loginpage.css';
const Loginpage=() =>{
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const navigate=useNavigate()

  const LoginUser=async (e) => {
    e.preventDefault()
    try{
      const response=await axios.post('http://localhost:3000/api/v1/user/login',{
        email:email,
        password:password
      })
      console.log(response.data.data)
      localStorage.setItem('userLogged', JSON.stringify(response.data.data))
      alert('Login Sucessful')
      navigate('/home')
    } catch(error){
      alert('invalid email or password. please try again.')
    }
  }

  return (
    <div>
      <img src={head} alt="im" />
      <div className='login-container'>
        <form action="">
          <h2>LOGIN</h2>
          <label>Email :</label>
          <input type="email" placeholder='Enter yoour email' onChange={(e) => setEmail(e.target.value)}/><br/><br/>

          <label>Password :</label>
          <input type="password" placeholder='Enter yoour password' onChange={(e) => setPassword(e.target.value)}/><br/><br/><br/><br/>

          <button onClick={LoginUser} type='submit'>LOGIN</button><br/><br/><br/><br/>

          <div className='login-link'>
            Already having an account?<Link to="/"> <div className='link'>Register</div></Link>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Loginpage