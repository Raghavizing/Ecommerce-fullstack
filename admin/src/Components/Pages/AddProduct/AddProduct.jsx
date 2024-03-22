import React, { useState } from 'react'
import "./AddProduct.css"
import upload from "../../../assets/upload_area.svg"
function AddProduct() {
    const [product, setProduct] = useState({
        name: "",
        old_price: "",
        new_price: "",
        category: "",
        image: null

    })
    function resetForm() {
        setProduct({
            name: "",
            old_price: "",
            new_price: "",
            category: "",
            image: null
        })
    }
    async function handleSubmit(event) {
        event.preventDefault();
        let form = new FormData();
        let productDetails = product;
        let response;
        form.append('product', product.image);
        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: '/application/json',
            },
            body: form
        }).then((res) => res.json()).then((data) => response = data);
        if (response.success) {
            productDetails.image = response.imgUrl;
            console.log(productDetails);
            await fetch('http://localhost:4000/addProduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productDetails)
            }).then((res) => res.json()).then((data) => {
                alert((data.success) ? "Product Added Successfully" : "Some Error Has Occured");
            });
            // resetForm();
        }
        else {
            alert("Some Error Has Occured.");
        }
    }
    function handleChange(event) {
        let name = event.target.name;
        let value;
        if (name === "image") {
            value = event.target.files[0];
        }
        else {
            value = event.target.value;
        }
        setProduct((prev) => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }
    return (
        <div className='addProduct-page'>
            <form className='addProduct-form bg-white' onSubmit={handleSubmit}>
                <div className='my-3'>
                    <label htmlFor="name" className='form-label'>Product Title</label>
                    <input type="text" name="name" id="name" className='form-control py-2 rounded-2' placeholder='Type Here' onChange={handleChange} value={product.name} required />
                </div>
                <div className='d-flex justify-content-between my-3'>
                    <div className='w-50 pe-2'>
                        <label htmlFor="old_price" className='form-label'>Price</label>
                        <input type="number" name="old_price" id="old_price" className='form-control py-2 rounded-2' placeholder='Type Here' onChange={handleChange} value={product.old_price} required />
                    </div>
                    <div className='w-50 ps-2'>
                        <label htmlFor="new_price" className='form-label'>Offer Price</label>
                        <input type="number" name="new_price" id="new_price" className='form-control py-2 rounded-2' placeholder='Type Here' onChange={handleChange} value={product.new_price} required />
                    </div>
                </div>
                <div className='my-3 w-50 pe-2'>
                    <label htmlFor="category" className='form-label'>Product Category</label>
                    <select class="form-select" name="category" id='category' onChange={handleChange} value={product.category} required>
                        <option value="" selected></option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kid">Kid</option>
                    </select>
                </div>
                <div className='my-3'>
                    <label htmlFor="image" className='form-label'>
                        <img src={(product.image) ? URL.createObjectURL(product.image) : upload} alt="" className="upload-img" />
                    </label>
                    <input type="file" name="image" id="image" className='form-control' hidden onChange={handleChange} required />
                </div>
                <button type="submit" className='btn btn-outline-dark w-25'>Add</button>
            </form>
        </div>
    )
}

export default AddProduct