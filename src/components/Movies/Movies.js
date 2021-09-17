import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies(params) {
    return (
        <>
            <SearchForm></SearchForm>
            <FilterCheckbox></FilterCheckbox>
            <Preloader></Preloader>
            <MoviesCardList></MoviesCardList>
            <MoviesCard></MoviesCard>
        </>
    )
}

export default Movies;