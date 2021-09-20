import React from 'react';

function Profile(params) {
    return (
        <div className="profile container">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__form">
                <label className="profile__label">
                    <span className="profile__name">Имя</span>
                    <input className="profile__input" type="text" placeholder="Виталий" />
                </label>
                <div className="line"></div>
                <label className="profile__label">
                    <span className="profile__name">Email</span>
                    <input className="profile__input" type="text" placeholder="pochta@yandex.ru" />
                </label>
                <button className="profile__button">Редактировать</button>
            </form>
            <button className="signout-button">Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;