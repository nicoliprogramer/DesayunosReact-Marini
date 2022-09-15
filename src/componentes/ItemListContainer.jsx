import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
import items from "../productosMock";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  const filtrarCategoria = items.filter((items) => items.category === categoryId);

  const obtenerProductos = new Promise ((resolve, reject) => {
    setTimeout( () => {

      if(categoryId){
        resolve(filtrarCategoria)
      } else {
        resolve(items)
      }

      /* categoryId ? resolve(filtrarCategoria) : resolve(items) */
    })
  })

  useEffect(() => {
    obtenerProductos.then ((res) => {
      setProductos(res)
    })
    .catch( () => {
      console.log('error');
    })
  }, [categoryId]);


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
