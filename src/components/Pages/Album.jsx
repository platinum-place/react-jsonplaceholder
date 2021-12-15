import React from 'react'
import { useParams } from 'react-router-dom';
import Article from '../Molecules/Article';
import PhotoGrid from '../Templates/PhotoGrid';

function Album() {
    let params = useParams();

    const titulo = "Album " + params.id 

    return (
        <>
            <Article
                titulo={titulo}
                descripcion='Haciendo uso del id del album, y el endpoint "https://jsonplaceholder.typicode.com/photos", podemos traer
                las fotos asociados al album, añadiendo el parametro de busqueda "?albumId=" al final del endpoint.'
            />

            <PhotoGrid />
        </>
    );
}

export default Album;