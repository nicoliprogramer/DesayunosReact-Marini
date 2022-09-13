import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";

const items = [
  {
    id: 1,
    title: "Box Premium",
    precio: 3240,
    img: "./img/producto1.jpg",
  },
  {
    id: 2,
    title: "Desayuno Feliz Cumpleaños",
    precio: 2790,
    img: "./img/producto2.jpg",
  },
  {
    id: 3,
    title: "Desayuno Romántico",
    precio: 3553,
    img: "./img/producto3.jpg",
  },
  {
    id: 4,
    title: "Box Desayuno",
    precio: 2765,
    img: "./img/producto4.jpg",
  },
  {
    id: 5,
    title: "Caja Love de Madera",
    precio: 3757,
    img: "./img/producto5.jpg",
  },
  {
    id: 6,
    title: "Caja Cumple de Madera",
    precio: 4000,
    img: "./img/producto6.jpg",
  },
];

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });
    obtenerProductos.then((resp) => setProductos(resp));
  }, []);


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
