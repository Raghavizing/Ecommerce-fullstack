import React from 'react'
import "./Banner.css"
import model from "../../../Assets/hero_image.png"
import arrow from "../../../Assets/arrow.png"
import hand from "../../../Assets/hand_icon.png"

function Banner() {
    return (
        <div className='row banner'>
            <div className='banner-text-section col-8'>
                <div className='banner-text1 my-2'>new arrivals only</div>
                <div className='banner-text2 my-2'>new <span><img src={hand} alt="" className='handEmoji' /></span> collections for everyone</div>
                <button className='btn btn-lg btn-dark rounded-5 my-5'>Latest Collection <img src={arrow} alt="" /></button>
            </div>

            <div className='banner-image-section col-4'>
                <img className="banner-image w-100" src={model} alt="" />
            </div>
        </div>
    )
}

export default Banner