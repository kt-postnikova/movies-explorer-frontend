import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import Logo from '../Logo/Logo';
import AccountButton from '../AccountButton/AccountButton';

function Header({ loggedIn }) {
    const userLocation = useLocation();

    const isMainHeader = userLocation.pathname === '/';

    const headerClassName = (
        `${isMainHeader ? 'header' : 'header-movies'}`
    )

    return (
        <header className={headerClassName}>
            <div className="container header__container">
                <Logo></Logo>
                <>
                    {
                        (loggedIn) ?
                            <Navigation><AccountButton></AccountButton></Navigation> :
                            <NavTab></NavTab>
                    }
                </>
            </div>
        </header>
    )
}

export default Header;