import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);


    // const isInCart = (id) => {

    // }

    const addItem = (data, count) => {
        setItems([...items, { id: data.id, name: data.title, price: data.price, count: count }])
        console.log(items);
    }

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;