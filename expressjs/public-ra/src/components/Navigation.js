import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [userResponse, setUserResponse] = useState([]);
    const [username, setUsername] = useState([]);

    useEffect(() => {
        fetch("/api/auth")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUserResponse(data.message);
                setUsername(data.username);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (userResponse !== "user available") {
        return (
            <div>
                <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dblue" >
                    <a href="/" className="navbar-brand"></a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                        aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                        <div className="container">
                            <ul className="navbar-nav">
                                <li className="nav-item p-1">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item p-1"><Link to="/signup" className="nav-link">Register</Link></li>
                                <li className="nav-item p-1"><Link to="/login" className="nav-link">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    } else {
        return (
            <div>
                <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dblue" >
                    <a href="/" className="navbar-brand"></a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                        aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                        <div className="container">
                            <ul className="navbar-nav">
                                <li className="nav-item p-1"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item p-1"><Link to="/needs" className="nav-link">Needs</Link></li>
                                <li className="nav-item p-1"><Link to="/supports" className="nav-link">Supports</Link></li>
                                <li className="nav-item p-1"><Link to="/confirmed_needs" className="nav-link">Approved Needs</Link></li>
                                <li className="nav-item p-1"><Link to="/confirmed_supports" className="nav-link">Approved Supports</Link></li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-3 mt-1 row">
                                    <span className="navbar-text c-white pr-1">Welcome,</span>
                                    <span className="navbar-text">{username}</span>
                                </li>
                                <li className="nav-item p-1"><form action="/api/logout" method="POST" className="mt-7px"><button className="logout-button nav-link" type="submit">Logout</button></form></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;