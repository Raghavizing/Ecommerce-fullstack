import React from 'react';
import "./Newsletter.css";

function Newsletter() {
    return (
        <div className="newsletter mx-auto text-center py-5">
            <h1 className="newsletter-text1 my-2">Get exclusive offers on your email</h1>
            <p className="newsletter-text2 my-2">Subscribe to our newsletter and stay updated</p>
            <form className="newsletter-form mx-auto d-flex flex-column flex-md-row justify-content-center">
                <input className="form-control rounded-5 w-100 w-md-75 mx-2 my-2 my-md-0" type="email" name="email" placeholder="Your Email Id" required />
                <button className="btn rounded-5 btn-dark w-100 w-md-25 py-2 mx-2 my-2 my-md-0">Subscribe</button>
            </form>
        </div>
    );
}

export default Newsletter;
