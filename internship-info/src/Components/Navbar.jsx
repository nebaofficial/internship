import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'><img src="logo.png" alt="Logo" /></Link>
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
