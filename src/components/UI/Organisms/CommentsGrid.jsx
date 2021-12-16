import React, { useEffect, useState } from 'react';
import CommentCard from '../Molecules/CommentCard';

function CommentsGrid({ postId }) {
    const [comments, setComments] = useState([
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }
    ])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((json) => setComments(json));
    }, [postId])

    return (
        <div className="card shadow-0 border">
            <div className="card-body p-4">
                {
                    comments.map((comment, i) =>
                        <CommentCard
                            key={i}
                            id={comment.id}
                            name={comment.name}
                            email={comment.email}
                            body={comment.body}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default CommentsGrid;