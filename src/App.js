


import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ListContainer/ItemListContainer"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {


    return (
        <>
            <NavBar />

            <ItemListContainer welcome="Bienvenidos a la Tienda Pokemon"/>
        </>
    )
}

export default App