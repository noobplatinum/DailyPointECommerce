import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number);
}

export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          Rp{formatRupiah(props.new_price)}
        </div>
        <div className="item-price-old">
          Rp{formatRupiah(props.old_price)}
        </div>
      </div>
    </div>
  )
}

export default Item