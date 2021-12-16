import React, { useEffect, useState } from 'react'
import AlbumCard from '../Molecules/AlbumCard';

function AlbumsGrid() {
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
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        albums.map((album, i) =>
                            <div className="col">
                                <AlbumCard
                                    key={i}
                                    id={album.id}
                                    title={album.title}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default AlbumsGrid;