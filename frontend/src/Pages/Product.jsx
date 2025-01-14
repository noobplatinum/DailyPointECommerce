import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Comps/Breadcrumbs/Breadcrumb';
import Display from '../Comps/Display/Display';
import DescBox from '../Comps/DescBox/DescBox';
import RelatedProducts from '../Comps/RelatedProducts/RelatedProducts';

const Product = () => 
{
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product}/>
      <Display product={product}/>
      <DescBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product