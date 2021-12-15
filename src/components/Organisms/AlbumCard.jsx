import React from 'react'
import { Link } from 'react-router-dom';

function AlbumCard({ id, title }) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title"> {'Album ' + id}</h5>

                    <p className="card-text">{title}</p>
                    
                    <Link to={'/album/' + id} className="stretched-link" />
                </div>
            </div>
        </div>
    );
}

export default AlbumCard;