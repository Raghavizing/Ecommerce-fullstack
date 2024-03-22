import React from 'react'
import Item from '../../../Item/Item'
import new_collections from "../../../Assets/new_collections"
import "./NewCollections.css"
function NewCollections() {
    return (
        <div className='new'>
            <h1 className='new-heading text-center'>new collections</h1>
            <hr className='new-heading-line bg-black mx-auto'/>
            <div className='new-item row mx-auto'>
                {new_collections.map((item,index) => { return (<Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>) })}
            </div>

        </div>
    )
}

export default NewCollections