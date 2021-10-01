import React from 'react';
import promoImage from '../../images/promoImage.png';

function Promo(params) {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__block">
                    <img className="promo__image" src={promoImage} alt="Картинка web-глобуса" />
                    <div className="promo__info">
                        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
                        <p className="promo__subheader">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <button className="promo__button">Узнать больше</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promo;