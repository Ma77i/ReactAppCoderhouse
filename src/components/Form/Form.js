import { Button, Alert } from 'react-bootstrap'
import { useContext } from "react";
import contexto from '../../Context/CartContext';
import { Link } from 'react-router-dom'

const Form = () => {

    const { saveOrder, error, dataHandler } = useContext(contexto)
    
    return (
        
        <div className='form'>
            {error ? <Alert variant="danger">Por favor complete todos los datos!!!</Alert> : null}
            <h1>Finalizar compra</h1>
            <h3>Detalles de facturación</h3>
            <div className='form__camp'>
                <label htmlFor="input">Ingrese su nombre</label>
                <input type="text" placeholder='Nombre' onChange={dataHandler} name='name' />
            </div>
            <div className='form__camp'>
                <label htmlFor="input">Ingrese su teléfono</label>
                <input type="text" placeholder='Teléfono' onChange={dataHandler} name='phone'/>
            </div>
            <div className='form__camp'>
                <label htmlFor="input">Ingrese su Email</label>
                <input type="text" placeholder='Email' onChange={dataHandler} name='mail' />
            </div>
            <Button><Link to='/Cart' className='links'>Volver al carrito</Link></Button>
            <Button variant='success' onClick={saveOrder}><Link to='/OrderReady' className='links'>Realizar compra</Link></Button>
        </div>
    )
}

export default Form