import React from 'react'
import Card from '../UI/Molecules/Card';
import PostsGrid from '../UI/Organisms/PostsGrid';

function Posts() {
    return (
        <>
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <Card
                    tittle="Posts example"
                    text='Ejemplo de uso del endpoint "https://jsonplaceholder.typicode.com/posts", 
                    donde cada publicacion tiene sus comentarios.'
                />
            </div>

            <PostsGrid />
        </>
    );
}

export default Posts;