import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';

function Register({ onRegister, message }) {

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: ''
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

    function handleRegisterSubmit(e) {
        e.preventDefault();

        onRegister(values.email, values.password, values.name)
    }

    return (
        <div className="register">
            <Link to="/signup"><img src={logo} alt="Логотип" /></Link>
            <h1 className="register__header">Добро пожаловать!</h1>
            <Form name="register" button="Зарегистрироваться" onSubmit={handleRegisterSubmit} isFormValid={isValid} message={message} question="Уже зарегистрированы?" link="/signin" linkName="Войти">
                <label className="form__label">Имя
                    <input className="form__input" value={values.name} onChange={handleChange} name="name" required minLength="2" maxLength="30" />
                    <span className="form__input-error">{errors.name}</span>
                </label>
                <label className="form__label">E-mail
                    <input className="form__input" type="email" name="email" onChange={handleChange} value={values.email} required />
                    <span className="form__input-error">{errors.email}</span>
                </label>
                <label className="form__label">Пароль
                    <input className="form__input" type="password" name="password" onChange={handleChange} value={values.password} required minLength="8" />
                    <span className="form__input-error">{errors.password}</span>
                </label>
            </Form>
        </div>
    )
}

export default Register;