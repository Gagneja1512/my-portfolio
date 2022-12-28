import React from "react";
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <aside className="sidebar" id="sidebar">
                <nav className="nav">
                    <div className="nav__logo">
                        <p className="nav__logo-text">AG</p>
                    </div>

                    <div className="nav__menu">
                        <div className="menu">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <NavLink to="/home" className="nav__link" activeClassName="active-link">Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/about" className="nav__link" activeClassName="active-link">About</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/skills" className="nav__link" activeClassName="active-link">Skills</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/project" className="nav__link" activeClassName="active-link">Projects</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/contact" className="nav__link" activeClassName="active-link">Contact</NavLink>
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
};

export default Navbar;