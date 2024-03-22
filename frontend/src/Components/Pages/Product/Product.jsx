import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import ProductDisplay from './ProductDisplay/ProductDisplay';
import "./Product.css";
import RelatedProducts from './RelatedProducts/RelatedProducts';
function Product() {
  const { productID } = useParams();
  const {all_products ,cart} = useContext(ShopContext);
  let product = all_products.find((item)=>(item.id)===Number(productID))
  return (
    <div className='products-page'>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} quantity = {cart[product.id]}/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product