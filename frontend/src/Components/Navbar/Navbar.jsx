import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
function Navbar() {
    const [Menu, SetMenu] = useState("shop");
    const {getCartItems} = useContext(ShopContext);
    function handleChange(name,event) {
        SetMenu(name);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
                <div className='navbar-brand'>
                    <Link to='/' className = "navlogo" onClick={() => { handleChange('shop') }}>
                        <div className='d-flex'>
                            <img src={logo} alt="" />
                            <p className='my-auto mx-2 logoText'>Shopping</p>
                        </div>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-8" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item mx-4">
                            <Link className={`navlink shop ${(Menu === 'shop') ? 'active' : ''}`} onClick={() => { handleChange('shop') }} to="/">Shop</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className={`navlink men ${(Menu === 'men') ? 'active' : ''}`} men to="/mens" onClick={() => { handleChange('men') }}>Men</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className={`navlink women ${(Menu === 'women') ? 'active' : ''}`} onClick={() => { handleChange('women') }} to="/womens">Women</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className={`navlink kids ${(Menu === 'kids') ? 'active' : ''}`} onClick={() => { handleChange('kids') }} to="/kids">Kids</Link>
                        </li>

                    </ul>
                    <div className="d-flex justify-content-center col-3">
                        <Link to="/login" onClick={() => { handleChange('login') }}><button className="btn btn-outline-dark mx-2 px-4 rounded-5">Login</button></Link>
                        <div className='mx-2'>
                            <div className=" position-relative">
                                <Link to="/cart" onClick={() => { handleChange('cart') }}><img  src={cart} alt="" className='cart-img mx-2' /></Link>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {getCartItems()}
                                    <span className="visually-hidden">Cart items</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar