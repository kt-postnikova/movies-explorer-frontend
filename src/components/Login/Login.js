import React from 'react';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

function Login({ onLogin, message, error }) {
    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        switch (name) {
            case "email":
                if (value === '') {
                    setErrors({ ...errors, [name]: 'Поле не может быть пустым' });
                } else if (!EMAIL_REGEX.test(value)) {
                    setErrors({ ...errors, [name]: 'Введите корректный email' });
                } else {
                    setErrors('');
                }
                break;
            case "password":
                if (value === '') {
                    setErrors({ ...errors, [name]: 'Поле не может быть пустым' });
                } else if (value.length < 8) {
                    setErrors({ ...errors, [name]: 'Длина пароля должна быть больше 8 символов' });
                } else {
                    setErrors('');
                }
                break;
            default:
                break;
        }
        setValues({ ...values, [name]: value });
    };

    React.useEffect(() => {
        if (values.email === '' || values.password === '' || errors.email === 'Введите корректный email' || values.password.length < 8) {
            setIsValid(false);
        } else {
            setIsValid(true)
        }
    }, [values, errors])

    function handleAuthSubmit(e) {
        e.preventDefault();

        onLogin(values.email, values.password)
    }

    return (
        <div className="register">
            <Logo></Logo>
            <h1 className="register__header">Рады видеть!</h1>
            <Form
                name="login"
                button="Войти"
                onSubmit={handleAuthSubmit}
                isFormValid={isValid}
                question="Еще не зарегистрированы?"
                link="/signup"
                linkName="Регистрация"
                message={message}
                error={error}>
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