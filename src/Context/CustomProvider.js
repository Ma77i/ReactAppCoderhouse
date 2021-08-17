
import { Provider } from './CartContext'

const CustomProvider = ({children}) => {

    const addItem = () => {
        console.log('Agregado')
    }

    return(
        <Provider value={{addItem}}>
            {children}
        </Provider>
    )

/*    
    const [items, setItems] = useState([])

    const addItem = (itemId, quantity) => {
        if (isInCart(itemId)) {
            // Este caso nunca se puede dar porque el botón de agregar al carrito
            // queda oculta después de agregar un producto.
            // Pero el desafío es el desafío...
            console.log('Error: el producto ya fue agregado.')
            return
        }

        setItems([...items, {id: itemId, quantity: quantity}])
    }

    const removeItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId))
    }

    const clear = () => {
        setItems([])
    }

    const isInCart = (id) => {
        return items.filter(item => item.id === id).length === 1
    }

    const getIds = () =>
        (items.length === 0) ? [] : items.map(item => item.id)

    const getProductQuantity = (id) => {
        if (items.length === 0) {
            return 0
        }

        const found = items.find(item => item.id === id)
        return found ? found.quantity : 0
    }

    const getTotalQuantity = () => {
        if (items.length === 0) {
            return 0
        }

        if (items.length === 1) {
            return items[0].quantity
        } else {
            return items.reduce((sum, item) => {
                if (typeof sum === 'object') {
                    sum = sum.quantity
                }
                return sum + item.quantity
            })
        }
    }

    const providerValues = {
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        clear: clear,
        isInCart: isInCart,
        getProductQuantity: getProductQuantity,
        getTotalQuantity: getTotalQuantity,
        getIds: getIds,
    }

    return (
        <Provider value={providerValues}>
            {children}
        </Provider>
    )
*/
}

export default CustomProvider