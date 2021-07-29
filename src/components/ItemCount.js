import {useState} from "react"
import Button from 'react-bootstrap/Button'

const ItemCount = ({ stock , initial , onAdd }) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }

    return (
        <>
            <p>Contador Actual : {contador}</p>
            
            <Button variant="primary" className="mx-2" onClick={restarContador}> - </Button>
            <Button variant="primary" className="mx-2" onClick={aumentarContador}> + </Button>
            <Button variant="primary" className="mx-2" onClick={confirmar}> Confirmar </Button>
        </>
    )

}

export default ItemCount