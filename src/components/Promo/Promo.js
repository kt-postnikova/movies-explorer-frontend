import React from 'react';
import { Link } from 'react-router-dom';
import promoImage from '../../images/promoImage.png';

function Promo(params) {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__block">
                    <h1 className="promo__header">Учебный проект студента факультета<br /> Веб-разработки.</h1>
                    <img className="promo__image" src={promoImage} alt="Картинка web-глобуса" />
                </div>
                <p className="promo__subheader">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className="promo__button">Узнать больше</button>
            </div>
        </section>
    )
}

export default Promo;