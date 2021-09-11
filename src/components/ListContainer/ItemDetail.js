import ItemCount from "./ItemCount"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import contexto from '../../Context/CartContext'


const ItemDetail = ({ item }) => {

    const { addItem, isInCart } = useContext(contexto)
    const [unidades, setUnidades] = useState()

    const onAdd = (cantidad) => {
        setUnidades(cantidad)

        const ItemToAdd = {
            quantity: cantidad,
            ...item

        }

        if (isInCart(item.id)) {
            alert("Ya esta en el carrito")
        } else {
            addItem(ItemToAdd)
        }
    }





    return (
        <>
            <div className="container__card">
                <div className="card__detail">
                    <div className="card__head">
                        <img src={item.image} alt="Shoe" className="product-img" width='120%'></img>
                        <div className="product-detail">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                    <div className="card__body">
                        <div className="product-desc">
                            <span className="product-title"><b>{item.title}</b></span>
                            <span className="product-caption">{item.description}</span>
                            <span className="product-price">USD<b>{item.price}</b></span>
                        </div>
                        <div className="product-properties">
                            <span className="product-stock">
                                <h4>Stock</h4>
                                <span className="stock">{item.stock}</span>
                            </span>
                        </div>            
                        {unidades > 0 ? (
                            <div className='buttonsFinish'>
                                <button className='buttons m-1' onClick={() => setUnidades(0)}><Link to='/tienda'> Seguir comprando </Link></button>
                                <button className='buttons m-1'><Link to='/Cart'> Terminar Compra </Link></button>
                            </div>
                        ) : (
                            <div>
                                <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail


        /*
        <Container className="d-flex justify-content-center">
            
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="left" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Categoria: {item.category}</ListGroupItem>
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
            */