import React from 'react'
import { Link } from 'react-router-dom';

function PokemonCard({ tipoPrimario, tipoSecundario, nombre, descripcion, imagen, id }) {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{tipoPrimario + '/' + tipoSecundario}</strong>
                    <h3 className="mb-0">{nombre}</h3>
                    <p className="card-text mb-auto"> {descripcion} </p>
                    <Link to={'/pokemon/' + id} className="stretched-link" />
                </div>

                <div className="col-auto d-none d-lg-block">
                    <img
                        className="bd-placeholder-img" width="200" height="250"
                        src={imagen}
                        alt={nombre}
                    />
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
