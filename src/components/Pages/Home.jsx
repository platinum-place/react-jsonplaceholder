import React from 'react'
import Card from '../UI/Molecules/Card';

function Home() {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <Card
                tittle="Consumidor de JSONPlaceholder"
                text="Esta en una webapp con el fin de consumir una API falsa gratuita para pruebas y creación de prototipos."
            />
        </div>
    );
}

export default Home;