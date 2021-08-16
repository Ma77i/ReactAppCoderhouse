
import ItemList from "./ItemList"
import { Container } from 'react-bootstrap'
import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { POKES } from "../../data"
import Loading from "../Loading";


const ItemListContainer = ({ greeting }) => {


    const [data, setData] = useState([])

    const [load, setLoad] = useState(true)
    const params = useParams()
    console.log(load);

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {

            setLoad(true)

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
        }).then(setLoad(false))


    }, [params]);
    
        return <>
                {data.length 
                ?
                    <Container>
                        <h1>{greeting}</h1>
                        <ItemList items={data} />
                    </Container>
                :
                    <Container>
                        <h1>{greeting}</h1>
                        <Loading />
                    </Container>}
                </>
}


export default ItemListContainer