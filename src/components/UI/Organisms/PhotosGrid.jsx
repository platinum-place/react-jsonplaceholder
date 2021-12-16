import React, { useEffect, useState } from 'react';
import PhotoCard from '../Molecules/PhotoCard';

function PhotoGrid({ albumId }) {
    const [photos, setPhotos] = useState([
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        }
    ])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then((response) => response.json())
            .then((json) => setPhotos(json));
    }, [albumId])

    return (
        <div className="row">
            {
                photos.map((photo, i) =>
                    <div className="col-lg-4">
                        <PhotoCard
                            key={i}
                            id={photo.id}
                            title={photo.title}
                            url={photo.url}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default PhotoGrid;