import React from 'react'

function PhotoCard({ id, title, url }) {
    return (
        <>
            <img src={url} alt={id} className="bd-placeholder-img rounded-circle" width="140" height="140" />

            <h2>{title}</h2>
        </>
    );
}

export default PhotoCard;