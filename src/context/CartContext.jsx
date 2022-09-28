import React from 'react';
import { useContext, useState } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    console.log('carrito: ', cart);

    const addItem = (item, count) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, count: product.count + count } : product
            }));
        } else {
            setCart([...cart, { ...item, count }]);
        }
    }

    const totalPrecio = () => {
        return cart.reduce((prev, act) => prev + act.count * act.precio, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.count, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const deleteAll = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addItem,
            totalPrecio,
            totalProducts,
            cart,
            deleteAll

        }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;