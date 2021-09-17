import React from 'react';
import { Link } from 'react-router-dom';
import accountImage from '../../images/account.svg';

function Navigation(params) {
    return (
        <nav className="navigation">
            <div className="nav-links">
                <Link to="/movies" className='nav-links__link nav-links__link_active'>Фильмы</Link>
                <Link to="/saved-movies" className="nav-links__link">Сохраненные фильмы</Link>
            </div>
            <div className="account-link">
                <p className="account-link__name">Аккаунт</p>
                <Link to="/profile" className="account-link__button">
                    <div className="account-link__button-block">
                        <img className="account-link__button-image" src={accountImage} alt="" />
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation;