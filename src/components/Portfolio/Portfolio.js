import React from 'react';
import { Link } from 'react-router-dom';
import linkImg from '../../images/link.svg';

function Portfolio(params) {
    return (
        <section className="portfolio container">
            <h2 className="portfoilio__header">Портфолио</h2>
            <div className="portfolio__links">
                <div className="portfolio__link">
                    <Link className="portfolio__name">Статичный сайт
                        <img className="portfolio__link-img" src={linkImg} alt="" />
                        <div className="line"></div>
                    </Link>

                </div>
                <div className="portfolio__link">
                    <Link className="portfolio__name">Адаптивный сайт
                        <img className="portfolio__link-img" src={linkImg} alt="" />
                        <div className="line"></div>
                    </Link>

                </div>
                <div className="portfolio__link">
                    <Link className="portfolio__name">Одностраничное приложение
                        <img className="portfolio__link-img" src={linkImg} alt="" />
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Portfolio;