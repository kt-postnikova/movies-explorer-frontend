import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { filterMovies, filterMoviesByDuration } from '../../utils/utils';

import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedMovies({ loggedIn, savedMovies, onDelete }) {

    const [selectedMovies, setSelectedMovies] = React.useState(savedMovies);
    const [filteredMovies, setFilteredMovies] = React.useState(selectedMovies);
    const [query, setQuery] = React.useState('');

    const [isShortMovies, setShortMovies] = React.useState(false);

    const currentUser = React.useContext(CurrentUserContext);

    /* забираем значение из инпута */
    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    function handleCheckboxChecked(e) {
        setShortMovies(e.target.checked);
    }

    /* получаем отфильтрованные фильмы по сабмиту */
    function handleGetMoviesSubmit() {
        const filteredMovies = filterMovies(savedMovies, query);
        if (filteredMovies.length === 0) {
        } else {
            setFilteredMovies(filteredMovies);
            setSelectedMovies(filteredMovies)
        }
    }

    React.useEffect(() => {
        const movies = savedMovies.filter((saveMovies) => saveMovies.owner === currentUser._id)
        setSelectedMovies(movies);
        localStorage.setItem('saved-movies', JSON.stringify(movies))
    }, [currentUser, savedMovies])

    React.useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));
        if (isShortMovies) {
            const shortMovies = filterMoviesByDuration(savedMovies);
            setSelectedMovies(shortMovies);
            localStorage.setItem('shortMovies-checkbox(saved-movies)', JSON.stringify(true))
        } else {
            setSelectedMovies(savedMovies);
            localStorage.setItem('shortMovies-checkbox(saved-movies)', JSON.stringify(false))
        }
    }, [isShortMovies])

    return (
        <>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm onSubmit={handleGetMoviesSubmit} onChange={handleQueryChange} query={query}></SearchForm>
            <FilterCheckbox onChecked={handleCheckboxChecked} isChecked={isShortMovies}></FilterCheckbox>
            <MoviesCardList savedMovies={savedMovies} moviesList={selectedMovies} onDelete={onDelete}></MoviesCardList>
            <Footer></Footer>
        </>
    )
}

export default SavedMovies;