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
                <div className='quant'>
                    <button className="quantOp mx-2" onClick={restarContador}><b> - </b></button>
                    <Badge bg="success">{contador}</Badge>
                    <button className="quantOp mx-2" onClick={aumentarContador}><b> + </b></button>
                </div>
                <button className="buttons m-3" onClick={confirmar}><b>Agregar al carrito</b></button>
            </div>
            
        </>
    )

}

export default ItemCount