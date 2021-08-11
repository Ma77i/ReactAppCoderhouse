import { Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap'
import ItemCount from "./ItemCount"


const ItemDetail = ({ item }) => {
    //FUNCION PARA AGREGAR CANTIDADES
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    return (

        /*Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio*/
        <Container>
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

            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Container>
    )


}

export default ItemDetail