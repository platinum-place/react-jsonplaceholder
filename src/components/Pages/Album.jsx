import React from 'react'
import { useParams } from 'react-router-dom';
import PhotoGrid from '../UI/Organisms/PhotosGrid';
import PostSidebar from '../UI/Organisms/PostSidebar';

function Album() {
    let params = useParams();

    return (
        <div className="row g-5">
            <div className="col-md-8">
                <h3 className="pb-4 mb-4 fst-italic border-bottom">
                    Album {params.id}
                </h3>

                <PhotoGrid />
            </div>

            <div className="col-md-4">
                <PostSidebar />
            </div>
        </div>
    );
}

export default Album;