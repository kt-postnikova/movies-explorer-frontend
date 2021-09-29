import React from 'react';
import cardImage from '../../images/pic1.png';

function MoviesCard(props) {
    return (
        <div className="card">
            <img className="card__image" src={cardImage} alt="Постер фильма" />
            <div className="card__info">
                <p className="card__name">33 слова о дизайне</p>
                <div className={`card__select ${props.isActive}`}></div>
                <p className="card__duration">1ч42м</p>
            </div>
        </div>
    )
}

export default MoviesCard;