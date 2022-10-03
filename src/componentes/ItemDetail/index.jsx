import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './itemDetail.css';

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addItem } = useCartContext();

  const onAdd = (count) => {
    setGoToCart(true);
    addItem(data, count);
  }

  return (
    <div className='counter'>
      <div className='content'>
        <h1>{data.title}</h1>
        <h5>Precio: {data.precio}</h5>
        <img src={data.img} alt="" /> <hr />
        <p>{data.description}</p>

        {
          goToCart
            ? <div className='counter'>
              <Link className='btn btn-primary text-white counter' to='/'>Seguir comprando</Link>
              <Link className='counter' to='/cart'>Terminar compra</Link>
            </div>
            : <ItemCount initial={1} stock={10} onAdd={onAdd} />
        }
      </div>
    </div>
  )
}

export default ItemDetail;