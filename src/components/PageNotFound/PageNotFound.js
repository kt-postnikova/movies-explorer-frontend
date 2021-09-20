import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(params) {
    return (
        <div className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__subtitle">Страница не найдена</p>
            <Link to="/" className="not-found__button">Назад</Link>
        </div>
    )
}

export default PageNotFound;