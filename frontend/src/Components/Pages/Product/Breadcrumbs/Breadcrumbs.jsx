import React from 'react'
import arrow from '../../../Assets/breadcrum_arrow.png'
import "./Breadcrumbs.css"
function Breadcrumbs(props) {
    return (
        <div>
            <p className='breadcrumbs'>Home <span><img src={arrow} alt="" /></span> shop <span><img src={arrow} alt="" /></span> {props.product.category} <span><img src={arrow} alt="" /></span> {props.product.name}</p>
        </div>
    )
}

export default Breadcrumbs