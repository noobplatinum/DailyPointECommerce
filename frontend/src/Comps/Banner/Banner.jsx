import React from 'react'
import './Banner.css'
import tech_banner from '../Images/tech_banner.png'
import attire_banner from '../Images/attire_banner.png'
import food_banner from '../Images/food_banner.png'

const bannerImages = {
  tech: tech_banner,
  attire: attire_banner,
  food: food_banner
}

const Banner = ({category}) => {
  return (
    <div className={`banner ${category}`}>
      <div className="banner-text">
        <h1 className="banner-title">{category.toUpperCase()}</h1>
        <p className="banner-subtitle">find the latest {category} products</p>
        <p className="banner-subtitle">up to 50% off</p>
      </div>
      <div className="banner-right">
        <img src={bannerImages[category]} alt={`${category} banner`} />
        <button className="banner-button">Explore Now</button>
      </div>
    </div>
  )
}

export default Banner