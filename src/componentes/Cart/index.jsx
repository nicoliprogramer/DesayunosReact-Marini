import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import Swal from 'sweetalert2'
import "./Cart.css";

const Cart = () => {

    const { cart, totalPrecio, deleteAll, totalProducts } = useCartContext();



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const order = {
        buyer: {
            name: name,
            email: email,
            phone: phone,
            address: address
        },
        items: cart.map(product => ({ id: product.id, title: product.title, precio: product.precio, count: product.count })),
        date: new Date(),
        total: totalPrecio(),
    }

    const handleClick = () => {
        if (name !== '' && email !== '' && !isNaN(phone) && address !== '') {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu compra está siendo procesada',
                showConfirmButton: false,
                timer: 3000
            })
            const db = getFirestore();
            const orderCollection = collection(db, 'orders');
            addDoc(orderCollection, order)
                .then(({ id }) => (
                    Swal.fire(
                        `Id de compra Nº ${id}
          Fecha: ${order.date}
          Nombre: ${order.buyer.name}
          Email: ${order.buyer.email}
          Teléfono: ${order.buyer.phone}
          Dirección: ${order.buyer.address}
          Items: ${totalProducts()}
          Total: $${order.total}
          ¡Alcanzaremos su pedido con éxito!`

                    ))
                    ,
                    deleteAll()
                )
        } else {
            Swal.fire(
                'Vuelva a Intentar...',
                'Ha ingresado de forma incorrecta sus datos',
                'question'

            )
        }
    }


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
                <input type="text" color="black" required placeholder='Nombre' value={name} size="50" onChange={(e) => setName(e.target.value)} /><br />
                <input type="text" color="black" required placeholder='Email' value={email} size="50" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="text" color="black" required placeholder='Teléfono' value={phone} size="50" onChange={(e) => setPhone(e.target.value)} /><br />
                <input type="text" color="black" required placeholder='Dirección' value={address} size="50" onChange={(e) => setAddress(e.target.value)} /><br />
                <button className='btn btn-primary text-white counter' onClick={handleClick}>Comprar</button><br /><br />
                <Link className='btn btn-primary text-white counter' to='/'>Seguir comprando</Link><br></br><br></br>
                <button className='btn btn-primary text-white counter' onClick={deleteAll}>Vaciar carrito</button>
            </div>

        </>
    )
}

export default Cart;