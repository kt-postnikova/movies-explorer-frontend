import React from 'react';

function Techs(params) {
    return (
        <section className="techs">
            <div className="container">
                <h2 className="title">Технологии</h2>
                <div className="header-line"></div>
                <h3 className="techs__header">7 технологий</h3>
                <p className="techs__subheader">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs-bricks">
                    <div className="tech-brick">HTML</div>
                    <div className="tech-brick">CSS</div>
                    <div className="tech-brick">JS</div>
                    <div className="tech-brick">React</div>
                    <div className="tech-brick">Git</div>
                    <div className="tech-brick">Express.js</div>
                    <div className="tech-brick">mongoDB</div>
                </div>
            </div>
        </section>
    )
}

export default Techs;