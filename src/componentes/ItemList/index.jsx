import Item from "../Item";
import React from 'react'

const ItemList = ({ productos = [] }) => {
  return (
    productos.map(desayunos => <Item key={desayunos.id} info={desayunos} />)
  )
}

export default ItemList;