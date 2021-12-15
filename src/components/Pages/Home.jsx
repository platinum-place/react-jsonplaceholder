import React from 'react';
import Article from '../Molecules/Article';

function Home() {
    return (
            <Article
                titulo="Consumidor de JSONPlaceholder"
                descripcion="Esta en una webapp con el fin de consumir 
            una API falsa gratuita para pruebas y creación de prototipos."
            />
    );
}

export default Home;