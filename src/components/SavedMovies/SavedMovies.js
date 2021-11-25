import React, { useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { filterMovies } from '../../utils/filterMovies';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { saveMovie } from '../../utils/MainApi';

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
        const filteredMovies = filterMovies(savedMovies, query, isShortMovies);
        if (filteredMovies.length === 0) {
            // console.log(filteredMovies);
        } else {
            setFilteredMovies(filteredMovies);
            setSelectedMovies(filteredMovies)
        }
    }

    React.useEffect(() => {
        const movies = savedMovies.filter((saveMovies) => saveMovies.owner === currentUser._id)
        setSelectedMovies(movies);
    }, [currentUser, savedMovies])

    return (
        <>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm onSubmit={handleGetMoviesSubmit} onChange={handleQueryChange} query={query}></SearchForm>
            <FilterCheckbox onChecked={handleCheckboxChecked}></FilterCheckbox>
            <MoviesCardList savedMovies={savedMovies} moviesList={selectedMovies} onDelete={onDelete}></MoviesCardList>
            <Footer></Footer>
        </>
    )
}

export default SavedMovies;