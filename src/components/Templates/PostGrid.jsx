import React, { useEffect, useState } from 'react'
import PostCard from '../Organisms/PostCard';

function PostGrid() {
    const [posts, setPosts] = useState([
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, [])

    return (
        <div className="row mb-2">
            {
                posts.map((post, i) =>
                    <PostCard
                        key={i}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />)
            }
        </div>
    );
}

export default PostGrid;