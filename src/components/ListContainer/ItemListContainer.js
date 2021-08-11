import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { Container } from 'react-bootstrap'
import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { POKES } from "../data"


const ItemListContainer = ({ greeting }) => {


    const [data, setData] = useState([])
    const params = useParams()
    console.log(params);

    useEffect(() => {
        /*
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products?limit=12')
                .then(res=>res.json())
                .then(json=> {
                    console.log(json)
                    if (params.id) {
                        setData(json.filter(prod => prod.category === params.id))
                    } else {
                        setData(json)
                    }
                })
                .catch("Ocurrió un error al traer los productos")
        }, 2000);
        */

        
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("setTimeOut");
                if (params.id) {
                    resolve(POKES.filter(prod => prod.category === params.id))
                } else {
                    resolve(POKES)
                };
                reject("Ocurrió un error al traer los productos")
            }, 2000)
            
        })

        promise.then((resolve) => {
            console.log("Cargado con exito");
            setData(resolve)
        })
        

    }, [params]);

//FUNCION PARA AGREGAR CANTIDADES
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return (
        <Container>
            <h1>{greeting}</h1>
            <ItemList items={data} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Container>
    )
}


export default ItemListContainer