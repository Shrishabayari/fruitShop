import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to={'/home'}>Home</Link>
                </li>
            </ul>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to={'/about'}>About</Link>
                </li>
            </ul>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to={'/favorits'}>Favorites</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
