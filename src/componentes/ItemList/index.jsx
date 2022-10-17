import Item from "../Item";
import React from 'react'

const ItemList = ({ data = [] }) => {
  return (
    data.map(desayunos => <Item key={desayunos.id} info={desayunos} />)
  )
}

export default ItemList;