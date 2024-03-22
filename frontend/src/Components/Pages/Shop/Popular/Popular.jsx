import React,{useContext} from 'react'
import Item from '../../../Item/Item'
import "./Popular.css"
import { ShopContext } from '../../../Context/ShopContext';
function Popular() {
    const{popular_products} = useContext(ShopContext);
    return (
        <div className='popular'>
            <h1 className='popular-heading text-center'>popular in women</h1>
            <hr className='popular-heading-line bg-black mx-auto'/>
            <div className='popular-item row mx-auto'>
                {popular_products.map((item,index) => { return (<Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>) })}
            </div>

        </div>
    )
}

export default Popular