import React from 'react'
import './Footer.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import {AiFillGithub,AiOutlineTwitter,AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-section">
      <div>
      <Logo/>
        <p>Your ultimate partner to find every type of books</p>
        <div className="icon-container">
          <Link to="https://github.com/Sayantani96">
          <AiFillGithub color="#ffff" size={45}/>
          </Link>
          <Link to="https://twitter.com/SayantaniHald11">
          <AiOutlineTwitter color="#ffff" size={45}/>
          </Link>
          <Link to="https://www.linkedin.com/in/sayantanihalder96/">
          <AiOutlineLinkedin color="#ffff" size={45}/>
          </Link>
        </div>
      </div>
       <div>
        <h2>Quick Links</h2>
        <ul>
        <li>
          <Link to="/" style={{color:"#fff",textDecoration:"none"}}>
            Home
          </Link>
        </li>
          <li>
            <Link to="/login" style={{color:"#fff",textDecoration:"none"}}>
            Login/Signup
            </Link>
           
          </li>
          <li>
            <Link to="products" style={{color:"#fff",textDecoration:"none"}}>
            Products
            </Link>
          </li>
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