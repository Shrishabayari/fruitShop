import axios from 'axios';
import React, {useState} from 'react'
import head from '../head.png'
import './Contactpage.css'
const Contactpage=() => {
  const [formData, setFormData]=useState({
    name:'',
    email:'',
    message:''
  });
  const {name, email, message}=formData;
  const handleChange =(e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit =async (e)=> {
    e.preventDefault();
    try{
      await axios.post('http://localhost:3000/api/v1/contact',formData);
      alert('mssage sent sucessfully');
      setFormData({
        name:'',
        email:'',
        message:''
      });
      }catch(error){
        console.error('error submiting message:',error);
        alert('error submiting message');
      }
  };

  return (
    <>
      <img src={head} alt="im" />
      <div className='contact-container'>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>CONTACT</h2>
            <label >Name :</label>
            <input type="text" name="name" value={name} onChange={handleChange} required/><br/><br/>
            <label>Email :</label>
            <input type="email" name="email" value={email} onChange={handleChange} required/><br/><br/>

            <label>Message :</label>
            <textarea name="message" value={message} onChange={handleChange} required/><br/><br/><br/><br/>
          </div>

          <button  type='submit'>SUBMIT</button>
        </form>
      </div>
    </>
  );
};
export default Contactpage