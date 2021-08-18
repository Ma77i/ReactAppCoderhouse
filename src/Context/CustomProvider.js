import { useState } from "react";
import { Provider } from "../Context/CartContext";


const CustomProvider = ({children}) => {

    const [carro, setCarro] = useState([])

    const addItem = (item) => {

        setCarro([...carro,item]);
    }

    const removeItem = (itemId) => {}

    const clear = () => {}

    const isInCart = (id) => {}

    return (
        <Provider value={carro, addItem, removeItem, clear}>
            {children}
        </Provider>

    )
}
























/*
const CartProvider = ({ defaultState = [],children}) => {

    const [carrito, setCarrito] = useState(defaultState);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cartelAviso, setCartelAviso] = useState("");

    let frases = ["ya se encuentra en el carrito!", "Nada que agregar", "Todo listo!", "Vamos a eso!", "...un poco insistente...", "que tal si pasas por la tienda?", "cámbiale marge!", "No de nuevo decía!", "Aquí vamos otra vez", "No se si debiera...", "Eso no es posible", "No me la class=container", "hacele click al changuito del super..."];

    useEffect( () => {
        const total = Object.values(carrito).reduce( (acumulador, {cantidad, precio}) => acumulador + cantidad * precio, 0);
        setPrecioTotal(total);
    }, [carrito, precioTotal]);

    function agregarAlCarrito (producto, nuevaCantidad) {
        let yaExiste = carrito.find( (item) => item.id === producto.id);
        if (yaExiste) {
            if (yaExiste.cantidad === nuevaCantidad) {
                let frase = frases[Math.floor(Math.random()*frases.length)];
                setCartelAviso(frase);
                setTimeout( () => {setCartelAviso("")}, 900);
                return null;
            } else {
                const newProductos = carrito.map( (item) => {
                    if (item.id === producto.id) {
                        return {...item, cantidad: nuevaCantidad};
                    } return item;
                }
            )
            setCarrito([...newProductos]);
            setCartelAviso(`${producto.nombre} cambió su cantidad a ${nuevaCantidad}, en el carrito`);
            setTimeout( () => {setCartelAviso("")}, 2000);
            }
        } else {
            setCarrito([...carrito, {...producto, cantidad: nuevaCantidad}]);
            setCartelAviso( `${producto.nombre} se agregó al carrito`);
            setTimeout( () => {setCartelAviso("")}, 2000);
        }
    }

    function borrarDelCarrito (nombre, id) {
        const borrar = carrito.filter( (item) => item.id !== id);
        setCarrito(borrar);
        setCartelAviso( `${nombre} se borró del carrito`);
        setTimeout( () => {setCartelAviso("")}, 2000);
    }

    function vaciarCarrito () {
        setCarrito(defaultState);
        setCartelAviso( `se vació el carrito`);
        setTimeout( () => {setCartelAviso("")}, 2000);
    }

    return (
    <Provider value={{carrito, setCarrito, agregarAlCarrito, borrarDelCarrito, vaciarCarrito, precioTotal, cartelAviso}}>
        {children}
    </Provider>
    );
}
*/
export default CustomProvider;