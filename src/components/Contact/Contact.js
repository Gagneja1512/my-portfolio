const Contact = () => {
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
                                <span className="contact__card-data">user@gmail.com</span>
                                <span className="contact__button">Write me <i className="uil uil-arrow-right contact__button-icon"></i></span>
                            </div>

                            <div className="contact__card">
                                <i className="uil uil-whatsapp contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">user@gmail.com</span>
                                <span className="contact__button">Write me <i className="uil uil-arrow-right contact__button-icon"></i></span>
                            </div>

                            <div className="contact__card">
                                <i className="uil uil-facebook-messenger contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">user@gmail.com</span>
                                <span className="contact__button">Write me <i className="uil uil-arrow-right contact__button-icon"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-content">
                        <form className="contact__form">
                            <div className="input__container">
                                <input type="text" className="input"></input>
                                <label for="">Username</label>
                                <span>Username</span>
                            </div>

                            <div className="input__container">
                                <input type="email" className="input"></input>
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>

                            <div className="input__container textarea">
                                <textarea className="input"></textarea>
                                <label for="">Message</label>
                                <span>Message</span>
                            </div>

                            <button type="submit" className="buttons">
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