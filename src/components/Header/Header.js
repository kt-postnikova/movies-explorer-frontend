import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header(params) {
    const userLocation = useLocation();

    const isMovies = userLocation.pathname === '/movies';

    const headerClassName = (
        `${isMovies ? 'header-movies' : 'header'}`
    )

    return (
        <header className={headerClassName}>
            <div className="container header__container">
                <Link to="/"><img className="header__logo" src={logo} alt="Логотип Movie Explorer" /></Link>

                <>
                    {
                        userLocation.pathname === '/movies' ?
                            <Navigation></Navigation> :
                            <NavTab></NavTab>
                    }
                </>

            </div>
        </header>
    )
}

export default Header;