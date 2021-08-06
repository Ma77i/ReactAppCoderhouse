


import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ListContainer/ItemListContainer"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ListContainer/ItemDetailContainer";

const App = () => {


    return (
        <>
            <NavBar />

            <ItemListContainer greeting="Bienvenidos a la Tienda Pokemon"/>

            
        </>
    )
}

export default App