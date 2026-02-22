import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
            <h2 >INFONVA Academy</h2>
<p className='footer-discription'>
    Empowering learners worldwide with cutting-edge technology courses. Start your journey to success with expert-led training.
</p>
        </div>
        <div className='footer-section'>
            <h3 className='footer-title'>Quick  Links

            </h3>
            <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/instructors">Instructors</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
        <div className='footer-section'>
            <h3 className='footer-title'>Support us</h3>
            <ul>
                <li><Link to="#">Help Center</Link></li>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">FAQ</Link></li>
            </ul>  
    </div>
        <div className='footer-bottom'>
          <p>&copy; 2026 INFONVA Technologies. All rights reserved.</p>

        </div>
      </div>
    </div>
  )
}

export default Footer
