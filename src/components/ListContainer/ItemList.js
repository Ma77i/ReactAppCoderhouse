import Item from "./Item"

const ItemList = ({ usuarios }) => {
    console.log(usuarios)
    return (
        <ul>
            {usuarios.map(usuario => {
                return <Item usuario={usuario} />
            })}

        </ul>
    )
}

export default ItemList