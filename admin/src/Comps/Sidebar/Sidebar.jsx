import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addproduct_icon from '../../Assets/addproduct-icon.png'
import listproduct_icon from '../../Assets/listproduct-icon.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={addproduct_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={listproduct_icon} alt="" />
                <p>Product List</p>
            </div>
        </Link>

    </div>
  )
}

export default Sidebar