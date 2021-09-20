import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(params) {
    return (
        <>
            <SearchForm></SearchForm>
            <FilterCheckbox></FilterCheckbox>
            <MoviesCardList></MoviesCardList>
        </>
    )
}

export default SavedMovies;