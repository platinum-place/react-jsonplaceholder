import React from 'react'
import { Link } from 'react-router-dom';

function AlbumCard({ id, title }) {
    return (
        <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
                <h5 className="card-title"> {'Album ' + id}</h5>

                <p className="card-text">{title}</p>

                <Link to={'/album/' + id} className="stretched-link" />
            </div>
        </div>
    );
}

export default AlbumCard;