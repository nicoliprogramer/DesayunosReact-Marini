import React from "react";
import { Link } from 'react-router-dom'

const Item = ({ info }) => {

  const { img, title, precio } = info
  const src = require(`${img}`)

  return (
    <Link to={`/detalle / ${info.id}`} className="film">
      <div className="col-md-4 mt-4">
        <div className="card">
          <img src={src} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${precio}</p>
            <button className="btn btn-primary">Ver Detalles</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
