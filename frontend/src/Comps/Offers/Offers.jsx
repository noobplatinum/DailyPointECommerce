import React from 'react'
import './Offers.css'
import exclusive_img from '../Images/offers-image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Deals</h1>
            <h1>Offers For You!</h1>
            <p>ONLY THE BEST SELLER PRODUCTS</p>
            <button>Check It Out</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers