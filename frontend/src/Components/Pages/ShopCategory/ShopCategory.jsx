import React, { useContext } from 'react'
import Item from '../../Item/Item';
import { ShopContext } from '../../Context/ShopContext';
import dropdown from "../../Assets/dropdown_icon.png"
import "./ShopCategory.css"
function ShopCategory(props) {
  const {all_products} = useContext(ShopContext);
  console.log(all_products);
  return (
    <div className='shopCategory'>
      <div className='shopCategory-banner-container text-center'><img className='shopCategory-banner' src={props.banner} alt="" /></div>
      <div className='row shopCategory-items mx-auto'>
      <div className='d-flex justify-content-between my-2'>
        <p className='my-auto shopCategoryIndex'><span>Showing 1-12 </span>out of 36</p>
        <button className='btn border-dark rounded-5'>Sort By <img src={dropdown} alt="" /></button>
      </div>
      {all_products.map((item, index) => {
        if (item.category === props.category) {
          return (<Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />)
        }
        else{
          return null;
        }
      })}
      <button className='btn btn-outline-dark mx-auto w-25 py-4 rounded-5 my-5'>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory