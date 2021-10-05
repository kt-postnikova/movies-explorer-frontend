import React from 'react';
import searchImage from '../../images/search.svg';
import findImage from '../../images/find.svg';

function SearchForm(params) {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <section className="search-form container">
            <form className="search-form__container" onSubmit={handleSubmit} noValidate>
                <img className="search-form__search-image" src={searchImage} alt="Иконка лупа" />
                <input className="search-form__input" placeholder="Фильм" type="text" required />
                <button className="search-form__find-image"><img src={findImage} alt="Иконка стрелка" /></button>
            </form>
            <div className="line"></div>
        </section>
    )
}

export default SearchForm;