import CartWidget from "./CartWidget"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import contexto from "../Context/CartContext";
import { useContext } from "react";

const NavBar = () => {

    const { carro } = useContext(contexto)


    return (
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="sm">

            <Container className='p-0'>
                <Navbar.Brand><Link to='/tienda' className="links"><img src="../img/pokebola.png" alt="Pokebola/Logo" width='40' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navBar" navbarScroll>
                        <Nav.Link><Link to='/' className="links">INICIO</Link></Nav.Link>
                        <Nav.Link><Link to='/tienda' className="links">POKEDEX</Link></Nav.Link>
                        <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
                            <Link to='/category/1' className="links"><NavDropdown.Item href="#action/3.1">CATEGORIA 1</NavDropdown.Item></Link>
                            <Link to='/category/2' className="links"><NavDropdown.Item href="#action/3.1">CATEGORIA 2</NavDropdown.Item></Link>
                            <Link to='/category/3' className="links"><NavDropdown.Item href="#action/3.1">CATEGORIA 3</NavDropdown.Item></Link>
                        </NavDropdown>
                    </Nav>
                    {(carro.length > 0) ?
                        (<CartWidget />) : <br />
                    }
                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}
export default NavBar