import React from "react";
import "../componentes/styles/ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {


    //count
    const onAdd = (quanty) => {
        console.log(`Compraste ${quanty} unidades`);
    }


    return (
        <div className="container">
            <div className="detail">
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.description} </p>
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
