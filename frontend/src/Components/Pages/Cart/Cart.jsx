import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import CartItem from './CartItem/CartItem';
import "./Cart.css"

function Cart() {
  const { all_products, cart, addToCart, removeFromCart, getTotal, getCartItems, removeAllFromCart } = useContext(ShopContext);
  const cartItems = all_products.filter((item) => cart[item.id] > 0);
  function removeItem(id) {
    removeFromCart(id);
  }
  function addItem(id) {
    addToCart(id);
  }
  function removeAll(id) {
    removeAllFromCart(id);
  }
  return (
    <div className='cart-page'>
      <div className='text-center' hidden={getCartItems() !== 0}>
        <h1>Cart Empty.</h1>
      </div>
      <div hidden={getCartItems() === 0}>
        <div className='row text-center m-0'>
          <div className='col-2 my-auto'><p className='my-auto cart-heading'>Product</p></div>
          <div className='col-3 my-auto'><p className='my-auto cart-heading'>Title</p></div>
          <div className='col-2 my-auto'><p className='my-auto cart-heading'>Price</p></div>
          <div className='col-2 my-auto'><p className='my-auto cart-heading'>Quantity</p></div>
          <div className='col-2 my-auto'><p className='my-auto cart-heading'>Total</p></div>
          <div className='col-1 my-auto'><p className='my-auto cart-heading'>Remove</p></div>
        </div>
        <div className='cart-items my-4'>
        {cartItems.map((item, index) => <CartItem key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} quantity={cart[item.id]} removeItem={removeItem} addItem={addItem} removeAll={removeAll} />)}
        </div>
        <div className='cart-bottom row mx-0 mt-5'>
          <div className='col-6'>
            <h1 className='my-3'>Cart Totals</h1>
            <div className='my-5'>
            <div className='d-flex justify-content-between'><p className='my-auto'>Subtotal</p> <p className='my-auto'>${getTotal()}</p></div>
            <hr />
            <div className='d-flex justify-content-between'><p className='my-auto'>Shipping</p> <p className='my-auto'>Free</p></div>
            <hr />
            <div className='d-flex justify-content-between'><h5 className='my-auto'>Total</h5> <h5 className='my-auto'>${getTotal()}</h5></div>
          </div>
          <button className='btn btn-danger py-2 rounded-0'>Proceed To Checkout</button>
          </div>
          <div className='col-6 text-center my-auto'>
            <p>If you have a promo code, Enter it here</p>
            <form className='form-group d-flex justify-content-center'>
              <input type="text" name="promo" id="promo" className='form-control w-50 rounded-0' placeholder='Promo Code' />
              <button className='btn btn-dark w-25 rounded-0'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart