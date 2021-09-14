import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import contexto from "../../Context/Context"

const OrderReady = () => {

  const { carro, orderId, clear, comprador } = useContext(contexto)

  useEffect(() => {
    if (orderId) {
      clear(carro);
    }
  }, [carro, orderId, clear]);

  return (

    <div className='boxOrder'>
      <h2>Compra realizada con exito</h2>
      <div className='detailOrder'>
        <h4>¡Muchas gracias {comprador.name}!</h4>
        <p>Su orden de compra es: </p>
        <strong>{orderId}</strong>
      </div>
      <Link to='/tienda' className='links'><button className='buttons'><b>Volver a la tienda</b></button></Link>
    </div>


  )

}

export default OrderReady