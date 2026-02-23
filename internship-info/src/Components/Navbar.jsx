import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logo.svg'
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/' className='logo-link'>
          <img src={logo} alt="Infonova logo" className='site-logo' />
        </Link>
      </div>

      <div className='nav-links'>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className='nav-actions'>
        <Link to="/signin" className='sign-in-btn'>sign in</Link>
        <Link to="/enroll" className='Enroll-btn'>Enroll Now</Link>
      </div>
    </nav>
  )
}

export default Navbar
