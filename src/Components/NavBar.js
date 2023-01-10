import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// styles
import "./NavBarStyles.css";

// components
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import Logo from "../Assets/logo.png";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant='dark' sticky="top" expand="lg" id="nav_container">
            <NavbarBrand as={Link} to="/" id="nav_title">UNC Links</NavbarBrand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/ital-241">ITAL 241</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/econ-520">ECON 520</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar