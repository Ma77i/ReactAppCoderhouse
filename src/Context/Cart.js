//import { Table } from 'react-bootstrap'
import { useContext } from "react";
import CartContext from './CartContext';
import ItemCart from "./ItemCart";
import tachito from "../tachito_borrar.svg"
import { Link } from 'react-router-dom'

const Cart = () => {

    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal} = useContext(CartContext);

    
    return (
        <>
            <h2>Carrito de compras</h2>
            { carrito.length > 0 ? <div className="vaciar_carrito"><img onClick={vaciarCarrito} src={tachito} alt="" /><p>vaciar el carrito</p></div> : null } 
            <section>
            { carrito.length > 0 ? carrito.map( (item) => <ItemCart key={item.id} item={item} borrarDelCarrito={borrarDelCarrito} />) : <article><div className="sinstock_nohay">No hay productos en tu carrito. Te invitamos a que visites nuestra <Link to={`/tienda`}><span className="sin_items">Tienda</span></Link></div></article>}
            </section>
            { carrito.length > 0 ?
            <div className="total"><div className="importe__total"><p>Total: $<span> {precioTotal}</span></p><button id="botonCheckout" className="checkout" href="">Check out</button></div></div>
            : null
            }
        </>
    );


/*
    return (
        <>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Titulo</th>
                            <th>Precio</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{datos.title}</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
    */
}

export default Cart
