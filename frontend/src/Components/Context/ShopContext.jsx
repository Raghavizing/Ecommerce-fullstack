import React, { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 301; i++) {
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cart, setCart] = useState(getDefaultCart());
    const [all_products, set_products] = useState([])
    const [popular_products, set_popular] = useState([])
    useEffect(() => {
        fetchData();
    }, [])
    async function fetchData() {
        await fetch('http://localhost:4000/allProducts', {
            method: "GET"
        }).then((res) => res.json()).then((data) => set_products(data))
        await fetch('http://localhost:4000/popularProducts', {
            method: "GET"
        }).then((res) => res.json()).then((data) => set_popular(data))
    }
    const addToCart = (itemId) => {
        setCart((prev) => {
            return {
                ...prev,
                [itemId]: cart[itemId] + 1
            }
        })
    }
    const removeFromCart = (itemId) => {
        setCart((prev) => {
            return {
                ...prev,
                [itemId]: (cart[itemId] > 0) ? cart[itemId] - 1 : 0
            }
        })
    }
    const removeAllFromCart = (itemId) => {
        setCart((prev) => {
            return {
                ...prev,
                [itemId]: 0
            }
        })
    }
    const getCartItems = () => {
        let totalItems = 0;
        let cartItems = all_products.filter((item) => cart[item.id] > 0);
        for (const item in cartItems) {
            totalItems = totalItems + 1;
        }
        return totalItems;
    }
    const getTotal = () => {
        let totalAmt = 0;
        let cartItems = all_products.filter((item) => cart[item.id] > 0);
        cartItems.map((item) => totalAmt = totalAmt + (item.new_price * cart[item.id]))
        return totalAmt;
    }
    const ContextValue = { all_products, popular_products, cart, addToCart, removeFromCart, removeAllFromCart, getTotal, getCartItems };
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;