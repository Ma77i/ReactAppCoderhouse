import ItemCount from "./ItemCount"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import contexto from '../../Context/Context'


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
                            <span className="product-price">$<b>{item.price}</b></span>
                        </div>
                        <div className="product-properties">
                            <span className="product-stock">
                                <h4>Stock</h4>
                                <span className="stock">{item.stock}</span>
                            </span>
                        </div>
                        {unidades > 0 ? (
                            <div className='buttonsFinish'>
                                <Link to='/Cart'><button className='buttons'> <b>Terminar Compra</b> </button></Link>
                                <Link to='/tienda'><button className='buttons' onClick={() => setUnidades(0)}> <b>Seguir comprando</b>  </button></Link>
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