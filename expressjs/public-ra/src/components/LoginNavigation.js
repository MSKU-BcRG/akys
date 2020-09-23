import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function LoginNavigation(props) {

    return (
        <Navbar sticky="top" id="navbar" className="mb-1 navbar bg-dblue navbar-expand-lg navbar-dark" collapseOnSelect bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container justify-content-none">
                    <Nav.Link className="nav-item p-1">
                        <Link to="/" className="nav-link" >Home</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item p-1">
                        <Link to="/needs" className="nav-link" >Needs</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item p-1">
                        <Link to="/supports" className="nav-link" >Supports</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item p-1">
                        <Link to="/confirmed_needs" className="nav-link" >Approved Needs</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-item p-1">
                        <Link to="/confirmed_supports" className="nav-link" >Approved Supports</Link>
                    </Nav.Link>
                    <li className="nav-item mr-3 mt-1 row ml-auto">
                        <span className="navbar-text c-white pr-1">Welcome,</span>
                        <span className="navbar-text">{props.username}</span>
                    </li>
                    <li className="nav-item p-1 lognav "><a href="/api/logout" className="c-white nav-link">Logout</a></li>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default LoginNavigation;