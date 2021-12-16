import React from 'react'
import Card from '../UI/Molecules/Card';
import AlbumsGrid from '../UI/Organisms/AlbumsGrid';

function Albums() {
    return (
        <>
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <Card
                    tittle="Albums example"
                    text='Ejemplo de uso del endpoint "https://jsonplaceholder.typicode.com/albums". 
                        Cada tarjeta es un album que muestra las fotos que tenga asociado.'
                />
            </div>

            <AlbumsGrid />
        </>
    );
}

export default Albums;