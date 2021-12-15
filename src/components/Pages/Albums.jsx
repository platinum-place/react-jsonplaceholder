import React from 'react';
import AlbumGrid from '../Templates/AlbumGrid';
import Article from '../Molecules/Article';

function Albums() {
    return (
        <>
            <Article
                titulo="Albums example"
                descripcion='Este es un ejemplo de uso del endpoint "https://jsonplaceholder.typicode.com/albums".
                Cada tarjeta es un album que muestra las fotos que tenga asociado.'
            />

            <AlbumGrid />
        </>
    );
}

export default Albums;