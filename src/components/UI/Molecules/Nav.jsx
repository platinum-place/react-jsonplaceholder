import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/albums" className="nav-link">Albums</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/posts" className="nav-link">Posts</NavLink>
            </li>
        </ul>
    );
}

export default Nav;