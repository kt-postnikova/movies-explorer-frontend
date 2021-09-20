import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(params) {
    return (
        <>
            <SearchForm></SearchForm>
            <FilterCheckbox></FilterCheckbox>
            <MoviesCardList></MoviesCardList>
            <Preloader></Preloader>
        </>
    )
}

export default Movies;