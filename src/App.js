import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/:item/:id' element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
