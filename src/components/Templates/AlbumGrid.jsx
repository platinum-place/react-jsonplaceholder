import React, { useEffect, useState } from 'react'
import AlbumCard from '../Organisms/AlbumCard';

function AlbumGrid() {
    const [albums, setAlbums] = useState([
        {
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
        }
    ])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((json) => setAlbums(json));
    }, [])

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                albums.map((album, i) =>
                    <AlbumCard
                        key={i}
                        id={album.id}
                        title={album.title}
                    />)
            }
        </div>
    );
}

export default AlbumGrid;