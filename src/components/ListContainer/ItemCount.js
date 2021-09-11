import {useState, useEffect} from 'react'
import { Badge } from 'react-bootstrap';



const ItemCount = ({stock , initial , onAdd }) => {

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
    
    useEffect(() => {setContador(initial)},[initial])

    return (
        <>
            <div className='itemCount'>
                <div className='operators'>
                    <button className="buttons m-2" onClick={restarContador}> - </button>
                    <Badge bg="secondary">{contador}</Badge>
                    <button className="buttons m-2" onClick={aumentarContador}> + </button>
                </div>
                <button className="buttons m-3" onClick={confirmar}>Agregar al carrito</button>
            </div>
            
        </>
    )

}

export default ItemCount