import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {

    const agregar = () => {
        console.log("Stock:" + producto.stock + "\nID:" + producto.id )

    }

    return (
        
        <Card className="m-1 border-3" style={{ width: '16rem' }}>
            <Link to={`/detail/${producto.id}`} className='links'>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>{producto.price}</Card.Text>
                    <Button variant="primary" onClick={agregar}>Agregar</Button>
                </Card.Body>
            </Link>
        </Card>
        
        /*
        <Card className='m-2'>
        <Link to={`/detail/${producto.id}`} style={{ width: '16rem' }}>
            <Card.Img variant="top" src={producto.image} width='20%'/>
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={agregar}>Agregar</Button>
            </Card.Footer>
            </Link>
        </Card>
        */
    )
};

export default Item;
