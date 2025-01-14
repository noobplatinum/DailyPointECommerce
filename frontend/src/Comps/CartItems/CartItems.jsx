import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Images/trash-icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext)
    
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        }).format(number);
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>{formatRupiah(e.new_price)}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>{formatRupiah(e.new_price * cartItems[e.id])}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null; 
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>{formatRupiah(getTotalCartAmount())}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>{formatRupiah(getTotalCartAmount())}</h3>
                        </div>
                    </div>
                    <button>Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Have a promo code? Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems