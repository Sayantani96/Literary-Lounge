import {useContext, useState} from 'react'
import './Header.css';
import { NavLink,useNavigate } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';
import Hamburger from './Hamburger';
import Logo from '../Logo';
import { AuthContext } from '../../utilities/AuthContext';
import FormInput from '../FormInput/FormInput'
import { FilterContext } from '../../utilities/FilterContext';

const Header = () => {
    const [hamburgerOpen,setHamburgerOpen]=useState(false);

    const {signOut,isLoggedIn}=useContext(AuthContext);

    const {filterProductsBySearch}=useContext(FilterContext);

    const authHandler=()=>{
        signOut();
    }
    const navigate=useNavigate();

    const handleSearchText=e=>{
        const delaySearch=setTimeout(()=>{
            filterProductsBySearch(
                e.target.value
                )
        },1500);

        return ()=> clearTimeout(delaySearch)
    }

  return (
    <div className="header">
          <NavLink to="/" className="logo-container">
              <Logo/>
          </NavLink>
        <div className="search-container">
          <FormInput
      formPlaceholder="Search Products"
      formChange={handleSearchText}
      formKeyPress={(e)=>e.which===13 && navigate('/products')}
      />
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