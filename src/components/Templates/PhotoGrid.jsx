import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PhotoCard from '../Organisms/PhotoCard';

function PhotoGrid() {
    const [photos, setPhotos] = useState([
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        }
    ])

    let params = useParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + params.id)
            .then((response) => response.json())
            .then((json) => setPhotos(json));
    }, [])

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                photos.map((photo, i) =>
                    <PhotoCard
                        key={i}
                        id={photo.id}
                        title={photo.title}
                        url={photo.url}
                    />)
            }
        </div>
    );
}

export default PhotoGrid;