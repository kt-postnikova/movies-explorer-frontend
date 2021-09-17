import React from 'react';
import { Link } from 'react-router-dom';

function Footer(params) {

    const currentDate = new Date().getFullYear();

    return (
        <section className="footer container">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="line"></div>
            <p className="footer__year">&copy; {currentDate}</p>
            <div className="footer__links">
                <Link className="footer__link">Яндекс.Практикум</Link>
                <Link className="footer__link">Github</Link>
                <Link className="footer__link">Facebook</Link>
            </div>
        </section>
    )
}

export default Footer;