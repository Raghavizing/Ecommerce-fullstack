import React,{useEffect,useState} from 'react'
import Item from '../../../Item/Item'
import "./Popular.css"
function Popular() {
    const [popular_products, set_popular] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    async function fetchData() {
        await fetch('https://ecommerce-backend-pink-mu.vercel.app/popularProducts', {
            method: "GET"
        }).then((res) => res.json()).then((data) => set_popular(data))
    }
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