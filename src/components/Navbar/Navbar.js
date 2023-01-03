import React from "react";
import './Navbar.css'
import NavbarItem from './NavbarItem'

const Navbar = () => {

    const pages = ['Home' , 'About' , 'Skills' , 'Projects' , 'Contact']

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
                                {pages.map(page => (
                                    <NavbarItem key={page} pagename={page}></NavbarItem>
                                ))}
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