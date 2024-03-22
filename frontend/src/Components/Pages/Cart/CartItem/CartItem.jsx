import React from 'react'
import { Link } from 'react-router-dom'
import "./CartItem.css";
function CartItem(props) {
    return (
        <div>
            <hr />
            <div className='row text-center'>
                <div className='col-2'>
                    <Link to={`/product/${props.id}`}> <img className="w-50 rounded-2" src={props.image} alt="" /></Link>
                </div>
                <div className='col-3 my-auto text-start'>
                    <p className='my-auto'>{props.name}</p>
                </div>
                <div className='col-2 my-auto'>
                    <p className='my-auto'>${props.new_price}</p>
                </div>
                <div className='col-2 my-auto'>
                    <div className='my-auto d-flex justify-content-around'><button className='btn btn-outline-dark' onClick={() => { props.addItem(props.id) }}>+</button><p className='my-auto'>{props.quantity}</p><button className='btn btn-outline-dark' onClick={() => { props.removeItem(props.id) }}>-</button></div>
                </div>
                <div className='col-2 my-auto'>
                    <p className='my-auto'>${props.quantity * props.new_price}</p>
                </div>
                <div className='col-1 my-auto'>
                    <button className='btn btn-outline-dark' onClick={() => { props.removeAll(props.id) }}>X</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem