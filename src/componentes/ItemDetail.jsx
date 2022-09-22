import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../componentes/styles/ItemDetail.css";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";

const ItemDetail = ({ data }) => {

    const { title, precio, description, img } = data;
    // const src = require(`${img}`)


    //count
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    return (
        <div className="container">
            <div className="detail">
                <div className="content">
                    <h1>Nombre: {title}</h1>
                    <p>Precio: {precio}</p>
                    <p>{description}</p>
                    {/* <img src={src}></img> */}
                    {

                        goToCart
                            ? <Link to='/cart'>Terminar Compra</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
