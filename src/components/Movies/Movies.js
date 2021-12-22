import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from '../../utils/MoviesApi';
import { filterMovies, filterMoviesByDuration } from '../../utils/utils';

function Movies({ loggedIn, onSave, onDelete, savedMovies }) {
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);
    const [noQuery, setNoQuery] = React.useState(false);
    const [noMovies, setNoMovies] = React.useState(false);
    const [isShortMovies, setShortMovies] = React.useState(false);
    const [error, setError] = React.useState(false);

    /* забираем значение из инпута */
    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    function handleCheckboxChecked(e) {
        setShortMovies(e.target.checked);
    }

    /* получаем отфильтрованные фильмы по сабмиту */
    function handleGetMoviesSubmit() {
        if (query === '') {
            setNoQuery(true);
        } else {
            setLoading(true);
            MoviesApi.getMovies()
                .then((moviesArray) => {
                    const filteredMovies = filterMovies(moviesArray, query);
                    localStorage.setItem('movies', JSON.stringify(filteredMovies));
                    setFilteredMovies(filteredMovies);
                    localStorage.setItem('query', JSON.stringify(query));
                    if (filteredMovies.length === 0) {
                        setNoMovies(true);
                    } else {
                        setNoMovies(false);
                    }
                })
                .catch((err) => setError(true))
                .finally(() => {
                    setLoading(false);
                    setNoQuery(false);
                })
        }
    }

    /* После обновления страницы запрос и отфильтрованные фильмы не пропадают */
    React.useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const queryValue = JSON.parse(localStorage.getItem('query'));
        const shortMoviesCheckbox = JSON.parse(localStorage.getItem('shortMovies-checkbox(movies)'));
        if (movies) {
            setFilteredMovies(movies);
            setQuery(queryValue);
            setShortMovies(shortMoviesCheckbox)
        }
    }, [])

    React.useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        if (isShortMovies) {
            const shortMovies = filterMoviesByDuration(movies);
            setFilteredMovies(shortMovies);
            localStorage.setItem('shortMovies-checkbox(movies)', JSON.stringify(true));
        } else {
            setFilteredMovies(movies);
            localStorage.setItem('shortMovies-checkbox(movies)', JSON.stringify(false));
        }
    }, [isShortMovies])

    return (
        <>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm onSubmit={handleGetMoviesSubmit} onChange={handleQueryChange} query={query}></SearchForm>
            <FilterCheckbox onChecked={handleCheckboxChecked} isChecked={isShortMovies}></FilterCheckbox>
            {
                error ? <h1 className="error container">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h1> :
                    <MoviesCardList
                        moviesList={filteredMovies}
                        savedMovies={savedMovies}
                        isLoading={isLoading}
                        noQuery={noQuery}
                        noMovies={noMovies}
                        onSave={onSave}
                        onDelete={onDelete}>
                    </MoviesCardList>
            }
            <Footer></Footer>
        </>
    )
}

export default Movies;