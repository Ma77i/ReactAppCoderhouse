import CartWidget from "./CartWidget"


import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

const NavBar = () =>
    <nav>
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="sm">

                <Container>
                    <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#features">Tienda</Nav.Link>
                            <Nav.Link href="#pricing">Contacto</Nav.Link>
                        </Nav>
                        <CartWidget></CartWidget>
                    </Navbar.Collapse>
                    
                </Container>
                
            </Navbar>
            
        </>     
        
    </nav>

    export default NavBar