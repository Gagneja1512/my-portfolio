import React from "react";
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className="home">
                <div className="home__container container grid">
                    <div className="home__social">
                        <span className="home__social-follow">Follow Me</span>
                        <div className="home__social-links">
                             {/* <a href="https://www.facebook.com/" className="home__social-link">
                                <i className="uil uil-facebook-f"></i>
                            </a> */}
                            <a href="https://www.linkedin.com/in/aaditya-gagneja-b727a0203/" className="home__social-link">
                                <i className="uil uil-linkedin"></i>
                            </a> 
                            <a href="https://twitter.com/Gagneja1512?t=3dwvH6y0dfoacOUohKjILA&s=09" className="home__social-link">
                                <i className="uil uil-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="home__date">
                        <h1 className="home__title">Hi , I'am Aaditya Gagneja</h1>
                        <h3 className="home__subtitle">Web Developer</h3>
                        <p className="home__description">A passionate web developer. Currently pursuing Computer Science and Enginnering in National Institute of Technology , Hamirpur.</p>
                        <Link className="buttons" to='/about'><i className="uil uil-user button__icon"></i>More About me</Link>
                    </div>

                    <div className="my__info">
                        {/* <div className="info__item">
                            <i className="uil uil-linkedin info__icon"></i>

                            <div>
                                <h3 className="info__title">linkedin</h3>
                                <span className="info__subtitle">user.user</span>
                            </div>
                        </div> */}

                        {/* <div className="info__item">
                            <i className="uil uil-whatsapp info__icon"></i>

                            <div>
                                <h3 className="info__title">Whatsapp</h3>
                                <span className="info__subtitle">9876543210</span>
                            </div>
                        </div> */}

                        {/* <div className="info__item">
                            <i className="uil uil-envelope-edit info__icon"></i>

                            <div>
                                <h3 className="info__title">Email</h3>
                                <span className="info__subtitle">aadityagagneja1215@gmail.com</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    ) ;
}

export default Home ;