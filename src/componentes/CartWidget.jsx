import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";


const CartWidget = () => {
    const { items } = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.count;
    })
    return (
        <>
            <div className="ite msInCart">
                {itemsInCart}
            </div>
            <i className="bi bi-cart color-blue"></i>
        </>
    );
}

export default CartWidget;