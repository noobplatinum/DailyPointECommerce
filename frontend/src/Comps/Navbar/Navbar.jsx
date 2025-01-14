import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Images/dplogo.png'
import cart_icon from '../Images/cartlogo.png'
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'
import { useRef } from 'react'
import nav_dropdown from '../Images/nav_dropdown.png'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
    <div className='navbar'>
        <div className="nav-logo">
        <img src={logo} alt="logo" className="nav-logo-img"/>      
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("tech")}}><Link style={{ textDecoration: 'none'}} to='/tech'>Tech</Link>{menu==="tech"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("attire")}}><Link style={{ textDecoration: 'none'}} to='/attire'>Attire</Link>{menu==="attire"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("food")}}><Link style={{ textDecoration: 'none'}} to='/food'>Food</Link>{menu==="food"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/');}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={cart_icon} alt="cart" className="nav-cart-icon"/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar