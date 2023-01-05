import { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

let addClass = 'input__container';

function ValidateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}


const Contact = () => {

    const enterEmail = useRef(null)
    const enterUsername = useRef(null)
    const enterMessage = useRef(null)
    const form = useRef()

    const [isFocus, setIsFocus] = useState(false)
    const [isValid, setIsValid] = useState(true)



    const inputFocusHandler = () => {
        setIsFocus(true)
    }

    const inputBlurHandler = () => {
        const enteredEmail = enterEmail.current.value;
        const enteredMessage = enterMessage.current.value
        const enteredUsername = enterUsername.current.value

        if (enteredEmail || enteredMessage || enteredUsername) {
            setIsFocus(true)
        } else {
            setIsFocus(false)
        }
    }

    if (isFocus) {
        addClass = 'input__container focus'
    } else {
        addClass = 'input__container'
    }
    const formSubmissionHandler = (event) => {
        event.preventDefault()

        const enteredEmail = enterEmail.current.value;
        const enteredMessage = enterMessage.current.value
        const enteredUsername = enterUsername.current.value

        ValidateEmail(enteredEmail);

        if (enteredEmail && enteredMessage && enteredUsername) {
            emailjs.sendForm(
                "service_m36czh2",
                "template_ivwen29",
                form.current,
                "g3rmu4Z4oH_Q7BP6P"
            ).then((result) => {
                console.log(result.text)
                console.log('message sent')
            },
                (error) => {
                    console.log(error.text)
                })


            setIsValid(true)
        } else {
            setIsValid(false)
        }

        enterEmail.current.value = ''
        enterMessage.current.value = ''
        enterUsername.current.value = ''
    }


    return (
        <div>
            <section className="contact section">
                <h2 data-heading="Get in touch" className="section__title">Contact Me</h2>

                <div className="contact__container container grid">
                    <div className="contact__content">
                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="uil uil-envelope-edit contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">aadityagagneja1215@gmail.com</span>
                                <span className="contact__button">Write me <i className="uil uil-arrow-right contact__button-icon"></i></span>
                            </div>

                            <div className="contact__card">
                                <i className="uil uil-github contact__card-icon"></i>
                                <h3 className="contact__card-title">Github</h3>
                                <span className="contact__card-data">Aaditya Gagneja</span>
                                <span className="contact__button">Code<i className="uil uil-arrow-right contact__button-icon"></i></span>
                            </div>

                            <div className="contact__card">
                                <i className="uil uil-twitter contact__card-icon"></i>
                                <h3 className="contact__card-title">Twitter</h3>
                                <span className="contact__card-data">Aaditya Gagneja</span>
                                <span className="contact__button">Add me<i className="uil uil-arrow-right contact__button-icon"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-content">
                        <form ref={form} onSubmit={formSubmissionHandler} className="contact__form">
                            <div className={`${addClass}`}>
                                <input name='user_name' ref={enterUsername} onBlur={inputBlurHandler} onFocus={inputFocusHandler} type="text" className="input"></input>
                                <label >Username</label>
                                <span>Username</span>
                            </div>

                            <div className={`${addClass}`}>
                                <input name='user_email' ref={enterEmail} onBlur={inputBlurHandler} onFocus={inputFocusHandler} type="email" className='input'></input>
                                <label >Email</label>
                                <span>Email</span>
                            </div>

                            <div className={`${addClass}`}>
                                <textarea name='message' ref={enterMessage} onBlur={inputBlurHandler} onFocus={inputFocusHandler} className="input"></textarea>
                                <label >Message</label>
                                <span>Message</span>
                            </div>
                            {!isValid && <p>Please enter a valid set of inputs.</p>}

                            <button disabled={!isValid} type="submit" className="buttons">
                                <i className="uil uil-navigator button__icon"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact