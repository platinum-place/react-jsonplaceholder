import React from 'react'

function CommentCard({ id, name, email, body }) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <p>{body}</p>

                <p className="small mb-0 ms-2">{email}</p>
            </div>
        </div>
    );
}

export default CommentCard;