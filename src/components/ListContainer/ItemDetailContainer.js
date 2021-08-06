import {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import { POKES } from "../data"

const getItems = () => { 
    /* Esta función debe retornar la promesa que resuelva con delay */

}
const ItemDetailContainer = () => {
// Implementar mock invocando a getItems() y utilizando el resolver then

    const [product, setProduct] = useState([])

    useEffect(() => {
        
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(POKES)
            }, 2000);
        })
        promise.then(() => {
            console.log("promesa con delay");
        })
    }, [])


    /* JSX que devuelva un ItemDetail (desafío 6b) */
    return (
        <Container>
            <ItemDetail/>
        </Container>
        )

}

export default ItemDetailContainer