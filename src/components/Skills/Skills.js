import './Skills.css'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import GitHub from "../../assets/github.png";
import CPP from "../../assets/c++.png";
import Bootstrap from "../../assets/bootstrap.png";
import Linux from "../../assets/linux.png";
import Sass from "../../assets/sass.png";
import Git from "../../assets/git.png";
import Tyepscript from "../../assets/typescript.png";
import MongoDB from "../../assets/mongo.png"
import Tailwind from "../../assets/tailwind.png"
import FireBase from "../../assets/firebase.png"
import Mysql from "../../assets/mysql.png"
import Next from "../../assets/next.png"

const Skills = () => {
    return (
        <div>
            <div className='skills'>
                <div className='skills__info'>
                    <div>
                        <p className='skills__title'>Skills</p>
                        <p className='skills__paragraph'>These are the Skills i worked with.</p>
                    </div>

                    <div className='skills__card'>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={CSS} alt={HTML}></img>
                            <p className='skills__name'>CSS</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={JavaScript} alt={HTML}></img>
                            <p className='skills__name'>JavaScript</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={Tyepscript} alt={HTML}></img>
                            <p className='skills__name'>Tyepscript</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={ReactImg} alt={HTML}></img>
                            <p className='skills__name'>ReactJs</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={Next} alt={HTML}></img>
                            <p className='skills__name'>NextJs</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={Node} alt={HTML}></img>
                            <p className='skills__name'>NodeJs</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={GitHub} alt={HTML}></img>
                            <p className='skills__name'>GitHub</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={CPP} alt={HTML}></img>
                            <p className='skills__name'>C++</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={Bootstrap} alt={HTML}></img>
                            <p className='skills__name'>Bootstrap</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={Linux} alt={HTML}></img>
                            <p className='skills__name'>Linux</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={Sass} alt={HTML}></img>
                            <p className='skills__name'>Sass</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={Git} alt={HTML}></img>
                            <p className='skills__name'>Git</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={MongoDB} alt={HTML}></img>
                            <p className='skills__name'>MongoDB</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={Tailwind} alt={HTML}></img>
                            <p className='skills__name'>Tailwind</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={FireBase} alt={HTML}></img>
                            <p className='skills__name'>FireBase</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={Mysql} alt={HTML}></img>
                            <p className='skills__name'>MySql</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills