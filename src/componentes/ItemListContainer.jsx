import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'

const items = [
  {
    id: 1,
    title: "Box Premium",
    precio: 3240,
    img: "./img/producto1.jpg",
    category: 'producto',
  },
  {
    id: 2,
    title: "Desayuno Feliz Cumpleaños",
    precio: 2590,
    img: "./img/producto2.jpg",
    category: 'items',
  },
  {
    id: 3,
    title: "Desayuno Romántico",
    precio: 3553,
    img: "./img/producto3.jpg",
    category: 'producto',
  },
  {
    id: 4,
    title: "Box Desayuno",
    precio: 2665,
    img: "./img/producto4.jpg",
    category: 'items',
  },
  {
    id: 5,
    title: "Caja Love de Madera",
    precio: 3757,
    img: "./img/producto5.jpg",
    category: 'producto',
  },
  {
    id: 6,
    title: "Caja Cumple de Madera",
    precio: 4000,
    img: "./img/producto6.jpg",
    category: 'producto',
  },
];

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });
    if (categoriaId) {
      obtenerProductos.then((resp) => setProductos(resp.filter(item => item.category === categoriaId)));
    } else {
      obtenerProductos.then((resp) => setProductos(resp));
    }
  }, [categoriaId]);


  return (
    <div className="container">
      <div className="row">
        <ItemList productos={productos} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">{props.texto}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ItemListContainer;
