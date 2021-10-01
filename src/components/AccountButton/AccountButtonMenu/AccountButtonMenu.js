import React from 'react';
import { Link } from 'react-router-dom';
import accountImage from '../../../images/account.svg';

function AccountButtonMenu(params) {

    return (
        <div className="account-button-menu">
            <Link to="/profile" className="account-button__link">Аккаунт
                <button className="account-button__button">
                    <img className="account-button__button-image" src={accountImage} alt="Иконка аккаунта" />
                </button>
            </Link>
        </div>
    )
}

export default AccountButtonMenu;