import React, { useEffect,useState } from 'react'
import Item from '../../../Item/Item'
import "./NewCollections.css"
function NewCollections() {
    const [new_collections, set_newCollection] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    async function fetchData() {
        await fetch('http://localhost:4000/newCollection', {
            method: "GET"
        }).then((res) => res.json()).then((data) => set_newCollection(data))
    }
    return (
        <div className='new'>
            <h1 className='new-heading text-center'>new collections</h1>
            <hr className='new-heading-line bg-black mx-auto' />
            <div className='new-item row mx-auto'>
                {new_collections.map((item, index) => { return (<Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />) })}
            </div>

        </div>
    )
}

export default NewCollections