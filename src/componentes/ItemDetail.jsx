import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../componentes/styles/ItemDetail.css";
import ItemCount from "./ItemCount";
//import { Link } from 'react-router-dom'


const ItemDetail = ({ data }) => {

    const { title, precio, description, img } = data;
    const src = require(`${img}`)


    //count
    const onAdd = (quanty) => {
        setGoToCart(true);
    }

    const [goToCart, setGoToCart] = useState(false);

    return (
        <div className="container">
            <div className="detail">
                <div className="content">
                    <h1>Nombre: {title}</h1>
                    <p>Precio: {precio}</p>
                    <p>{description}</p>
                    <img src={src}></img>
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
