import {useState, useEffect} from 'react'
import {Button, Container, Badge} from 'react-bootstrap';



const ItemCount = ({stock , initial , onAdd }) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }else{
            //console.log("No anda");
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
    
    useEffect(() => {setContador(initial)},[initial])

    return (
        <>
            <Container>
                <Button variant="dark" className="m-1" onClick={restarContador}> - </Button>
                <Badge bg="secondary">{contador}</Badge>
                <Button variant="dark" className="m-1" onClick={aumentarContador} > + </Button>
                <Button variant="dark" className="m-3" onClick={confirmar}> Confirmar </Button>
            </Container>
            
        </>
    )

}

export default ItemCount