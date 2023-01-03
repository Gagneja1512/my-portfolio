import './Skills.css'
import HTML from '../../assets/html.png'

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
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                        <div className='skills__card-info'>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                         <div className='skills__card-info'>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills