import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {

  return (
    <>
      {productos.map((productos) => {
        return <Item key={productos.id} info={productos}
        />
      })}

    </>
  );
};

export default ItemList;
