import React from 'react'
import PokemonCard from '../Organisms/PokemonCard';

function PokedexGrid() {

    const pokedex = [
        {
            "tipoPrimario": "Rayo",
            "tipoSecundario": "Rayo",
            "nombre": "Rayo",
            "descripcion": "Rayo",
            "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        },
        {
            "tipoPrimario": "Rayo",
            "tipoSecundario": "Rayo",
            "nombre": "Rayo",
            "descripcion": "Rayo",
            "imagen": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        }
    ]

    return (
        <div class="row mb-2">
            {
                pokedex.map(pokemon =>
                    <PokemonCard
                        tipoPrimario={pokemon.tipoPrimario}
                        tipoSecundario={pokemon.tipoSecundario}
                        nombre={pokemon.nombre}
                        descripcion={pokemon.descripcion}
                        imagen={pokemon.imagen}
                    />
                )
            }
        </div>
    );
}

export default PokedexGrid;