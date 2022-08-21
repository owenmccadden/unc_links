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
                        <Nav.Link as={Link} to="/geol-101">Geol 101</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/arth-387">Arth 387</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/econ-411">Econ 411</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link as={Link} to="/lfit-113">LFIT 113</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/comp-495">Comp 495</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar