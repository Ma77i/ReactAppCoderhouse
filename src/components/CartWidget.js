import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import contexto from "../Context/CartContext";
import { useContext } from "react"; 

const CartWidget = () => {
    
    const { getTotalQuantity } = useContext(contexto)

    return (
        <>
            <Link to='/Cart' className="material-icons carro links">shopping_cart</Link>
            <Badge className='unitBadge' bg="danger">{getTotalQuantity()}</Badge>
        </>
    )
}

export default CartWidget