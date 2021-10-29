import React from 'react';
import { useLocation } from 'react-router';

function MoviesCard({ movie, savedMovies, onSave, onDelete }) {
    const userLocation = useLocation();
    const isSavedMoviesPage = userLocation.pathname === '/saved-movies';

    function handleMovieSave() {
        onSave(movie);
    }

    function handleMovieDelete() {
        onDelete(movie);
    }

    const cardLikeButtonClassName = (
        `${savedMovies ? 'card__select card__select_active' : 'card__select'}`
    );

    return (
        <div className="card">
            <img className="card__image" src={(movie.image.url) ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt="Постер фильма" />
            <div className="card__info">
                <p className="card__name">{movie.nameRU}</p>
                <button type="button" className={isSavedMoviesPage ? 'card__delete' : cardLikeButtonClassName} onClick={savedMovies ? handleMovieDelete : handleMovieSave}></button>
                <p className="card__duration">{movie.duration}</p>
            </div>
        </div>
    )
}

export default MoviesCard;