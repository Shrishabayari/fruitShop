import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Contactpage from './Pages/Contactpage/Contactpage'
import Registerpage from './Pages/Registerpage/Registerpage'
import Loginpage from './Pages/Loginpage/Loginpage'
import Aboutpage from './Pages/Aboutpage/Aboutpage'
import Addtocartpage from './Pages/Cart/Addtocart'
import Payment from './Pages/Payment/Payment'
const App = () => {
  return (
    <div>
        
      <Routes>
      <Route path='/' element={<Registerpage/>} />
      <Route path='/login' element={<Loginpage/>} />
      <Route path='/home' element={<Homepage/>} />
      <Route path='/about' element={<Aboutpage/>} />
      <Route path='/contact' element={<Contactpage/>} />
      <Route path='/favorits' element={<Addtocartpage/>} />
      <Route path='/payment' element={<Payment/>} />

      </Routes>
    </div>
  )
}

export default App
