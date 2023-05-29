import React from "react"
import "./Projects.css"
import HTML from '../../assets/html.png'
import Food from '../../assets/Food.png'
import Expense from '../../assets/Expense.png'

const Projects = () => {
    return (
        <React.Fragment>
            <section className="work section">
                <h2 data-heading="My Portfolio" className="section__title">Projects</h2>

                <div className="work__container container grid">
                    <div className="work__card">
                        <img src={Food} alt="#" className="work__img"></img>
                        <h3 className="work__title">FoodLover</h3>
                        <span className="work__button">Source Code<a  href="https://github.com/Gagneja1512/food-order-project"><i className="work__button-icon uil uil-arrow-right"></i></a></span>
                    </div>

                    <div className="work__card">
                        <img src={HTML} alt="#" className="work__img"></img>
                        <h3 className="work__title">HTML</h3>
                        <span className="work__button">Source Code<a  href="https://github.com/Gagneja1512/food-order-project"><i className="work__button-icon uil uil-arrow-right"></i></a></span>
                    </div>

                    <div className="work__card">
                        <img src={HTML} alt="#" className="work__img"></img>
                        <h3 className="work__title">HTML</h3>
                        <span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span>
                    </div>

                    <div className="work__card">
                        <img src={Expense} alt="#" className="work__img"></img>
                        <h3 className="work__title">Expense Tracker</h3>
                        <span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span>
                    </div>

                    <div className="work__card">
                        <img src={HTML} alt="#" className="work__img"></img>
                        <h3 className="work__title">HTML</h3>
                        <span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects