import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login(params) {
    return (
        <div className="register">
            <Link to="/signup"><img src={logo} alt="Логотип" /></Link>
            <h1 className="register__header">Рады видеть!</h1>
            <form className="form">
                <label className="form__label">E-mail
                    <input className="form__input" required />
                    <span className="form__input-error"></span>
                </label>
                <label className="form__label">Пароль
                    <input className="form__input" required />
                    <span className="form__input-error">Что-то пошло не так...</span>
                </label>
                <button className="form__button">Войти</button>
                <p className="form__signin">Еще не зарегистрированы? <Link to="/signup" className="form__signin-link">Регистрация</Link></p>
            </form>
        </div>
    )
}

export default Login;