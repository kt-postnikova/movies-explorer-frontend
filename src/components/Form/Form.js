import React from 'react';
import { Link } from 'react-router-dom';

function Form({ children, name, button, isFormValid, message, error, question, link, linkName, onSubmit }) {

    const messageClassName = (
        `${error ? 'form__message_error' : 'form__message'}`
    )

    return (
        <form className="form" name={name} id={name} onSubmit={onSubmit}>
            {children}
            <p className={messageClassName}>{message}</p>
            <button className="form__button" disabled={isFormValid ? null : 'disabled'}>{button}</button>
            <p className="form__signin">{question} <Link to={link} className="form__signin-link">{linkName}</Link></p>
        </form>
    )
}

export default Form;