import React from "react";
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <section>
                <div className="home__container container grid">
                    <div className="home__social">
                        <span className="home__social-follow">Follow Me</span>
                        <div className="home__social-links">
                            <a href="https://www.facebook.com/" className="home__social-link">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/" className="home__social-link">
                                <i className="uil uil-instagram"></i>
                            </a>
                            <a href="https://www.twitter.com/" className="home__social-link">
                                <i className="uil uil-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="home__date">
                        <h1 className="home__title">Hi , I'am Aaditya Gagneja</h1>
                        <h3 className="home__subtitle">Web Developer</h3>
                        <p className="home__description">Lorem Epsoum Lorem EpsoumLorem EpsoumLorem EpsoumLorem EpsoumLorem EpsoumLorem EpsoumLorem EpsoumLorem Epsoum</p>
                        <Link to='/about'>More About me</Link>
                    </div>
                </div>
            </section>
        </div>
    ) ;
}

export default Home ;