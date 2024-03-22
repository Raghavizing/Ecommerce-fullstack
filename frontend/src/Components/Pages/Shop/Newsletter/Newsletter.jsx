import React from 'react'
import "./Newsletter.css"
function Newsletter() {
    return (
        <div className='newsletter mx-auto text-center py-auto'>
            <h1 className='newsletter-text1 my-2'>Get exclusive offers on your email</h1>
            <p className='newsletter-text2 my-2'>Subscribe to our newsletter and stay updated</p>
            <form className='newsletter-form mx-auto d-flex'>
                <input className="form-control rounded-5 w-75 mx-2" type="email" name="email" placeholder='Your Email Id' required />
                <button className='btn rounded-5 btn-dark w-25 py-2 mx-2'>Subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter