import React, { useState, useEffect } from 'react'
import ProductListing from './ProductListing/ProductListing';
import "./ProductList.css"
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, [])
  async function getProducts() {
    await fetch('http://localhost:4000/allProducts', {
      method: "GET"
    }).then((res) => res.json()).then((data) => { setProducts(data) });
  }
  async function removeProduct(id) {
    await fetch('http://localhost:4000/removeProduct', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'id': id })
    }).then((res) => res.json).then(async (data) => {
      await getProducts();
    })
  }
  return (
    <div className='product-list-page'>
      <h1 className='text-center'>All Products List</h1>
      <div className='row m-0 text-center product-list-heading mt-5'>
        <div className='col-2 my-auto'>Products</div>
        <div className='col-4 my-auto'>Title</div>
        <div className='col-1 my-auto'>Old Price</div>
        <div className='col-1 my-auto'>New Price</div>
        <div className='col-2 my-auto'>Category</div>
        <div className='col-2 my-auto'>Remove</div>
      </div>
      {products.map((item, index) => <ProductListing key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} category={item.category} removeProduct={removeProduct} />)}
    </div>

  )
}

export default ProductList