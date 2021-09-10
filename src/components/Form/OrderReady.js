import { useContext } from "react"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import contexto from "../../Context/CartContext"

const OrderReady = () => {

    const { orderId, clear, comprador } = useContext(contexto)

    return (
        <div className='containerOrder'>
            <div className='boxOrder'>
                <h2>Compra realizada con exito</h2>
                <div className='detailOrder'>
                    <h4>¡Muchas gracias {comprador.name}!</h4>
                    <p>Su orden de compra es: <strong>{orderId}</strong></p>
                </div>
            <Button variant='dark' onClick={clear}><Link to='/tienda' className='links'>Volver a la tienda</Link></Button>
        </div>


        </div>
    )

}

export default OrderReady