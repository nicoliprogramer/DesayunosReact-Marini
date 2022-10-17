import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/Cart';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import CartProvider from './context/CartContext';
import './App.css';



function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
