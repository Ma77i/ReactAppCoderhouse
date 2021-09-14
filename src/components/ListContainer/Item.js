import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {

    return (

        <Card className="m-2 cardCont" style={{ width: '16rem' }} >
            <Link to={`/detail/${producto.id}`} className='links'>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body className='cardBody'>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text className='productPrice'>${producto.price}</Card.Text>
                    <Card.Text>Tipo: {producto.description}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
};

export default Item;
