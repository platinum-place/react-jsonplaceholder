import React from 'react'
import { Link } from 'react-router-dom';

function Card({ tittle, text, buttonTittle, url }) {
    return (
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{tittle}</h1>
            <p className="col-md-8 fs-4">{text}</p>

            {
                buttonTittle ?
                    <Link to={url} className="btn btn-primary btn-lg">{buttonTittle}</Link>
                    :
                    <></>
            }
        </div>
    );
}

export default Card;