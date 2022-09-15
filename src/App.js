import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import Cart from "./componentes/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/:category/:id' element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
