import { useContext } from "react"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import contexto from "../../Context/CartContext"

const OrderReady = () => {

    const { orderId, clear, comprador } = useContext(contexto)

    return (
        <div className='containerOrder'>
            <p>Compra realizada con exito. Su orden de compra es: <strong>{orderId}</strong></p><hr />
            <div className='boxOrder'>
                <h2>Detalles de la compra</h2>
                <div className='detailOrder'>
                    <p>Nombre: {comprador.name}</p>
                    <p>Teléfono: {comprador.phone}</p>
                    <p>Mail: {comprador.mail}</p>
                </div>
            <Button variant='dark' onClick={clear}><Link to='/tienda' className='links'>Volver a la tienda</Link></Button>
        </div>


        </div>
    )

}

export default OrderReady