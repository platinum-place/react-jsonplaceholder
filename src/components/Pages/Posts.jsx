import React from 'react';
import Article from '../Molecules/Article';
import PostGrid from '../Templates/PostGrid';

function Pokedex() {
    return (
        <>
        <Article
            titulo="Title of a longer featured blog post"
            descripcion='Este es un ejemplo de uso del endpoint "https://jsonplaceholder.typicode.com/posts".
            Donde cada publicacion tiene sus comentarios.'
        />

        <PostGrid />
    </>
    );
}

export default Pokedex;