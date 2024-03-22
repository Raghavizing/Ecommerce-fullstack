import React from 'react'
import "./Navbar.css"
import logo from "../../assets/nav-logo.svg"
import user from "../../assets/nav-profile.svg"
import arrow from "../../assets/arrow_icon.svg"
function Navbar() {
    return (
        <div><nav className="navbar navbar-light bg-white px-5 shadow">
            <div className="container-fluid">
                <a className="navbar-brand d-flex" href="/">
                    <img src={logo} alt="" className="w-100" />
                </a>
                <div>
                    <img src={user} alt="" />
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar