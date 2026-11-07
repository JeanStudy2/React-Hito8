import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

let NavBar = () => {

const {totalCart} = useContext(CartContext)
const {token, setToken, logout} = useContext(UserContext)

    return(
        <>  
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#">Pizzeria Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 text-center"
                    // style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/">🍕Home</Nav.Link>
                    {token
                    ?<>
                        <Nav.Link as={Link} to="/profile">🔓Profile</Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={logout}>🔒Logout</Nav.Link>
                    </>
                    :<>
                        <Nav.Link as={Link} to="/login">🔐Login</Nav.Link>
                        <Nav.Link as={Link} to="/register" >🔐Register</Nav.Link>
                    </>}
                </Nav>
                
                    
                <Button as={Link} to="/cart" variant="outline-success">🛒 Total: ${totalCart.toLocaleString()}</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar