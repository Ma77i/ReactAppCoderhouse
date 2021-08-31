import { useState } from "react";
import { Provider } from "../Context/CartContext";


const CustomProvider = ({children}) => {

    const [carro, setCarro] = useState([])
    const [total, setTotal] = useState(0)
    
    const [orderId, setOrderId] = useState();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")

    const totalPrice = () => {
        const totalFinal = Object.values(carro).reduce((acumulador, { quantity, price }) => acumulador + quantity * price, 0);
        setTotal(totalFinal);
    }    

    const addItem = (item) => {
        setCarro([...carro,item]);
    }

    const removeItem = (itemId) => {
        const eliminar = carro.filter(item=>itemId !== item.id)
        setCarro(eliminar)
        totalPrice()
    }

    const clear = () => {
        setCarro([])
    }

    const isInCart = (id) => {
        return carro.some(producto=>producto.id === id)
    }

    const getTotalQuantity = () => {
        if (carro.length === 0) {
            return 0
        }

        if (carro.length === 1) {
            return carro[0].quantity
        } else {
            return carro.reduce((sum, item) => {
                if (typeof sum === 'object') {
                    sum = sum.quantity
                }
                return sum + item.quantity
            })
        }
    }


    const contexto_para_consumir = {
        orderId, 
        setOrderId,
        carro,
        addItem,
        removeItem,
        clear,
        isInCart, 
        getTotalQuantity, 
        phone, setPhone,
        name, setName,
        mail,setMail,
        total, setTotal, 
        totalPrice
    }

    return (
        <Provider value={ contexto_para_consumir}>
            {children}
        </Provider>

    )
}

export default CustomProvider;