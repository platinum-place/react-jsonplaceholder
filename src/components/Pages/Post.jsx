import React from 'react'
import { useParams } from 'react-router-dom';
import PostArticle from '../UI/Molecules/PostArticle';
import CommentsGrid from '../UI/Organisms/CommentsGrid';
import PostSidebar from '../UI/Organisms/PostSidebar';


function Post() {
    let params = useParams();

    return (
        <div className="row g-5">
            <div className="col-md-8">
                <h3 className="pb-4 mb-4 fst-italic border-bottom">
                    Post {params.id}
                </h3>

                <PostArticle postId={params.id} />

                <CommentsGrid postId={params.id} />
            </div>

            <div className="col-md-4">
                <PostSidebar />
            </div>
        </div>
    );
}

export default Post;