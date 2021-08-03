import {useState} from "react"
import {Button, Container} from 'react-bootstrap';
const ItemCount = ({ stock , initial , onAdd }) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > initial){
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
            
            <Container>
                <Button variant="primary" className="mx-1" onClick={restarContador}> - </Button>
                <Button variant="secondary" className="mx-1" onClick={restarContador}>Cantidad: {contador}</Button>
                <Button variant="primary" className="mx-1" onClick={aumentarContador}> + </Button>
                <Button variant="primary" className="mx-1" onClick={confirmar}> Confirmar </Button>
            </Container>
        </>
    )

}

export default ItemCount