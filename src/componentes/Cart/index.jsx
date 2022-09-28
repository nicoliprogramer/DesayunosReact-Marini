import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {

    const { cart, totalPrecio, deleteAll } = useCartContext();

    if (cart.length === 0) {
        return (
            <>  <br />
                <p>No hay elementos en el carrito</p>
                <hr />
                <Link className='btn btn-primary text-white counter' to='/'>Hacer compras</Link>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className='text-center'>
                <p className='h1'>
                    Total: $ {totalPrecio()}
                </p>
                <Link className='btn btn-primary text-white counter' to='/'>Seguir comprando</Link><br></br><br></br>
                <button className='btn btn-primary text-white counter' onClick={deleteAll}>Vaciar carrito</button>
            </div>

        </>
    )
}

export default Cart;