import { Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap'
import ItemCount from "./ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ item }) => {


    const [unidades, setUnidades] = useState(1)
    const onAdd = (cantidad) => {
        console.log('State Uplifting, recibi la cantidad de un elemento hijo')
        setUnidades(cantidad)
        console.log(cantidad)
        //console.log(unidades)
    }



    /*Desarrollo de la vista de detalle expandida del producto con su imagen título, descripción y precio*/
    if (unidades > 0) {
        return (
            <Container className="d-flex justify-content-center">
                <Card style={{ width: '38rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{item.category}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Link to='/Cart'> Comprar </Link>
                        <Link> Agregar al Carrito </Link>
                        <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                    </Card.Body>
                </Card>
            </Container>
        )
    } else {
        return (
            <Container>
                <Card style={{ width: '38rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{item.category}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1:0} onAdd={onAdd} />
                    </Card.Body>
                </Card>
            </Container>
        )
    }

}

export default ItemDetail