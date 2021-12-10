import React from 'react'
import PokemonCard from '../Organisms/PokemonCard';

function PokedexGrid() {
    return (
        <div class="row mb-2">
            <PokemonCard
                tipoPrimario="Rayo"
                tipoSecundario="Agua"
                nombre="Pikachu"
                descripcion="le gusta correr"
                imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            />
        </div>
    );
}

export default PokedexGrid;