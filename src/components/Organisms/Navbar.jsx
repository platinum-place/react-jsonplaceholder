import React from 'react';
import Nav from '../Molecules/Nav';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Pokedex</span>
                <Nav />
            </div>
        </nav>
    );
}

export default Navbar;