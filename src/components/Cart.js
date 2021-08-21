
import { useContext } from "react";
import contexto from '../Context/CartContext';
import { Link } from 'react-router-dom'

const Cart = () => {

    const { carro , removeItem , clear } = useContext(contexto)

    
    return ( 
        <div>
            {
                carro.length ? (
                    carro.map(item =>
                <div key={item.id}>
                    {item.title} x {item.quantity} - ${item.price * item.quantity}
                    <span onClick={()=>removeItem(item.id)} className="material-icons-outlined">delete</span>
                    <span className="material-icons links">delete</span>
                    <button onClick={()=>removeItem(item.id)}>borrar</button>
                    <button onClick={()=>clear(item)}>limpiar</button>
                </div>
            )) : <h2>No hay productos en el Carro, visite nuestra <Link to='/tienda'>tienda</Link></h2>}
        </div>
    )


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
