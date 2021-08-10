import CartWidget from "./CartWidget"
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = () =>
    <nav>
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="sm">

                <Container>
                    <Navbar.Brand><Link to='/' className="links">Mi Tienda</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/' className="links">Inicio</Link></Nav.Link>
                            <Nav.Link><Link to='/tienda' className="links">Tienda</Link></Nav.Link>
                            <Nav.Link><Link to='/category/1' className="links">Ropa</Link></Nav.Link>
                            <Nav.Link><Link to='/category/2' className="links">Joyas</Link></Nav.Link>
                            <Nav.Link><Link to='/category/3' className="links">Electronica</Link></Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                    
                </Container>
                
            </Navbar>
            
        </>     
        
    </nav>

    export default NavBar