import './About.css'

const About = () => {
    return (
        <div>
            <section className="qualification section">
                <h2 className="section__title" data-heading="My-journey">Qualification</h2>

                <div className="qualification__container container grid">
                    <div className="education">
                        <h3 className="qualification__title">
                            <i className="uil uil-graduation-cap"></i> Education
                        </h3>

                        <div className="title">
                            <div className="timeline__item">
                                <div className="circle__dot"></div>
                                <h3 className="timeline__title">XYZ</h3>
                                <p className="timeline__text">lorem ipsum</p>
                                <span className="timeline__date"><i className="uil uil-calender-alt"></i>
                                    2013-present
                                </span>
                            </div>

                            <div className="timeline__item">
                                <div className="circle__dot"></div>
                                <h3 className="timeline__title">XYZ</h3>
                                <p className="timeline__text">lorem ipsum</p>
                                <span className="timeline__date"><i className="uil uil-calender-alt"></i>
                                    2013-present
                                </span>
                            </div>

                            <div className="timeline__item">
                                <div className="circle__dot"></div>
                                <h3 className="timeline__title">XYZ</h3>
                                <p className="timeline__text">lorem ipsum</p>
                                <span className="timeline__date"><i className="uil uil-calender-alt"></i>
                                    2013-present
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About