import { Card, Button } from 'react-bootstrap'


const Item = ({ producto }) => {

    return <Card className="m-1 border-3" style={{ width: '16rem' }}>
        <Card.Img variant="top" src={producto.pictureUrl} />
        <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>{producto.price}</Card.Text>
            <Button variant="primary">Agregar</Button>
        </Card.Body>
    </Card>;
};

export default Item;
