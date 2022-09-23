import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../componentes/styles/ItemDetail.css";
import { CartContext } from "./context/CartContext";
// import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);

    // const { addItem } = CartContext(CartContext)

    const { title, precio, description, img } = data;
    // const src = require(`${img}`)


    const { addItem } = useContext(CartContext)



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
                            : <ItemCount data={data} initial={1} stock={5} addItem={addItem} />
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
