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
    const {id} = useParams()
    
    useEffect(() => {

        const dataBase = firestore;
        const collection = dataBase.collection('products');

        if (id) {

            const filter = collection.doc(id)
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

        

    }, [id]);

    if (state === 'pendiente') {
        return (
            <Loading />
        )
    }


    return (
        <Container>
            <ItemDetail item={product} />
        </Container>
        )

}

export default ItemDetailContainer
