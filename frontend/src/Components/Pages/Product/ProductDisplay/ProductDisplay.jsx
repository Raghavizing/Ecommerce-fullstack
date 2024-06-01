import React, { useContext, useState } from 'react';
import "./ProductDisplay.css";
import star from "../../../Assets/star_icon.png";
import dull_star from "../../../Assets/star_dull_icon.png";
import { ShopContext } from '../../../Context/ShopContext';

function ProductDisplay(props) {
    const { addToCart, removeFromCart } = useContext(ShopContext);
    const [size, setSize] = useState("S");

    function addItem() {
        addToCart(props.product.id);
    }

    function removeItem() {
        removeFromCart(props.product.id);
    }

    return (
        <div className='product-display container'>
            <div className='row m-0'>
                <div className='images-section col-lg-6 col-12 row m-0 p-0'>
                    <div className='product-images col-lg-2 col-12 row m-0 p-0'>
                        <img src={props.product.image} className='mb-2 w-100 p-0' alt="" />
                        <img src={props.product.image} className='my-2 w-100 p-0' alt="" />
                        <img src={props.product.image} className='my-2 w-100 p-0' alt="" />
                        <img src={props.product.image} className='mt-2 w-100 p-0' alt="" />
                    </div>
                    <div className='product-image-main col-lg-10 col-12'>
                        <img src={props.product.image} className="w-100" alt="" />
                    </div>
                </div>
                <div className='text-section col-lg-6 com-12'>
                    <h1>{props.product.name}</h1>
                    <div className='rating d-flex my-2'>
                        <img src={star} className="mx-1 h-75 my-auto" alt="" />
                        <img src={star} className="mx-1 h-75 my-auto" alt="" />
                        <img src={star} className="mx-1 h-75 my-auto" alt="" />
                        <img src={star} className="mx-1 h-75 my-auto" alt="" />
                        <img src={dull_star} className="mx-1 h-75 my-auto" alt="" />
                        <p className='my-auto mx-2'>(122)</p>
                    </div>
                    <div className='price d-flex my-4'>
                        <p className='old_price mx-2 my-auto'>${props.product.old_price}</p>
                        <p className='new_price mx-2 my-auto'>${props.product.new_price}</p>
                    </div>
                    <div className='description my-2'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis magni aperiam cum suscipit facilis adipisci quae expedita dicta necessitatibus culpa veritatis quo rem eum quos fuga vero, reiciendis dolorem reprehenderit dignissimos eius molestiae quidem.</p>
                    </div>
                    <div className='size my-2'>
                        <p>Select Size</p>
                        <div className='d-flex flex-wrap'>
                            {["S", "M", "L", "XL", "XXL"].map((s) => (
                                <button
                                    key={s}
                                    className={`btn sizeBtn border-dark rounded-0 me-2 ${(size === s) ? 'activeSize' : ''}`}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    {props.quantity === 0 ? (
                        <button className='btn btn-danger rounded-0 p-2 my-2 w-50' onClick={addItem}>
                            Add to Cart
                        </button>
                    ) : (
                        <div className='bg-danger rounded-0 p-2 my-3 w-50 d-flex justify-content-around text-white'>
                            <button className='btn btn-outline-light' onClick={addItem}>+</button>
                            <p className='my-auto'>{props.quantity}</p>
                            <button className='btn btn-outline-light' onClick={removeItem}>-</button>
                        </div>
                    )}
                    <div className='my-2'>
                        <p className='category'><span>Category: </span>{props.product.category}, Casual Wear</p>
                        <p className='tags'><span>Tags: </span>Modern, Latest</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
