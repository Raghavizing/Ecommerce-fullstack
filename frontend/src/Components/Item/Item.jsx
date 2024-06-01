import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Item.css";
import Aos from 'aos';

function Item(props) {
    useEffect(() => {
        Aos.init();
      },[]);
    return (
        <div className="item-card col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card border-0" data-aos="fade-up">
                <Link to={`/product/${props.id}`}>
                    <img
                        className="card-img-top item-img"
                        src={props.image}
                        alt="Product"
                        onClick={() => window.scrollTo(0, 0)}
                    />
                </Link>
                <div className="card-body">
                    <h1 className="card-title item-name">{props.name}</h1>
                    <div className="d-flex">
                        <p className="card-text item-new-price">${props.new_price}</p>
                        <p className="card-text item-old-price mx-2">${props.old_price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
