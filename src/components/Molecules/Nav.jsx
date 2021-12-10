import React from 'react';
import Item from '../Atoms/Item';

function Nav() {
    return (
        <ul className="navbar-nav ml-auto">
            <Item
               name="Inicio"
               url="/"
            />
        </ul>
    );
}

export default Nav;