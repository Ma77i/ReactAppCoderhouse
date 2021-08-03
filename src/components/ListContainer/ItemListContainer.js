import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { Container } from 'react-bootstrap'
import { useState, useEffect } from "react"
import { POKES } from "../usuarios"


const ItemListContainer = (greeting) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Llegue al setTimeOut?");
                resolve(usuarios)
            }, 2000)
        })

        promise.then((usuarios) => {
            console.log("llegamos");
            setUsuarios(POKES)})

    }, [])


    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return (
        <Container>
            <h1>{greeting.welcome}</h1>
            <ItemList usuarios={usuarios} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Container>
    )
}


export default ItemListContainer