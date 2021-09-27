import React from 'react';
import studentImage from '../../images/student-pic.png';

function AboutMe(params) {
    return (
        <section className="about-me container">
            <h2 className="title">Студент</h2>
            <div className="header-line"></div>
            <div className="about-me__info">
                <img className="about-me__image" src={studentImage} alt="Фото студента" />
                <h2 className="about-me__header">Виталий</h2>
                <p className="about-me__subheader">Фронтенд-разработчик, 30 лет</p>
                <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <div className="social">
                    <a className="social__link" href="https://vk.com/saintcath" target="_blank" rel="noreferrer">VK</a>
                    <a className="social__link" href="https://github.com/kt-postnikova" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;