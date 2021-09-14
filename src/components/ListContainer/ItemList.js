import Item from "./Item"
import { Container, Row } from 'react-bootstrap'

const ItemList = ({ items }) => {
    //console.log(items)
    return (
        <Container>
            <Row>
                {items.map(prod => <Item producto={prod} key={prod.id} />)}
            </Row>
        </Container>
    )
}

export default ItemList