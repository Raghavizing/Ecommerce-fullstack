import React from 'react'
import "./Offers.css";
import exclusive from "../../../Assets/exclusive_image.png"
function Offers() {
    return (
        <div className='offers-banner row mx-auto'>
            <div className='offers-text-section col-8 my-auto'>
                <h1 className='text-line1'>Exclusive</h1>
                <h1 className='text-line2'>Offers for you</h1>
                <p className='text-line3'>only on best seller products</p>
                <button className='btn w-50 rounded-5 btn-dark py-3'>Check now</button>
                </div>
            <div className='offers-image-section col-4 my-auto'>
                <img className='offers-image' src={exclusive} alt="" />
            </div>
        </div>
    )
}

export default Offers