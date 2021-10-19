import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    const navStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <Navbar className="header-container" collapseOnSelect expand="lg" variant="light">
            <Container className="px-0">
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{'  '}
                    Save Life Hospital
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="me-auto">
                        <NavLink to="/home" activeStyle={navStyle}>Home</NavLink>
                        <NavLink to="/services" activeStyle={navStyle}>Services</NavLink>
                        <NavLink to="/doctors" activeStyle={navStyle}>Doctors</NavLink>
                        <NavLink to="/pathology" activeStyle={navStyle}>Pathology</NavLink>
                        <NavLink to="/ambulances" activeStyle={navStyle}>Ambulances</NavLink>
                        <NavLink to="/nurses" activeStyle={navStyle}>Nurses</NavLink>
                    </Nav>
                    <Nav>

                        {
                            user?.email ? <>
                                <Nav.Link className="btn btn-light rounded-pill mx-3 px-3 text-dark">{user.displayName}</Nav.Link>
                                <Nav.Link onClick={logOut} as={Link} to="/" className="btn btn-danger rounded-pill text-light px-3">Logout</Nav.Link>
                            </>
                                : <>
                                    <Nav.Link as={Link} to="/login" className="btn btn-danger px-4 rounded-pill text-light me-2">Login</Nav.Link>
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