import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";


function App() {
  return (
    <div>

      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
