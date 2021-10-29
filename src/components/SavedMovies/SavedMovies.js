import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { filterMovies } from '../../utils/filterMovies';

function SavedMovies({ loggedIn, savedMovies, onDelete }) {

    const [selectedMovies, setSelectedMovies] = React.useState(savedMovies);
    const [filteredMovies, setFilteredMovies] = React.useState(selectedMovies);
    const [query, setQuery] = React.useState('');

    /* забираем значение из инпута */
    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    /* получаем отфильтрованные фильмы по сабмиту */
    function handleGetMoviesSubmit() {
        const filteredMovies = filterMovies(savedMovies, query);
        if (filteredMovies.length === 0) {
            console.log(filteredMovies);
        } else {
            setFilteredMovies(filteredMovies);
            setSelectedMovies(filteredMovies)
        }
    }

    return (
        <>
            <Header loggedIn={loggedIn}></Header>
            <SearchForm onSubmit={handleGetMoviesSubmit} onChange={handleQueryChange} query={query}></SearchForm>
            <FilterCheckbox></FilterCheckbox>
            <MoviesCardList savedMovies={savedMovies} moviesList={selectedMovies} onDelete={onDelete}></MoviesCardList>
            <Footer></Footer>
        </>
    )
}

export default SavedMovies;