import React from 'react'
import { Link } from 'react-router-dom';

function PostCard({ id, title, body }) {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Post {id}</strong>
                    <h3 className="mb-0">{title}</h3>

                    <p className="card-text mb-auto">
                        {body}
                    </p>

                    <Link to={'/post/' + id} className="stretched-link" />
                </div>
            </div>
        </div>
    );
}

export default PostCard;