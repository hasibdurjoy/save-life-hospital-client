import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="header-container" collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img
                        alt=""
                        src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Save Life Hospital
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            user?.email ? <>
                                <Nav.Link as={Link} to="/login" className="btn btn-outline-dark rounded-pill text-dark">{user?.displayName}</Nav.Link>
                                <Nav.Link onClick={logOut} as={Link} to="/" className="btn btn-danger rounded-pill text-light">Logout</Nav.Link>
                            </>
                                : <>
                                    <Nav.Link as={Link} to="/login" className="btn btn-danger px-4 rounded-pill text-light">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register" className="btn btn-primary px-4 rounded-pill text-light">Register</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;