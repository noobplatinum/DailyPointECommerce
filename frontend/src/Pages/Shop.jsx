import React from 'react'
import Hero from '../Comps/Hero/Hero'
import Popular from '../Comps/Popular/Popular'
import Offers from '../Comps/Offers/Offers'
import NewCollections from '../Comps/NewCollections/NewCollections'
import NewsLetter from '../Comps/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop