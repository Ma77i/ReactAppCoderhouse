
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ListContainer/ItemListContainer"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ListContainer/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";



const App = () => {


    return (
        <BrowserRouter>
            <NavBar />
            <div className='cuerpo'>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/tienda'>
                        <ItemListContainer greeting="Bienvenidos a la Tienda" />
                    </Route>
                    <Route path='/category/:id'>
                        <ItemListContainer greeting="Bienvenidos a la Tienda" />
                    </Route>

                    <Route path='/detail/:id' exact>
                        <ItemDetailContainer />
                    </Route>
                    <Route path='/cart' component={Cart}>
                        <Cart />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App