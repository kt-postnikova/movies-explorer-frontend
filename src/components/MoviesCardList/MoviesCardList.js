import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

function MoviesCardList(params) {
    return (
        <>
            <section className="movies-cards container">
                {/* <Preloader></Preloader> */}
                <div className="movies-cards__list">
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                    <MoviesCard></MoviesCard>
                </div>
            </section>
            <div className="movies-cards__button-container">
                <button className="movies-cards__button">Ещё</button>
            </div>
        </>
    )
}

export default MoviesCardList;