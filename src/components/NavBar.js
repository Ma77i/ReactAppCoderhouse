import CartWidget from "../Context/CartWidget"
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = () => {


    return (    
    <nav>
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="sm">

                <Container className='p-0'>
                    <Navbar.Brand><Link to='/tienda' className="links"><img src="../img/pokebola.png" alt="Pokebola/Logo" width='40' /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" navbarScroll>
                            <Nav.Link><Link to='/' className="links">Inicio</Link></Nav.Link>
                            <Nav.Link><Link to='/category/1' className="links">CAT1</Link></Nav.Link>
                            <Nav.Link><Link to='/category/2' className="links">CAT2</Link></Nav.Link>
                            <Nav.Link><Link to='/category/3' className="links">CAT3</Link></Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                    
                </Container>
                
            </Navbar>
            
        </>     
        
    </nav>
    )
}
    export default NavBar