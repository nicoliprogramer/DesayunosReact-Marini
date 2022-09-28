import React from 'react'
import { useCartContext } from '../../context/CartContext';
import "./itemCart.css";

const ItemCart = ({ product }) => {

  const { removeProduct } = useCartContext();


  return (
    <div className='itemCart'>
      <img src={product.img} alt={product.title} /><br />
      <div >
        <p>Producto: {product.title}</p>
        <p>Cantidad: {product.count}</p>
        <p>Precio por unidad: ${product.precio}</p>
        <p>Subtotal: $ {product.count * product.precio}</p>
        <button className='btn btn-primary text-white counter' onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCart;