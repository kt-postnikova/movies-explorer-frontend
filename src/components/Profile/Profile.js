import React from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Link } from 'react-router-dom';

function Profile({ onEditProfile, loggedIn, onSignOut, message }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [values, setValues] = React.useState({
        name: currentUser.name,
        email: currentUser.email
    });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    console.log(errors);

    function handleRegisterSubmit(e) {
        e.preventDefault();

        onEditProfile(values)
    }


    return (
        <>
            <Header loggedIn={loggedIn}></Header>
            <div className="profile container">
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <form className="form" onSubmit={handleRegisterSubmit} >
                    <label className="profile__label">
                        <span className="profile__name">Имя</span>
                        <input className="profile__input" value={values.name} onChange={handleChange} name="name" type="text" placeholder={currentUser.name} minLength="2" maxLength="30" />
                    </label>
                    <span className="profile__input-error">{errors.name}</span>
                    <div className="line"></div>
                    <label className="profile__label">
                        <span className="profile__name">Email</span>
                        <input className="profile__input" value={values.email} onChange={handleChange} name="email" type="email" placeholder={currentUser.email} />
                    </label>
                    <span className="profile__input-error">{errors.email}</span>
                    <p className="profile__message">{message}</p>
                    <button className="profile__button" disabled={isValid ? null : 'disabled'}>Редактировать</button>
                </form>
                <Link className="signout-button" to="/">
                    <button className="signout-button" onClick={onSignOut}>Выйти из аккаунта</button>
                </Link>
            </div >
        </>
    )
}

export default Profile;