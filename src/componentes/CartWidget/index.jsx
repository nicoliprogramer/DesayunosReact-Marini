import React from 'react';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <>
      <span className="bi bi-cart color-blue" >{totalProducts() || ''}</span>
    </>
  );
}

export default CartWidget;