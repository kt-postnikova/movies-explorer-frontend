import React, { useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ moviesList, savedMovies, noQuery, noMovies, isLoading, onSave, onDelete }) {
    const [moviesCount, setMoviesCount] = React.useState(12);

    function checkMoviesLike(movieList) {
        return savedMovies.find((savedMovie) => savedMovie.id === movieList.id)
    }

    function setCount(large, medium, small, huge) {
        const width = window.screen.width;
        if (width <= 1220 && width >= 960) {
            setMoviesCount(large)
        } else if (width <= 960 && width >= 600) {
            setMoviesCount(medium)
        } else if (width < 600) {
            setMoviesCount(small)
        } else if (width > 1220) {
            setMoviesCount(huge)
        }
    }

    function setPagination(params) {
        const moviesOnPage = moviesCount;
        setCount(moviesOnPage + 3, moviesOnPage + 2, moviesOnPage + 2, moviesOnPage + 4);
    }

    useEffect(() => {
        setCount(9, 6, 5, 12);
    }, [])


    return (
        <>
            <section className="movies-cards container">
                {
                    (noQuery) ? <h1 className="movies-cards__not-found">Нужно ввести ключевое слово</h1> :
                        (noMovies) ? <h1 className="movies-cards__not-found">Ничего не найдено</h1> :
                            (isLoading) ? (
                                <Preloader></Preloader>
                            ) : (
                                <div className="movies-cards__list">
                                    {
                                        moviesList.slice(0, moviesCount).map((movie) => (
                                            <MoviesCard
                                                key={movie.id}
                                                movie={movie}
                                                savedMovies={checkMoviesLike(movie)}
                                                onSave={onSave}
                                                onDelete={onDelete}></MoviesCard>
                                        ))
                                    }
                                </div>
                            )
                }
            </section>
            {
                moviesList &&
                    (moviesList.length === 0 || moviesList.length < moviesCount) ? '' : (
                    <div className="movies-cards__button-container">
                        <button className="movies-cards__button" onClick={setPagination}>Ещё</button>
                    </div>
                )
            }
        </>
    )
}

export default MoviesCardList;