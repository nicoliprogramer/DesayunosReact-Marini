import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

export const Cart = () => {
    const { items, addItem } = useContext(CartContext);

    return (
        <div>
            {
                items.map((data) => (
                    <div key={data.id}>
                        <h1>{data.title}</h1>
                    </div>
                ))
            }
            <h1></h1>
        </div>
    );
}

export default Cart;