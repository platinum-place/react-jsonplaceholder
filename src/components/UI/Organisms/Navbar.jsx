import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../Molecules/Nav';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">WebApp</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;