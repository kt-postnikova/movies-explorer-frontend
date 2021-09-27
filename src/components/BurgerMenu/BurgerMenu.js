import React from 'react';
import { Link } from 'react-router-dom';
import AccountButtonMenu from '../AccountButton/AccountButtonMenu/AccountButtonMenu';

function BurgerMenu(params) {

    return (
        <div className="burger-menu">
            <input className="burger-menu__toggle" id="burger-menu__toggle" type="checkbox" />
            <label className="burger-menu__button" htmlFor="burger-menu__toggle">
                <span></span>
            </label>
            <ul className="burger-menu__box">
                <li className="burger-menu__item"><Link to="/" className="burger-menu__link">Главная</Link></li>
                <li className="burger-menu__item"><Link to="/movies" className="burger-menu__link">Фильмы</Link></li>
                <li className="burger-menu__item"><Link to="/saved-movies" className="burger-menu__link">Сохраненные фильмы</Link></li>
                <li className="burger-menu__item">
                    <AccountButtonMenu></AccountButtonMenu>
                </li>
            </ul>
        </div>
    )
}

export default BurgerMenu;