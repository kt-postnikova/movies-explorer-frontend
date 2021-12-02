import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import Logo from '../Logo/Logo';

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
                        (loggedIn && !isMainHeader) ?
                            <Navigation></Navigation> :
                            <NavTab></NavTab>

                        // userLocation.pathname === '/' ?
                        //     <NavTab></NavTab> :
                        //     <Navigation></Navigation>
                    }
                </>
            </div>
        </header>
    )
}

export default Header;