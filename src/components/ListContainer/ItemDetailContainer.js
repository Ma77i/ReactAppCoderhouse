import { useState, useEffect, useParams } from 'react'
import { Container } from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import { POKES } from "../data"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const detailParams = useParams()
    console.log(detailParams);

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

/*
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products?limit=12/${detailParams.id}`)
                .then(res=>res.json())
                .then(json=> {
                    console.log(json);
                    setProduct(json)
                    
                })
                .catch("Ocurrió un error al traer los productos")
        }, 2000);
        */


    }, []);


    /* JSX que devuelva un ItemDetail (desafío 6b) */
    return (
        <Container>
            <h1>Items Detallados</h1>
            {product.map(produ => <ItemDetail item={produ} />)}
        </Container>
    )

}

export default ItemDetailContainer