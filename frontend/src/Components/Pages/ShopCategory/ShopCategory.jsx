import React, { useContext } from 'react';
import Item from '../../Item/Item';
import { ShopContext } from '../../Context/ShopContext';
import dropdown from "../../Assets/dropdown_icon.png";
import "./ShopCategory.css";

function ShopCategory(props) {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shopCategory">
      <div className="shopCategory-banner-container text-center">
        <img className="shopCategory-banner img-fluid" src={props.banner} alt="Shop Category Banner" />
      </div>
      <div className="container shopCategory-items">
        <div className="d-flex justify-content-between align-items-center my-2 flex-wrap">
          <p className="my-auto shopCategoryIndex">
            <span>Showing 1-12 </span>out of 36
          </p>
          <button className="btn border-dark rounded-5 d-flex align-items-center">
            Sort By <img src={dropdown} alt="Dropdown Icon" className="ms-2" />
          </button>
        </div>
        <div className="row">
          {all_products.map((item, index) => {
            if (item.category === props.category) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <button className="btn btn-outline-dark mx-auto w-50 py-2 rounded-5 my-5">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ShopCategory;
