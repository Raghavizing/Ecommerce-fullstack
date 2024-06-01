import React from 'react';
import "./Banner.css";
import model from "../../../Assets/hero_image.png";
import arrow from "../../../Assets/arrow.png";
import hand from "../../../Assets/hand_icon.png";

function Banner() {
    return (
        <div className="row banner align-items-center">
            <div className="banner-text-section col-lg-8 col-md-7 col-sm-12 text-center text-md-start">
                <div className="banner-text1 my-2">new arrivals only</div>
                <div className="banner-text2 my-2">new <span><img src={hand} alt="" className="handEmoji" /></span> collections for everyone</div>
                <button className="btn btn-lg btn-dark rounded-5 my-5"><div className='mx-2'>Latest Collection</div> <img src={arrow} alt="" /></button>
            </div>

            <div className="banner-image-section col-lg-4 col-md-5 col-sm-12 text-center">
                <img className="banner-image img-fluid" src={model} alt="" />
            </div>
        </div>
    );
}

export default Banner;
