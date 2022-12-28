import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <aside className="sidebar" id="sidebar">
                <nav className="nav">
                    <div className="nav__logo">
                        <a href="index.html" className="nav__logo-text">AG</a>
                    </div>

                    <div className="nav__menu">
                        <div className="menu">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a href="#home" className="nav__link active-link">Home</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#about" className="nav__link">About</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#skills" className="nav__link">Skills</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#contact" className="nav__link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="btn__share">
                        <i className="uil uil-share-alt social__share"></i>
                    </div>
                </nav>
            </aside>
        </div>
    )
} ;

export default Navbar ;