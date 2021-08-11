import { useState, useEffect, useParams } from 'react'
import { Container } from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import { POKES } from "../data"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const detailParams = useParams()
    
    useEffect(() => {

        const getItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(POKES.filter(item => item.id === detailParams.id));
                    reject("error al traer producto");
                }, 2000);
            });
        };

        setProduct({});
        getItems().then((resolve) => setProduct(resolve));

    }, [detailParams.id]);

    return (
        <Container>
            <h1>Items Detallados</h1>
            <ItemDetail item={product} />
        </Container>
    )

}

export default ItemDetailContainer