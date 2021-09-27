import React from 'react';
import linkImg from '../../images/link.svg';

function Portfolio(params) {
    return (
        <section className="portfolio container">
            <h2 className="portfoilio__header">Портфолио</h2>
            <div className="portfolio__links">
                <div className="portfolio__link">
                    <a className="portfolio__name" href="https://github.com/kt-postnikova/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт
                        <img className="portfolio__link-img" src={linkImg} alt="Иконка стрелки" />
                        <div className="line"></div>
                    </a>
                </div>
                <div className="portfolio__link">
                    <a className="portfolio__name" href="https://github.com/kt-postnikova/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт
                        <img className="portfolio__link-img" src={linkImg} alt="Иконка стрелки" />
                        <div className="line"></div>
                    </a>
                </div>
                <div className="portfolio__link">
                    <a className="portfolio__name" href="https://github.com/kt-postnikova/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение
                        <img className="portfolio__link-img" src={linkImg} alt="Иконка стрелки" />
                        <div className="line"></div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;