import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies';

function Movies({ loggedIn, onSave, onDelete, savedMovies }) {
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);
    const [noMovies, setNoMovies] = React.useState(false);

    /* забираем значение из инпута */
    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    /* получаем отфильтрованные фильмы по сабмиту */
    function handleGetMoviesSubmit() {
        if (query === '') {
            setNoMovies(true);
        } else {
            setLoading(true);
            MoviesApi.getMovies()
                .then((moviesArray) => {
                    const filteredMovies = filterMovies(moviesArray, query);
                    localStorage.setItem('movies', JSON.stringify(filteredMovies))
                    setFilteredMovies(filteredMovies);
                    localStorage.setItem('query', JSON.stringify(query));
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setLoading(false);
                    setNoMovies(false);
                })
        }
    }

    /* После одновления странницы запрос и отфильтрованные фильмы не пропадают */
    React.useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const queryValue = JSON.parse(localStorage.getItem('query'));
        if (movies) {
            setFilteredMovies(movies);
            setQuery(queryValue);
        }
    }, [])

    return (
        <>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm onSubmit={handleGetMoviesSubmit} onChange={handleQueryChange} query={query}></SearchForm>
            <FilterCheckbox></FilterCheckbox>
            <MoviesCardList
                moviesList={filteredMovies}
                savedMovies={savedMovies}
                isLoading={isLoading}
                noMovies={noMovies}
                onSave={onSave}
                onDelete={onDelete}>
            </MoviesCardList>
            <Footer></Footer>
        </>
    )
}

export default Movies;