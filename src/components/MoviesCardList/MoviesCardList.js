import React, { useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { screenSizes } from '../../utils/utils';

function MoviesCardList({ moviesList, savedMovies, noQuery, noMovies, isLoading, onSave, onDelete }) {
    const [moviesCount, setMoviesCount] = React.useState(0);

    function checkMoviesLike(movieList) {
        return savedMovies.find((savedMovie) => savedMovie.id === movieList.id)
    }

    const screenWidth = window.screen.width;
    function setCount() {
        if (screenWidth > 1220) {
            setMoviesCount(screenSizes.large.cards.onPage)
        } else if (screenWidth <= 1220 && screenWidth >= 960) {
            setMoviesCount(screenSizes.medium.cards.onPage)
        } else if (screenWidth <= 960 && screenWidth > 600) {
            setMoviesCount(screenSizes.small.cards.onPage)
        } else if (screenWidth <= 600) {
            setMoviesCount(screenSizes.extra.cards.onPage)
        }
    }

    function handleMoviesSetMore() {
        if (screenWidth > 1220) {
            setMoviesCount(moviesCount + screenSizes.large.cards.perPage)
        } else if (screenWidth <= 1220 && screenWidth >= 960) {
            setMoviesCount(moviesCount + screenSizes.medium.cards.perPage)
        } else if (screenWidth <= 960 && screenWidth > 600) {
            setMoviesCount(moviesCount + screenSizes.small.cards.perPage)
        } else if (screenWidth <= 600) {
            setMoviesCount(moviesCount + screenSizes.extra.cards.perPage)
        }
    }

    useEffect(() => {
        setCount();
    }, [screenWidth])


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
                                        moviesList &&
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
                {
                    moviesList &&
                    (!(moviesList.length === 0 || moviesList.length <= moviesCount)) &&
                    <div className="movies-cards__button-container">
                        <button className="movies-cards__button" onClick={handleMoviesSetMore}>Ещё</button>
                    </div>
                }
            </section>
        </>
    )
}

export default MoviesCardList;