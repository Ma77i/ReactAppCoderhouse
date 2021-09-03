
import { useContext } from "react";
import contexto from '../Context/CartContext';
import { Link } from 'react-router-dom'

const Cart = () => {

    const { carro, removeItem, clear, totalPrice} = useContext(contexto)

    return (
        <div>
            <h1>Tu carrito</h1>
            <h4><Link to='/tienda'>Seguir comprando</Link></h4>
            <div className="contenedor__Cart">
                {carro.length ? (
                    <div >
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
                                                <p className='quitar' onClick={() => removeItem(item.id)}>Quitar</p>
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
                                    <button onClick={() => clear(item)}>Vaciar carrito</button>
                                </tbody>
                                

                            )}

                        </table>
                        <div className='cart__footer'>
                            <div className='cart__form'>
                                <label htmlFor="noteId">¿Tenés algún comentario especial sobre tu orden?</label>
                                <textarea name="note" id="noteId" cols="5" rows="10"></textarea>
                            </div>

                            <div className='cart__total'>
                                <strong>TOTAL ESTIMADO <span> $ </span>{totalPrice}</strong>
                            </div>
                            <div>
                                <button><Link to='/form'>Finalizar compra</Link></button>
                            </div>
                        </div>
                    </div>

                ) : <h2>Su carrito esta vacio</h2>}
            </div>

        </div>
    )
}

export default Cart
