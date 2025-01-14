import React from 'react'
import './Hero.css'
import arrow_icon from '../Images/arrow-icon.png'
import mint_icon from '../Images/mint-icon.png'

export const hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <div className="hero-header">
          <h2><i>NEW ARRIVALS AVAILABLE</i></h2>
          <img src={mint_icon} alt="mint" className="hero-mint-icon"/>
        </div>
        <div>
            <p>offers of</p>
            <p>all kinds</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </div>
        </div>
    </div>
  )
}

export default hero