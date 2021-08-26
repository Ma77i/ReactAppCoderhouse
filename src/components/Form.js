import { Button, Alert } from 'react-bootstrap'
import { useState } from "react";



const Form = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [error, setError] = useState(false)


    const saveName = (e) => {
        setName(e.target.value)
    }

    const savePhone = (e) => {
        setPhone(e.target.value);
    }

    const saveMail = (e) => {
        setMail(e.target.value)
    }

    const saveOrder = (e) => {
        e.preventDefault()
        if (validate) {
            const buyer = { name, phone, mail };
            console.log('Nombre: '+ buyer.name +'\nTeléfono: '+ buyer.phone+'\nEmail: '+ buyer.mail);
            setError(false)
        } else {
            setError(true)
        }
    }

    const validate = () => {
        if (name.length && phone.trim().length && mail.trim().length) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className='form'>
            <h1>Finalizar compra</h1>
            {error ? <Alert variant="danger">Por favor complete todos los datos!!!</Alert> : null}
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
            <Button onClick={saveOrder}>Guardar</Button>
        </div>
    )
}

export default Form