import React from 'react';

function AboutProject(params) {
    return (
        <section className="about-project container">
            <h2 className="title">О проекте</h2>
            <div className="header-line"></div>
            <div className="about-project__block">
                <div>
                    <h3 className="about-project__block-header">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__block-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div>
                    <h3 className="about-project__block-header">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__block-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__timeline">
                <div className="about-project__timeline_backend">1 неделя</div>
                <div className="about-project__timeline_frontend">4 недели</div>
                <p className="about-project__timeline-title">Back-end</p>
                <p className="about-project__timeline-title">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;