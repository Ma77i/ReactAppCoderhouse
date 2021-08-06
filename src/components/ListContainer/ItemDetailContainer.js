import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import { POKES } from "../data"


const ItemDetailContainer = () => {
    // Implementar mock invocando a getItems() y utilizando el resolver then

    const [product, setProduct] = useState([])

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(POKES);
                reject("error al traer producto");
            }, 2000);
        });
    };

    useEffect(() => {
        setProduct([]);
        getItems().then((res) => setProduct(res));
    }, []);
    console.log(product);


    /* JSX que devuelva un ItemDetail (desafío 6b) */
    return (
        <Container>
            {product.map(prod => <ItemDetail item={prod} />)}
        </Container>
    )

}

export default ItemDetailContainer