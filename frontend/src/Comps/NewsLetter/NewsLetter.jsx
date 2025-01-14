import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Exclusive Offers Right to Your Email</h1>
        <p>Subscribe to our newsletter and stay updated!</p>
        <div>
            <input type="email" placeholder='your email here'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter