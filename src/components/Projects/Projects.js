import React from "react"
import "./Projects.css"
import Semester from "../../assets/semester.png"
import Food from '../../assets/Food.png'
import Expense from '../../assets/Expense.png'
import TextHelp from '../../assets/TextHelp.png'
import Natours from "../../assets/Natours.png"
import Portfolio from "../../assets/portfolio.png"

const Projects = () => {
    return (
        <React.Fragment>
            <section className="work section">
                <h2 data-heading="My Portfolio" className="section__title">Projects</h2>

                <div className="work__container container grid">
                    <div className="work__card">
                        <img src={Food} alt="#" className="work__img"></img>
                        <h3 className="work__title">FoodLover</h3>
                        <a  href="https://github.com/Gagneja1512/food-order-project"><span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span></a>
                    </div>

                    <div className="work__card">
                        <img src={Semester} alt="#" className="work__img"></img>
                        <h3 className="work__title">Semester Detail Application</h3>
                        <a  href="https://github.com/p-chhabra/Semester-Detail-Website"><span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span></a>
                    </div>

                    <div className="work__card">
                        <img src={Portfolio} alt="#" className="work__img"></img>
                        <h3 className="work__title">Portfolio</h3>
                        <a href="https://github.com/Gagneja1512/my-portfolio"><span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span></a>
                    </div>

                    <div className="work__card">
                        <img src={Expense} alt="#" className="work__img"></img>
                        <h3 className="work__title">Expense Tracker</h3>HTML
                        <a href="https://github.com/Gagneja1512/ExpenseList"><span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span></a>
                    </div>

                    <div className="work__card">
                        <img src={TextHelp} alt="#" className="work__img"></img>HTML
                        <h3 className="work__title">TextHelp</h3>
                        <a  href="https://github.com/Gagneja1512/Textutils"><span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span></a>
                    </div>

                    <div className="work__card">
                        <img src={Natours} alt="#" className="work__img"></img>
                        <h3 className="work__title">Natours</h3>
                        <a  href="https://github.com/Gagneja1512/Natours"><span className="work__button">Source Code<i className="work__button-icon uil uil-arrow-right"></i></span></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects