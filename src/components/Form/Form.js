import React from 'react';
import { Link } from 'react-router-dom';

function Form({ children, name, button, isFormValid, message, question, link, linkName, onSubmit }) {

    return (
        <form className="form" name={name} id={name} onSubmit={onSubmit}>
            {children}
            <p className="form__message">{message}</p>
            <button className="form__button" disabled={isFormValid ? null : 'disabled'}>{button}</button>
            <p className="form__signin">{question} <Link to={link} className="form__signin-link">{linkName}</Link></p>
        </form>
    )
}

export default Form;