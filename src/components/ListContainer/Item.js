import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {

    return (
        
        <Card className="m-1 border-3" style={{ width: '16rem' }}>
            <Link to={`/detail/${producto.id}`} className='links'>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>${producto.price}</Card.Text>
                    <Card.Text>Tipo: {producto.description}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
};

export default Item;
