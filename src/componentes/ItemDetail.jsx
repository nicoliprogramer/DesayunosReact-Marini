import React from "react";
import "../componentes/styles/ItemDetail.css";
import ItemCount from "./ItemCount";
//import { Link } from 'react-router-dom'


const ItemDetail = ({ data }) => {

    const { title, precio, description } = data;
    //const src = require(`${img, title}`)


    //count
    const onAdd = (quanty) => {
        console.log(`Compraste ${quanty} unidades`);
    }


    return (
        <div className="container">
            <div className="detail">
                <div className="content">
                    <h1>Nombre: {title}</h1>
                    <p>Precio: {precio}</p>
                    <p>{description}</p>
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
