import React from 'react';
import searchImage from '../../images/search.svg';
import findImage from '../../images/find.svg';

function SearchForm(params) {
    return (
        <section className="search-form container">
            <div className="search-form__container">
                <img className="search-form__search-image" src={searchImage} alt="Иконка лупа" />
                <input className="search-form__input" placeholder="Фильм" type="text" required />
                <button className="search-form__find-image"><img src={findImage} alt="Иконка стрелка" /></button>
            </div>
            <div className="line"></div>
        </section>
    )
}

export default SearchForm;