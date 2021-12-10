import React from 'react'
import { Link } from 'react-router-dom';

function PokemonCard({ tipoPrimario, tipoSecundario, nombre, descripcion, imagen, id }) {
    return (
        <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">{tipoPrimario + '/' + tipoSecundario}</strong>
                    <h3 class="mb-0">{nombre}</h3>
                    <p class="card-text mb-auto"> {descripcion} </p>
                    <a href="#" class="stretched-link"></a>
                    <Link to={'/pokemon/' + id} class="stretched-link" />
                </div>

                <div class="col-auto d-none d-lg-block">
                    <img
                        class="bd-placeholder-img" width="200" height="250"
                        src={imagen}
                        alt={nombre}
                    />
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;