import React from 'react'
import cross from "../../../../assets/cross_icon.png"
function ProductListing(props) {
    return (
        <div className='my-2'>
            <hr />
        <div className='row m-0 text-center'>
            <div className='col-2 my-auto'><img src={props.image} alt="" className='w-75' /></div>
            <div className='col-4 my-auto'>{props.name}</div>
            <div className='col-1 my-auto'>$ {props.old_price}</div>
            <div className='col-1 my-auto'>$ {props.new_price}</div>
            <div className='col-2 my-auto'>{props.category}</div>
            <div className='col-2 my-auto'><button className='btn btn-light' onClick={()=>props.removeProduct(props.id)}><img src={cross} alt="" /></button></div>
        </div>
        </div>
    )
}

export default ProductListing