import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';

function Login({ onLogin, message }) {
    const [values, setValues] = React.useState({
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

    function handleAuthSubmit(e) {
        e.preventDefault();

        onLogin(values.email, values.password)
    }

    return (
        <div className="register">
            <Link to="/signup"><img src={logo} alt="Логотип" /></Link>
            <h1 className="register__header">Рады видеть!</h1>
            <Form
                name="login"
                button="Войти"
                onSubmit={handleAuthSubmit}
                isFormValid={isValid}
                question="Еще не зарегистрированы?"
                link="/signup"
                linkName="Регистрация"
                message={message}>
                <label className="form__label">E-mail
                    <input className="form__input" type="email" name="email" value={values.email} onChange={handleChange} required />
                    <span className="form__input-error">{errors.email}</span>
                </label>
                <label className="form__label">Пароль
                    <input className="form__input" type="password" name="password" value={values.password} onChange={handleChange} required minLength="8" />
                    <span className="form__input-error">{errors.password}</span>
                </label>
            </Form>
        </div>
    )
}

export default Login;