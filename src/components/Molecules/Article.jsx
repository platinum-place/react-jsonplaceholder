import React from 'react'

function Article({ titulo, descripcion }) {
    return (
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">{titulo}</h1>
                <p class="col-md-8 fs-4">{descripcion}</p>
            </div>
        </div>
    );
}

export default Article;