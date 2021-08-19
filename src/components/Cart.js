
import { useContext } from "react";
import contexto from '../Context/CartContext';

const Cart = () => {

    const { carro , removeItem , clear } = useContext(contexto)

    
    return ( 
        <div>
            {
                carro.length ? (
                    carro.map(item =>
                <div key={item.id}>
                    {item.title} x {item.quantity} - ${item.price * item.quantity}
                    <button onClick={()=>removeItem(item.id)}>borrar</button>
                    <button onClick={()=>clear(item)}>limpiar</button>
                </div>
            )) : <h2>No hay productos en el Carro</h2>}
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
