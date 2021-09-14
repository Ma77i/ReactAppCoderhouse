import { Alert } from 'react-bootstrap'
import { useContext } from "react";
import contexto from '../../Context/Context';
import { Link } from 'react-router-dom'

const Form = () => {

    const { saveOrder, error, dataHandler } = useContext(contexto)

    return (

        <div className='form'>
            {error ? <Alert variant="danger">Por favor complete todos los datos!!!</Alert> : null}
            <h1>Finalizar compra</h1>
            <h3>Detalles de facturación</h3><br />
            <div class="group">
                <input type="text" onChange={dataHandler} name='name' required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Nombre</label>
            </div>
            <div class="group">
                <input type="tel" onChange={dataHandler} name='phone' required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Teléfono</label>
            </div>
            <div class="group">
                <input type="mail" onChange={dataHandler} name='mail' required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Mail</label>
            </div>
            <Link to='/OrderReady' className='links'><button onClick={saveOrder} name="submit" type="submit" data-submit="...Sending"><b>Realizar compra</b></button></Link>
        </div>
    )
}

export default Form