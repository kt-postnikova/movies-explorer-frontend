import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import AccountButton from '../AccountButton/AccountButton';

function Navigation() {
    const userLocation = useLocation();

    return (
        <nav className="navigation">
            <div className="nav-links">
                <Link to="/movies" className={`nav-links__link  ${userLocation.pathname === '/movies' ? ('nav-links__link_active') : ''}`}>Фильмы</Link>
                <Link to="/saved-movies" className={`nav-links__link  ${userLocation.pathname === '/saved-movies' ? ('nav-links__link_active') : ''}`}>Сохраненные фильмы</Link>
            </div>
            <BurgerMenu></BurgerMenu>
            <AccountButton></AccountButton>
        </nav >
    )
}

export default Navigation;