import React from "react";
import "../componentes/styles/ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom'


const ItemDetail = ({ data }) => {
    const { img, title, precio } = data
    const src = require(`${img, title}`)


    //count
    const onAdd = (quanty) => {
        console.log(`Compraste ${quanty} unidades`);
    }


    return (
        <Link to={`/detalle/${data.title}`} className="film" >
            <div className="container">
                <div className="detail">
                    <div className="content">
                        <h1>{data.title}</h1>
                        <p>{data.description} </p>
                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default ItemDetail;
