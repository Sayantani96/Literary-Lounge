import React from 'react'
import './Footer.css'
import Logo from './Logo'
const Footer = () => {
  return (
    <div className="footer-section">
      <div>
      <Logo/>
        <p>Your ultimate partner to find every type of books</p>
        <div className="icon-container">
          <div>Github</div>
          <div>Twitter</div>
          <div>Linkedin</div>
        </div>
      </div>
       <div>
        <h2>Quick Links</h2>
        <ul>
          <li>Login/Signup</li>
          <li>Products</li>
          <li>Wishlist</li>
        </ul>
        </div> 
        <div>
          <h2>Contact Us</h2>
          08069490169
        </div>
    </div>
  )
}

export default Footer