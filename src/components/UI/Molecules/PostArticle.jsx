import React, { useEffect, useState } from 'react';

function PostArticle({ postId }) {
    const [post, setPost] = useState({
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, [postId])

    return (
        <article className="blog-post">
            <h2 className="blog-post-title">{post.title}</h2>

            <p className="blog-post-meta">January 1, 2021 by</p>

            <hr />

            <p>
                {post.body}
            </p>
        </article>
    );
}

export default PostArticle;