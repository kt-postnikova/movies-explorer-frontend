import React from 'react';
import { useLocation } from 'react-router';
import { convertDuration } from '../../utils/convertDuration';

function MoviesCard({ movie, savedMovies, onSave, onDelete }) {
    const userLocation = useLocation();
    const isSavedMoviesPage = userLocation.pathname === '/saved-movies';

    const [isClick, setClick] = React.useState(false);

    function handleMovieSave() {
        onSave(movie);
    }

    function handleMovieDelete() {
        onDelete(movie);
    }

    const cardLikeButtonClassName = (
        `${savedMovies ? 'card__select card__select_active' : 'card__select'}`
    );

    function handleTrailerLinkShow() {
        setClick(true);
    }

    return (
        <div className="card">
            {
                isClick &&
                <div className="card__trailer">
                    <a className="card__trailer-link" href={movie.trailerLink} target="_blank" rel="noreferrer">{movie.trailerLink}</a>
                </div>
            }
            <img className="card__image" onClick={handleTrailerLinkShow} src={(movie.image.url) ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt="Постер фильма" />
            <div className="card__info">
                <p className="card__name">{movie.nameRU}</p>
                <button type="button" className={isSavedMoviesPage ? 'card__delete' : cardLikeButtonClassName} onClick={savedMovies ? handleMovieDelete : handleMovieSave}></button>
                <p className="card__duration">{convertDuration(movie)}</p>
            </div>
        </div>
    )
}

export default MoviesCard;