import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(params) {
    return (
        <section className="movies-cards container">
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
        </section>
    )
}

export default MoviesCardList;