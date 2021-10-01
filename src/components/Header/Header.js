import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header(params) {
    const userLocation = useLocation();

    const isMainHeader = userLocation.pathname === '/';

    const headerClassName = (
        `${isMainHeader ? 'header' : 'header-movies'}`
    )

    return (
        <header className={headerClassName}>
            <div className="container header__container">
                <Link to="/"><img className="header__logo" src={logo} alt="Логотип Movie Explorer" /></Link>
                <>
                    {
                        userLocation.pathname === '/' ?
                            <NavTab></NavTab> :
                            <Navigation></Navigation>
                    }
                </>
            </div>
        </header>
    )
}

export default Header;