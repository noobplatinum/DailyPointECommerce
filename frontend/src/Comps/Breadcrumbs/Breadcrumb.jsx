import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Images/crumb-arrow.png'

export const Breadcrumb = (props) => {
    const {product} = props;
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {capitalize(product.category)} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumb