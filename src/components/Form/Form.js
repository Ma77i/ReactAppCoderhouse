import { Button, Alert } from 'react-bootstrap'
import { useState } from "react";
import {firestore} from '../../firebase'
import firebase from 'firebase/app';
import 'firebase/firestore'
import { useContext } from "react";
import contexto from '../../Context/CartContext';
import { Link } from 'react-router-dom'

const Form = () => {


    const [error, setError] = useState(false)
    
    const { carro, total, setOrderId, name, setName, phone, setPhone, mail, setMail } = useContext(contexto)
    
    const dataBase = firestore;
    const order = dataBase.collection('order');


    const saveName = (e) => {
        setName(e.target.value)
    }

    const savePhone = (e) => {
        setPhone(e.target.value);
    }

    const saveMail = (e) => {
        setMail(e.target.value)
    }

    const saveOrder = () => {
        
        if (validate) {
            const newOrder = {
                buyer: { name, phone, mail },
                items: carro,
                data: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total,
            };
            order.add(newOrder).then(({ id }) => {
                setOrderId(id);
                console.log('ID de compra', id);
                setError(false)
                //clear();
            }).catch(error => {
                setError(error);
            }).finally(() => {
                setError(false)
                //setMail("");
                //setName("");
                //setPhone("");
            });
        } else {
            setError(true)
        }
    }

    const validate = () => {
        if (name.trim().length && phone.trim().length && mail.trim().length) {
            return true
        } else {
            return false
        }
    }

    return (
        
        <div className='form'>
            {error ? <Alert variant="danger">Por favor complete todos los datos!!!</Alert> : null}
            <h1>Finalizar compra</h1>
            
            <div className='form__camp'>
            
                <label htmlFor="input">Ingrese su nombre</label>
                <input type="text" placeholder='Nombre' onChange={saveName} />
            </div>
            <div className='form__camp'>
                <label htmlFor="input">Ingrese su teléfono</label>
                <input type="text" placeholder='Teléfono' onChange={savePhone} />
            </div>
            <div className='form__camp'>
                <label htmlFor="input">Ingrese su Email</label>
                <input type="text" placeholder='Email' onChange={saveMail} />
            </div>
            <Button onClick={saveOrder}><Link to='/OrderReady'>Finalizar</Link></Button>
        </div>
    )
}

export default Form