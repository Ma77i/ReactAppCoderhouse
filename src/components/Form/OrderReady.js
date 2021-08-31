import { useContext } from "react"
import contexto from "../../Context/CartContext"

const OrderReady = () => {

    const { total, orderId, name, phone, mail} = useContext(contexto)
    return (
        <div>
            <p>Compra realizada con exito. Su orden de compra es: {orderId}</p><hr />
            <h3>Detalles de la compra</h3>
            <p>Nombre: {name}</p>
            <p>Teléfono: {phone}</p>
            <p>Mail: {mail}</p>
            <strong>Total: {total}</strong>
        </div>
    )

}

export default OrderReady