import React, { useContext } from 'react'
import "./RelatedProducts.css";
import { ShopContext } from '../../../Context/ShopContext'
import Item from '../../../Item/Item';
function RelatedProducts(props) {
    const {all_products} = useContext(ShopContext);
    const relatedProducts = all_products.filter((item) => item.category === props.product.category && item.id !== props.product.id);
    return (
        <div className='related-products my-4'>
            <h1 className='text-center'> Related Products </h1>
            <hr className='line mx-auto'/>
            <div className='row mx-0 mt-5'>
            {relatedProducts.map((item, index) => { if (index < 4) { return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} /> } else { return null } })}
            </div>
        </div>
    )
}

export default RelatedProducts