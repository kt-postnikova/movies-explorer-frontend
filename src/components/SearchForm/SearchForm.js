import React from 'react';
import searchImage from '../../images/search.svg';
import findImage from '../../images/find.svg';

function SearchForm({ onSubmit, onChange, query }) {

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit();
    }

    return (
        <section className="search-form container">
            <form className="search-form__container" onSubmit={handleSubmit} noValidate>
                <img className="search-form__search-image" src={searchImage} alt="Иконка лупа" />
                <input className="search-form__input" placeholder="Фильм" type="text" value={query} onChange={onChange} required />
                <button className="search-form__find-image"><img src={findImage} alt="Иконка стрелка" /></button>
            </form>
            <div className="line"></div>
        </section>
    )
}

export default SearchForm;