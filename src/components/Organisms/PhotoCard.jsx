import React from 'react'

function PhotoCard({ id, title, url }) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={url} alt={title} width="100%" height="225" className="bd-placeholder-img card-img-top" />

                <div className="card-body">
                    <h5 className="card-title"> {'Photo ' + id}</h5>

                    <p className="card-text">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;