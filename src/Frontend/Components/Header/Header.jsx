import {useContext, useState} from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';
import Hamburger from './Hamburger';
import Logo from '../Logo';
import { AuthContext } from '../../utilities/AuthContext';

const Header = () => {
    const [hamburgerOpen,setHamburgerOpen]=useState(false);

    const {signOut,isLoggedIn}=useContext(AuthContext);

    const authHandler=()=>{
        signOut();
    }

    console.log(hamburgerOpen);

  return (
    <div className="header">
          <div className="logo-container">
              <Logo/>
          </div>
          <div className={hamburgerOpen? "menu-container expanded": "menu-container"}>
          <ul>
              <li>
                  <NavLink to="/products" className="nav-item">Products</NavLink>
              </li>
              <li>
                  <NavLink to="/wishlist" className="nav-item">Wishlist</NavLink>
              </li>
          </ul>
          <ul className='corner-menu'>
              <li>
                  <NavLink to="/cart" className="nav-item">
                      <HiShoppingCart size={45} color="#003366" />
                  </NavLink>
              </li>
              <li>
                <NavLink to="/auth" className="nav-item">
                  <CgProfile size={45} color="#003366"/>
                </NavLink>
              </li>
              {
                isLoggedIn && <NavLink to="/" className="nav-item" onClick={authHandler}>
                    Logout
                </NavLink>
              }
          </ul>
      </div>
      <div
          className="hamburger-view"
          onClick={()=>setHamburgerOpen(!hamburgerOpen)}
      >
              <Hamburger />
          </div>
    </div>
  )
}

export default Header