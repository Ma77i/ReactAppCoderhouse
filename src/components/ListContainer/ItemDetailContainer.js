import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
//import { POKES } from "../../data"
import Loading from "../Loading";
import {firestore} from '../../firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [state, setState] = useState('pendiente')
    const detailParams = useParams()
    
    useEffect(() => {

        const dataBase = firestore;
        const collection = dataBase.collection('products');

        if (detailParams.id) {

            const filter = collection.doc(detailParams.id)
            const query = filter.get()

            query.then((results) => {
                const id = results.id;

                const data = results.data()
                const data_final = {id, ...data}
                setProduct(data_final)

            }).finally(() => {
                setState('Terminado')
            })
        }else{
            setState('Terminado')
        }

        

    }, [detailParams.id]);

    if (state === 'pendiente') {
        return (
            <Container>
            <h1>Detalles</h1>
            <Loading />
        </Container>
        )
    }


    return (
        <Container>
            <h1>Detalles</h1>
            <ItemDetail item={product} />
        </Container>
        )

}

export default ItemDetailContainer
