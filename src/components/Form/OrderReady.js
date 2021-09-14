import { useContext } from "react"
import { Link } from "react-router-dom"
import contexto from "../../Context/CartContext"

const OrderReady = () => {

    const { orderId, clear, comprador } = useContext(contexto)

    return (
        
            <div className='boxOrder'>
                <h2>Compra realizada con exito</h2>
                <div className='detailOrder'>
                    <h4>¡Muchas gracias {comprador.name}!</h4>
                    <p>Su orden de compra es: </p>
                    <strong>{orderId}</strong>
                </div>
                <Link to='/tienda' className='links'><button className='buttons' onClick={clear}><b>Volver a la tienda</b></button></Link>
            </div>
            
        
    )

}

export default OrderReady