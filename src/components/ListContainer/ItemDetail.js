import { Card, ListGroup, ListGroupItem, Container, Button } from 'react-bootstrap'
import ItemCount from "./ItemCount"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import contexto from '../../Context/CartContext'


const ItemDetail = ({ item }) => {

    const {addItem, isInCart} = useContext(contexto)
    const [unidades, setUnidades] = useState()

    const onAdd = (cantidad) => {
        setUnidades(cantidad)

        const ItemToAdd = {
            quantity : cantidad,
            ...item

        }

        if (isInCart(item.id)) {
            alert("Ya esta en el carrito")
        }else{
            addItem(ItemToAdd)
        }
    }





    return (
        <Container className="d-flex justify-content-center">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{item.category}</ListGroupItem>
                </ListGroup>

                {
                    unidades > 0 ? (
                        <Card.Body>
                            <Button variant="dark" onClick={() => setUnidades(0)}><Link className="links m-1" to='/tienda'> Seguir comprando </Link></Button>
                            <Button variant="dark"><Link className="links m-1" to='/Cart'> Terminar Compra </Link></Button>
                        </Card.Body>
                    ) : (

                        <Card.Body>
                            <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                        </Card.Body>
                    )
                }

            </Card>
        </Container>
    )
}

export default ItemDetail
