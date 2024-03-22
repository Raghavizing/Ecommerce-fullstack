import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import AddProduct from '../AddProduct/AddProduct'
import ProductList from '../ProductList/ProductList'
import { Route, Routes } from 'react-router-dom'
import "./AdminPage.css"
function AdminPage() {
    return (
        <div className='row m-0 admin-page bg-light'>
            <div className='col-lg-3 col-md-4 col-12'>
                <Sidebar />
            </div>
            <div className='col-lg-9 col-md-8 col-12'>
                <Routes>
                    <Route path='/addProduct' element={<AddProduct />}></Route>
                    <Route path='/productList' element={<ProductList />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default AdminPage