
import { useContext } from "react";
import contexto from '../Context/CartContext';
import { Link } from 'react-router-dom'

const Cart = () => {

    const { carro, removeItem, clear, totalPrice} = useContext(contexto)

    return (

        <div className="contenedor__Cart">
            <h1>Tu carrito</h1>
            <h4><Link to='/tienda'>Seguir comprando</Link></h4>
        {carro.length ? (
            <div className="contenedor__tabla">
                <table className='tabla'>
                    <thead>
                        <tr className='cabeceras__Cart'>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                {carro.map(item =>
                    <tbody key={item.id}>
                        <tr className='listado__Cart'>
                            <td className='cartProd'>
                                <img src={item.image} alt="imagen de producto" width='100' height='100' />
                                <div className='cart__prodDetail'>
                                    <h4><strong>{item.title}</strong></h4>
                                    <p>{item.description}</p>
                                    <button className='quitar' onClick={() => removeItem(item.id)}>Quitar</button>
                                </div>
                            </td>
                            <td>
                                ${item.price}
                            </td>
                            <td>
                                '{item.quantity}'
                            </td>
                            <td>
                                ${item.price * item.quantity}
                            </td>
                        </tr>  
                    </tbody>
                )}
                    <button className='quitar' onClick={() => clear(carro)}>Vaciar carrito</button>
                </table>
                <div className='cart__footer'>
                    <div className='cart__total'>
                        <strong>SUBTOTAL: <span> $ </span>{totalPrice}</strong><br />
                        <Link to='/form' className='links'><button className='buttons'><b>Finalizar compra</b></button></Link>
                    </div>
                    <div >
                        
                    </div>
                </div>
            </div>

        ) : <h2 className='carroVacio'>Su carrito esta vacio</h2>}
    
        </div>
    )
}

export default Cart
/*
*/
