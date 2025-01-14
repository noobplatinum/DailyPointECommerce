import React from 'react'
import './ListProduct.css'
import { useState, useEffect } from 'react'
import cross_icon from '../../Assets/cross-icon.png'

const ListProduct = () => {

  const [allproducts, setProducts] = useState([]);
  
  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res) => res.json())
    .then((data) => { setProducts(data) }) 
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const remove_product = async(id)=> {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id})
    })
    await fetchInfo();
  }

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div className='listproduct'>
      <h1>List of Products</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return ( <>
            <div className="listproduct-format-main listproduct-format" key={index}>
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>{formatRupiah(product.old_price)}</p>
              <p>{formatRupiah(product.new_price)}</p>
              <p>{capitalizeFirstLetter(product.category)}</p>
              <img onClick={() => {remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
            </div>
            <hr />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct