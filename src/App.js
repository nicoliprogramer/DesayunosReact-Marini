import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react";
import CartProvider from "./componentes/context/CartContext";
import Cart from "./componentes/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/:item/:id' element={<ItemDetailContainer />} />
            <Route path='/:cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
