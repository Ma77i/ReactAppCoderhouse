import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import contexto from "../Context/CartContext";
import { useContext } from "react"; 

const CartWidget = () => {
    
    const { getTotalQuantity } = useContext(contexto)

    return (
        <div >
            <Link to='/Cart' className='cartWidget links'>
                <Badge bg="danger">{getTotalQuantity()}</Badge>
                <span className="material-icons carro">shopping_cart</span>
            </Link>
        </div>
    )
}

export default CartWidget