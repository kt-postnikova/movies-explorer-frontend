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

// //хук управления формой и валидации формы
// export function useFormWithValidation() {
//   const [values, setValues] = React.useState({});
//   const [errors, setErrors] = React.useState({});
//   const [isValid, setIsValid] = React.useState(false);

//   const handleChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;
//     setValues({...values, [name]: value});
//     setErrors({...errors, [name]: target.validationMessage });
//     setIsValid(target.closest("form").checkValidity());
//   };

//   const resetForm = useCallback(
//     (newValues = {}, newErrors = {}, newIsValid = false) => {
//       setValues(newValues);
//       setErrors(newErrors);
//       setIsValid(newIsValid);
//     },
//     [setValues, setErrors, setIsValid]
//   );

//   return { values, handleChange, errors, isValid, resetForm };
// }