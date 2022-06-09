import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi...</span>
                    <span>Aaditya Gagneja</span>
                    <span>Currently pursuing Computer science and engineering from National Institute of Technology, Hamirpur.I'm an executive member at App Team of our institute.</span>
                </div>

                <button className="button i-button">CV</button>
                <div className="i-icons">
                    <a href="https://github.com/Gagneja1512"><img src={Github} alt="" /></a>
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right"></div>
        </div>
    ) ;
}

export default Intro ;