import { useState, useEffect } from "react";
import { Provider } from "./Context";
import { firestore } from "../firebase";
import firebase from 'firebase/app';
import 'firebase/firestore'

const CustomProvider = ({ children }) => {

    const [carro, setCarro] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const [orderId, setOrderId] = useState();
    const [error, setError] = useState(false)
    const [comprador, setComprador] = useState({
        name: "",
        mail: "",
        phone: ""
    });



    useEffect(() => {
        const totalFinal = Object.values(carro).reduce((acumulador, { quantity, price }) => acumulador + quantity * price, 0);
        setTotalPrice(totalFinal);
    }, [carro, totalPrice])


    const addItem = (item) => {
        setCarro([...carro, item]);
    }

    const removeItem = (itemId) => {
        const eliminar = carro.filter(item => itemId !== item.id)
        setCarro(eliminar)
    }

    const clear = () => {
        setCarro([])
    }

    const isInCart = (id) => {
        return carro.some(producto => producto.id === id)
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

    const dataBase = firestore;
    const order = dataBase.collection('order');

    const dataHandler = (e) => {
        setComprador({ ...comprador, [e.target.name]: e.target.value });
    }

    const saveOrder = () => {

        if (validate) {
            const newOrder = {
                buyer: comprador,
                items: carro,
                data: firebase.firestore.Timestamp.fromDate(new Date()),
                total: totalPrice,
            };
            order.add(newOrder).then(({ id }) => {
                setOrderId(id);
                console.log('ID de compra', id);
                setError(false)
                //clear();
            }).catch(error => {
                setError(error);
            }).finally(() => {
                setError(false)
            });
        } else {
            setError(true)
        }
    }
    console.log(comprador.name.trim())

    const validate = () => {
        if (comprador.name.trim().length && comprador.phone.trim().length && comprador.mail.trim().length) {
            return true
        } else {
            return false
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
        totalPrice, setTotalPrice,
        error, setError,
        saveOrder,
        dataHandler,
        comprador
    }

    return (
        <Provider value={contexto_para_consumir}>
            {children}
        </Provider>

    )
}

export default CustomProvider;