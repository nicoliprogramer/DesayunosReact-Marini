import React from "react";
import { Link } from 'react-router-dom'

const Item = ({ info }) => {

  const { img, title, precio, category, id } = info
  const src = require(`${img}`)

  return (

    <div className="col-md-4 mt-4">
      <div className="card">
        <img src={src} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${precio}</p>
          <Link to={`/${category}/${id}`} className="film"><button className="btn btn-primary">Ver Detalles</button></Link>
        </div>
      </div>
    </div>

  );
}

export default Item;
