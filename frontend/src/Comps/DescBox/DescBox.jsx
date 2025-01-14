import React from 'react'
import './DescBox.css'

export const DescBox = () => {
  return (
    <div className='descbox'>
        <div className="descbox-navigator">
            <div className="descbox-navbox">
                Description
            </div>
            <div className="descbox-navbox fade">
                Reviews (122)
            </div>
        </div>
        <div className="descbox-desc">
            <p>
                An e-commerce website is a platform that allows you to sell and buy products on the internet. It is a website that facilitates the transaction of goods and services between the seller and the buyer. The website acts as a virtual store where customers can browse through the products, add them to the cart, and make a purchase. The e-commerce website provides a platform for sellers to showcase their products and reach a wider audience. It also provides a convenient and secure way for customers to shop online.
            </p>
            <p>
                E-commerce websites have become increasingly popular in recent years due to the convenience and ease of shopping online. They offer a wide range of products from various categories such as electronics, fashion, home appliances, and more. Customers can shop from the comfort of their homes and have the products delivered to their doorstep. E-commerce websites also provide various payment options such as credit card, debit card, net banking, and cash on delivery.
            </p>
        </div>
    </div>
  )
}

export default DescBox