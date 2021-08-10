import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'


const ItemDetail = ({ item }) => {

    return (

        /*Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio*/
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{item.category}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Comprar</Card.Link>
                <Card.Link href="#">Agregar al Carrito</Card.Link>
            </Card.Body>
        </Card>

    )
}

export default ItemDetail