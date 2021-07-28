import CartWidget from "./CartWidget"


import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

const NavBar = () =>
    <nav>
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Tienda</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                </Container>
                <CartWidget></CartWidget>
            </Navbar>
            
        </>     
        
    </nav>

    export default NavBar