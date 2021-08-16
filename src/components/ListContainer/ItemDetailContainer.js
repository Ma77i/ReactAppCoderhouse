import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { POKES } from "../../data"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    
    const detailParams = useParams()
    useEffect(() => {


        const getItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {

                    resolve(POKES.find(item => item.id === detailParams.id));
                    reject("error al traer producto");
                }, 1000);
                
            });
        };

        setProduct({});
        getItems().then((resolve) => setProduct(resolve));

    }, [detailParams]);


    return (
        <Container>
            <h1>Detalles</h1>
            <ItemDetail item={product} />
        </Container>)

}

export default ItemDetailContainer
