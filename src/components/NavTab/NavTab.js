import React from 'react';
import { Link } from 'react-router-dom';

function NavTab(params) {

    return (
        <div className="navtab">
            <Link to="/signup" className="navtab__link">Регистрация</Link>
            <Link to="/signin"><button className="navtab__button">Войти</button></Link>
        </div>
    )
}

export default NavTab;