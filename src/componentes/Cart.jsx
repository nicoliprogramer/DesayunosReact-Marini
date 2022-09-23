import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

export const Cart = () => {
    const { items, addItem } = useContext(CartContext);

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                    </div>
                ))
            }
            <h1></h1>
        </div>
    );
}

export default Cart;