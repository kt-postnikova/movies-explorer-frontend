import React from 'react';

function Footer(params) {

    const currentDate = new Date().getFullYear();

    return (
        <section className="footer container">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="line"></div>
            <div className="footer__info">
                <p className="footer__year">&copy; {currentDate}</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/kt-postnikova" target="_blank" rel="noreferrer">Github</a>
                    <a className="footer__link" href="https://vk.com/saintcath" target="_blank" rel="noreferrer">VK</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;