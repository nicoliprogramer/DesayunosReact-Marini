import React from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({ info }) => {

  const { img, title, precio } = info
  const src = require(`${img}`)



  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <img src={src} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${precio}</p>
          <button className="btn btn-primary">Agregar al carrito</button>

        </div>
      </div>
    </div>
  );
};

export default Item;
