import React from 'react'
import "./Footer.css"
import logo from "../Assets/logo_big.png"
import instagram from "../Assets/instagram_icon.png"
import pinterest from "../Assets/pintester_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"
function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className='footer text-center mb-5'>
            <div className='footer-logo d-flex justify-content-center my-4'>
                <img src={logo} alt="" />
                <h1 className='my-auto'>Shopper</h1>
            </div>
            <ul className='footer-links d-flex justify-content-center my-4'>
                <li className='mx-3'>Company</li>
                <li className='mx-3'>Products</li>
                <li className='mx-3'>Offices</li>
                <li className='mx-3'>About</li>
                <li className='mx-3'>Contact</li>
            </ul>
            <div className='social-logo d-flex justify-content-center my-4'>
                <div className='social-container mx-2'>
                    <img src={instagram} alt="" />
                </div>
                <div className='social-container mx-2'>
                    <img src={pinterest} alt="" />
                </div>
                <div className='social-container mx-2'>
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <hr className='footer-line mx-auto my-4' />
                <p>Copyright @ {year} - All Rights Reserved</p>
        </div>
    )
}

export default Footer