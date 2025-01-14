import React from 'react'
import './Navbar.css'
import navlogo from '../../../src/assets/admin-dropdown.png'
import navProfile from '../../../src/assets/admin-panel.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navProfile} className='nav-profile' alt="" />
        <img src={navlogo} alt="" className="nav-logo" />
    </div>
  )
}

export default Navbar