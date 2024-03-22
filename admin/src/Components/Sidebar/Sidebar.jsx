import React from 'react'
import cart from "../../assets/Product_Cart.svg"
import list from "../../assets/Product_list_icon.svg"
import "./Sidebar.css"
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div className='sidebar d-lg-block d-md-block d-flex justify-content-center bg-white py-5 px-3 m-0'>
            <Link className='sidebar-link' to="/addProduct">
                <div className='d-flex justify-content-center px-2 py-3 bg-light mt-lg-5 mt-md-5 mx-lg-0 mx-md-0 mx-2'>
                    <img src={cart} alt="" />
                    <p className='my-auto mx-2'>Add Product</p>
                </div>
            </Link>
            <Link className='sidebar-link' to="/productList">
                <div className='d-flex justify-content-center px-2 py-3 bg-light mt-lg-5 mt-md-5 mx-lg-0 mx-md-0 mx-2'>
                    <img src={list} alt="" />
                    <p className='my-auto mx-2'>Product List</p>
                </div >
            </Link>
        </div >
    )
}

export default Sidebar