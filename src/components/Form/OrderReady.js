import { useContext } from "react"
import contexto from "../../Context/CartContext"

const OrderReady = () => {

    const { carro, total, orderId, name, phone, mail } = useContext(contexto)
    
    return (
        <div>
            <p>Compra realizada con exito. Su orden de compra es: {orderId}</p><hr />
            <fieldset>
                <legend>
                    <h3>Detalles de la compra</h3>
                </legend>
                <div>
                <p>Nombre: {name}</p>
                <p>Teléfono: {phone}</p>
                <p>Mail: {mail}</p>
            </div>
            {carro.map(item=>
                <div key={item.id}>
                    <p>Productos: {item.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: {item.price * item.quantity}</p>
                </div>
            )}
            
            <strong>Total: {total}</strong>
            </fieldset>
            

        </div>
    )

}

export default OrderReady