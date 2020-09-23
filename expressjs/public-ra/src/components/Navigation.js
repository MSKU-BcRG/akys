import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation() {

    return (
        <Navbar sticky="top" id="navbar" className="mb-1 navbar bg-dblue navbar-expand-lg navbar-dark" collapseOnSelect bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container justify-content-none">
                    <Nav.Link className="nav-item p-1">
                        <Link to="/" className="nav-link" >Home</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item p-1 ml-auto res-button">
                        <Link to="/signup" className="nav-link" >Register</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item p-1 ">
                        <Link to="/login" className="nav-link" >Login</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation;