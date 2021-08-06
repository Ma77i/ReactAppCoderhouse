import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { Container } from 'react-bootstrap'
import { useState, useEffect } from "react"
import { POKES } from "../data"


const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([])

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Llegue al setTimeOut?");
                resolve(POKES)
            }, 2000)
        })

        promise.then(() => {
            console.log("llegamos");
            setData(POKES)})

    });

//FUNCION PARA AGREGAR CANTIDADES
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return (
        <Container className="p-0">
            <h1>{greeting}</h1>
            <ItemList items={data} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Container>
    )
}


export default ItemListContainer