import React from 'react';
import "./Offers.css";
import exclusive from "../../../Assets/exclusive_image.png";

function Offers() {
    return (
        <div className="offers-banner row mx-auto align-items-center">
            <div className="offers-text-section col-lg-8 col-md-7 col-sm-12 text-center text-md-start my-3 my-md-0">
                <h1 className="text-line1">Exclusive</h1>
                <h1 className="text-line2">Offers for you</h1>
                <p className="text-line3">only on best seller products</p>
                <button className="btn w-50 rounded-5 btn-dark py-3">Check now</button>
            </div>
            <div className="offers-image-section col-lg-4 col-md-5 col-sm-12 text-center my-3 my-md-0">
                <img className="offers-image img-fluid" src={exclusive} alt="Exclusive Offers" />
            </div>
        </div>
    );
}

export default Offers;
