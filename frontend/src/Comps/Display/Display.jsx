import React, { useContext } from 'react'
import './Display.css'
import star_icon from '../Images/star_icon.png'
import star_dull_icon from '../Images/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const Display = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        }).format(number);
    }

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                {formatRupiah(product.old_price)}
                </div>
                <div className="productdisplay-right-price-new">
                {formatRupiah(product.new_price)}
                </div>
                <div className="productdisplay-right-description">
                    The next generation of console gaming. The PlayStation 5 offers a new level of gaming experience that is unlike any other. With a powerful new processor and graphics card, the PS5 is capable of running games at 4K resolution and 60 frames per second. 
                </div>
                <div className="productdisplay-right-variant">
                    <h1>Select Variant</h1>
                    <br />
                    <div className="productdisplay-right-size">
                        <div>Silver</div>
                        <div>Black</div>
                        <div>White</div>
                        <div>Blue</div>
                        <div>Red</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category">
                    <span>Category : </span>Tech, Gaming, Console <br />
                    <span>Tags : </span>Modern, Latest
                </p>
            </div>
        </div>
    </div>
  )
  
}

export default Display