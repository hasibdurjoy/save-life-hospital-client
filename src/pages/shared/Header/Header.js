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
                        <NavLink to="/icu" activeStyle={navStyle}>ICU</NavLink>
                    </Nav>
                    <Nav>

                        {
                            user?.email ? <>
                                <Nav.Link className="text-dark"><button className="btn btn-light rounded-pill">{user.displayName}</button></Nav.Link>

                                <Nav.Link onClick={logOut} as={Link} to="/" className="text-light"><button className="btn btn-danger rounded-pill">Log Out</button></Nav.Link>
                            </>
                                : <>
                                    <Nav.Link as={Link} to="/login" className=" text-light"><button className="btn btn-danger rounded-pill">Login</button></Nav.Link>

                                    <Nav.Link as={Link} to="/register" className="text-light"><button className="btn btn-primary rounded-pill">Register</button></Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;