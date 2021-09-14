
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ListContainer/ItemDetailContainer";
import Home from "./components/Home";
import Form from "./components/Form/Form";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CustomProvider from "./Context/CustomProvider";
import OrderReady from "./components/Form/OrderReady";

const App = () => {


    return (
        <CustomProvider>
            <BrowserRouter>

                <NavBar />
                <div className='cuerpo'>
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>

                        <Route path='/tienda'>
                            <ItemListContainer greeting="Bienvenidos a la Pokedex" />
                        </Route>
                        <Route path='/category/:id'>
                            <ItemListContainer greeting="Bienvenidos a la Pokedex" />
                        </Route>

                        <Route path='/detail/:id' exact>
                            <ItemDetailContainer />
                        </Route>
                        <Route path='/Cart' component={Cart} />

                        <Route path='/form' component={Form} />

                        <Route path='/OrderReady' component={OrderReady} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App