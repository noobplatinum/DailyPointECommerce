import React from 'react'
import './Footer.css'
import footer_logo from '../Images/dplogo.png'
import ig_icon from '../Images/ig-icon.png'
import li_icon from '../Images/li-icon.png'
import wa_icon from '../Images/wa-icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
            <li>Profile</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About Us</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={ig_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={wa_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={li_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>© 2025 DailyPoint. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer