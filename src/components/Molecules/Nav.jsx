import React from 'react';
import Item from '../Atoms/Item';

function Nav() {
    return (
        <ul className="navbar-nav ml-auto">
            <Item
                name="Home"
                url="/"
            />

            <Item
                name="Posts"
                url="/posts"
            />

            <Item
                name="Albums"
                url="/albums"
            />
        </ul>
    );
}

export default Nav;